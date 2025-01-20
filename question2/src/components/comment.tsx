import React, { useState } from 'react';

interface CommentProps {
  addComment: (newComment: string) => void;
}

export const Comment: React.FC<CommentProps> = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    fontWeight: '700',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#0056b3',
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === '') {
      setErrorMessage('Please add a comment');
      return;
    }

    setErrorMessage('');
    addComment(comment);  // Pass the new comment to the parent component
    setComment(''); // Clear the input field after submission
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Comment here:</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button
        style={buttonStyle}
        onClick={handleCommentSubmit}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Submit
      </button>
    </div>
  );
};
