import React from 'react';

const Info: React.FC<{ followers: number, following: number }> = ({ followers, following }) => {
  // Define styles inline
  const profileInfoStyle = {
    display: 'flex',       // Use flexbox to align items horizontally
    gap: '20px',           // Space between the items
    fontSize: '16px',  
    marginLeft:'200px'
  };

  const infoItemStyle = {
    margin: '0',           // Remove default margin
    fontWeight: 'bold',   // Make the text bold
  };

  return (
    <div style={profileInfoStyle}>
      <p style={infoItemStyle}> Followers 20M</p>
      <p style={infoItemStyle}> Following 100k</p>
    </div>
  );
};

export default Info;
