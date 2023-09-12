import React from 'react';

const PdfPage = () => {
  // You can use an iframe to display the PDF file
  return (
    <div>
     <h1>hello</h1>
      <iframe
        title="PDF Viewer"
        src="./1.pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default PdfPage;
