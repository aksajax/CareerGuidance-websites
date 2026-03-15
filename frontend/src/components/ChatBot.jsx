import React from 'react';

const PDFChatBot = () => {
  return (
    <div style={{ width: '100%', height: '90vh', padding: '20px' }}>
      <h2>AI PDF Assistant</h2>
      <div style={{ 
        border: '2px solid #ddd', 
        borderRadius: '10px', 
        overflow: 'hidden',
        height: '100%' 
      }}>
        <iframe
          src="http://localhost:8501" // Streamlit ka URL
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="PDF Chatbot Backend"
        />
      </div>
    </div>
  );
};

export default PDFChatBot;