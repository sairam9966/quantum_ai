import os
import pdfplumber
import requests
from PyPDF2 import PdfReader
from transformers import AutoTokenizer, AutoModel, AutoModelForSeq2SeqLM
import torch
from sklearn.metrics.pairwise import cosine_similarity
from fastapi import FastAPI,Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict
from sentence_transformers import SentenceTransformer, util
from transformers import pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
# import boto3  # Import boto3 for AWS S3 access
# from io import BytesIO

# AWS_ACCESS_KEY_ID = "AKIAUIVIPQONP3OIROOC"
# AWS_SECRET_ACCESS_KEY = "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"
# AWS_REGION = "us-east-2"
# S3_BUCKET_NAME = "airesumes"

app = FastAPI()

# Define CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  # Example frontend development server
    "https://yourfrontenddomain.com",  # Actual frontend domain
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()
    return text

# code to extract text from the aws

# def extract_text_from_s3_pdf(test1):
#     # Parse the S3 URL to get bucket name and object key
#     s3 = boto3.resource('s3', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY, region_name=AWS_REGION)
#     obj = s3.Object(S3_BUCKET_NAME, test1)
#     fs = obj.get()['Body'].read()
#     pdf_reader = PdfReader(BytesIO(fs))
        
#     text = ""
#     for page_num in range(len(pdf_reader.pages)):
#         page = pdf_reader.pages[page_num]
#         text += page.extract_text()
#     return text

# Load model from HuggingFace Hub
model = SentenceTransformer('obrizum/all-mpnet-base-v2')
# Load AutoTokenizer and AutoModelForSeq2SeqLM models
tokenizer = AutoTokenizer.from_pretrained("t5-small")
bert_model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")

# Create summarization pipeline
summarization = pipeline("summarization", model="facebook/bart-large-cnn")
summarizer = pipeline("summarization")


from pydantic import BaseModel

class ResumeJobRequest(BaseModel):
    resumeurl: str
    jobdesc: str

def preprocess_function(examples):
    prefix = "summarize: "
    inputs = [prefix + doc for doc in examples["text"]]
    model_inputs = tokenizer(inputs, max_length=1024, truncation=True, padding="max_length")

    labels = tokenizer(examples["summary"], max_length=128, truncation=True, padding="max_length")

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs

# Placeholder function for custom summarization
def custom_summarization(text):
    summarized_resume = summarizer(text, max_length=500, min_length=5, do_sample=False)[0]['summary_text']
    return summarized_resume

def calculate_skills_similarity(resume_text, job_desc_skills):
    # Tokenize resume text
    resume_tokens = resume_text.lower().split()
    # Calculate the intersection of resume skills and job description skills
    common_skills = set(resume_tokens) & set(job_desc_skills)
    # Calculate skills similarity based on common skills count
    skills_similarity = len(common_skills) / max(len(resume_tokens), len(job_desc_skills))

    return skills_similarity

# Placeholder function for calculating field preference
def calculate_field_preference(field):
    field_preferences = {
        "experience": 2.0,
        "projects": 1.5,
        "skills": 1.5,
        # ... other fields with lower preferences ...
    }
    return field_preferences.get(field, 1.0)  # Default to 1.0 if field not found

# Placeholder function to calculate ATS score
def calculate_ats_score(similarity, semantic_similarity, skills_similarity, key, field_preference):
    if key == "skills":
        # Calculate ATS score with additional consideration for skills similarity
        ats_score = (semantic_similarity * field_preference + similarity + skills_similarity) / 3.0
    else:
        # Calculate ATS score without additional consideration for skills similarity
        ats_score = (semantic_similarity * field_preference + similarity) / 2.0

    return ats_score

