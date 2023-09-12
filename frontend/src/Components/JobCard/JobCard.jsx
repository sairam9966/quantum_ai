import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
export default function JobCard(props) {
    const navigate=useNavigate();
    const job=props.job;
    const clickHandler=()=>{
     navigate(`/applications/${job.id}`);
    }
    return (
        <div>
            <div>
                <div className="jobCard">
                    <p className='jobTitle'>{job.role_name}</p>

                    <p id='candidates'>Details:</p>
                    <div className='jobPeople'>
                        <div className='jobPeopleInnerDiv'>
                            <p className='jobCardinnerHeads'>Department</p>
                            <p className='jobCardinnerHeadsNum'>{job.dept}</p>
                        </div>
                        <div className='jobPeopleInnerDiv'>
                            <p className='jobCardinnerHeads'>position</p>
                            <p className='jobCardinnerHeadsNum'>{job.position_type}</p>
                        </div>
                    </div>
                    <div className='postjobDiv'>
                        <p className='jobPostApps' onClick={clickHandler}>Applications</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
