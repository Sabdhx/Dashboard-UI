import React from 'react';
import { useState } from 'react';

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage(`${selectedFile.name} uploaded successfully!`);
      const fileUrl = URL.createObjectURL(selectedFile);
      console.log("File saved locally (simulated):", fileUrl);
    }
  };

  return (
    <div>
      <h2>Upload your file here</h2>
      <input type="file" onChange={handleFileChange} className='bg-gray-200 w-[200px]'/>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};

export default FileUploadPage;