jobdesc_fields = {
    "achievements": ["summary"],
    "profile": ["summary"],
    "education": ["education"],
    "qualification": ["qualification"],
    "experience": ["experience"],
    "projects": ["projects"],
    "skills": ["skills"],
    "certifications": ["certifications"],
    "internships": ["internships"],
}
@app.get("/get_resume_and_job_description")
async def get_resume_and_job_description(request_data: ResumeJobRequest):
    try:
        resume_url = request_data.resumeurl
        resume=rf"C:\projects\internship\quantum_ai\backend\uploads\{resume_url}"
        resume_text = extract_text_from_pdf(resume)
        job_desc_text = request_data.jobdesc
        # print("@@@@@@")
        # print(resume_text)
        print("@@@@@@")
        print(job_desc_text)
        print("&&&&&&")
        # resume_sections = extract_resume_sections(resume_text)
        resume_sections = defaultdict(list)
        current_field = None
        for line in resume_text.split('\n'):
            words = line.split()
            for word in words:
                for field, keywords in jobdesc_fields.items():
                    for keyword in keywords:
                        if keyword in word.lower():
                            current_field = field
                            break
                if current_field:
                    resume_sections[current_field].append(word)
            if not line.strip():
                current_field = None
        # job_desc_sections = extract_sections(job_desc_text)
        job_desc_sections = defaultdict(list)
        current_field = None
        for line in job_desc_text.split('\n'):
            words = line.split()
            for word in words:
                for field, keywords in jobdesc_fields.items():
                    for keyword in keywords:
                        if keyword in word.lower():
                            current_field = field
                            break
                if current_field:
                    job_desc_sections[current_field].append(word)
            if not line.strip():
                current_field = None
        print("&&&&&&&")
        print(resume_sections)
        print("&&&&&&&")
        print(job_desc_sections)
        overall_ats_score = 0.0
        resume_sections = {key.lower(): value for key, value in resume_sections.items()}
        print("*******")
        print(list(resume_sections.keys()))
        job_desc_sections = {key.lower(): value for key, value in job_desc_sections.items()}
        print("******")
        print(job_desc_sections)
        print("*******")
        
        results = []

        for key in resume_sections:
            if key in job_desc_sections:
                resume_data = " ".join(resume_sections[key])
                job_desc_data = " ".join(job_desc_sections[key])

                if resume_data and job_desc_data:
                    tfidf_vectorizer = TfidfVectorizer()
                    tfidf_matrix = tfidf_vectorizer.fit_transform([resume_data, job_desc_data])
                    similarity = cosine_similarity(tfidf_matrix[0], tfidf_matrix[1])[0][0]

            # Calculate semantic similarity using sentence-transformers
                    embeddings1 = model.encode([resume_data], convert_to_tensor=True)
                    embeddings2 = model.encode([job_desc_data], convert_to_tensor=True)
                    semantic_similarity = util.pytorch_cos_sim(embeddings1, embeddings2)[0][0].item()

            # Calculate skills similarity
                    skills_similarity = calculate_skills_similarity(resume_data, job_desc_sections["skills"])

            # Calculate field preference
                    field_preference = calculate_field_preference(key)

            # Calculate ATS score for the field
                    ats_score = calculate_ats_score(similarity, semantic_similarity, skills_similarity, key, field_preference)

            # Generate summarized resume using custom summarization
                    summarized_resume = custom_summarization(resume_data)
                    results.append({"field": key, "ats_score": ats_score, "summary": summarized_resume})
                
                # Update overall ATS score
                overall_ats_score += ats_score

        for key in resume_sections:
            if key not in job_desc_sections:
                print("#######")
                print(key)
                resume_data = " ".join(resume_sections[key])

                if resume_data:
                    # Append the summary to the results
                    field_preference = calculate_field_preference(key)

            # Calculate semantic similarity using sentence-transformers between resume data and skills section of job description
                    job_desc_skills_text = " ".join(job_desc_sections["skills"])
                    embeddings1 = model.encode([resume_data], convert_to_tensor=True)
                    embeddings2 = model.encode([job_desc_skills_text], convert_to_tensor=True)
                    semantic_similarity = util.pytorch_cos_sim(embeddings1, embeddings2)[0][0].item()

            # Generate summarized data using the summarization pipeline
                    summarized_data = summarizer(resume_data, max_length=50, min_length=5, do_sample=False)[0]['summary_text']

            # Calculate ATS score for the field
                    ats_score = calculate_ats_score(0, semantic_similarity, 0, key, field_preference)
                    results.append({"field": key, "ats_score": ats_score, "summary": summarized_data})

                    # Update overall ATS score
                    overall_ats_score += ats_score

        final_ats_score = (overall_ats_score / len(resume_sections)) * 100

        # Generate a final summary that summarizes all fields
        all_summaries = [result["summary"] for result in results]
        final_summary = custom_summarization(" ".join(all_summaries))
        global summary
        summary=final_summary
        global score
        score=final_ats_score

        results.append({"field": "Final Summary", "ats_score": final_ats_score, "summary": final_summary})
        
        return JSONResponse(content=results)

    except requests.exceptions.RequestException as e:
        return JSONResponse(content={"error": f"An error occurred: {str(e)}"})

# @app.get("/summary_score")
# async def summary_score():
#     if score and summary:
#         response_data = {"ats_score":score, "summary":summary}
#         return response_data
#     else:
#         return {"message": "Image URL not available"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)