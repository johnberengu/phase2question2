import React from 'react';

export const Header = () => {
  // Inline Styles
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',         
    padding: '40px 20px',        // Add top and bottom padding, some on the sides
    borderBottom: '4px solid #007bff', 
    marginBottom: '30px',        // Space below the header section
    backgroundColor: 'transparent', // Make background transparent (no white background)
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',            
    color: '#ffffff',            // White font color for contrast
    fontWeight: '600',           
    marginBottom: '15px',        // Add space between title and image
    textTransform: 'uppercase',  // Uppercase letters for extra emphasis
  };

  const imageStyle: React.CSSProperties = {
    width: '160px',              // Set width of the image
    height: '160px',             // Set height of the image to make it round
    borderRadius: '50%',         
    border: '5px solid #ffffff', // White border around the image
    objectFit: 'cover',          
    transition: 'transform 0.3s ease', // Smooth transition for hover effect
    cursor: 'pointer',          // Make the image interactive with pointer cursor
  };

  // Hover effect for the image
  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.currentTarget.style.transform = 'scale(1.1)';  // Slightly enlarge the image
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.currentTarget.style.transform = 'scale(1)';   // Reset the size of the image
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>lil Mbwa</h1>
      <img
        style={imageStyle}
        src="https://media.tenor.com/tDtvDljTdzoAAAAM/dog-dogs.gif"
        alt="Profile"
        onMouseEnter={handleMouseEnter}  // On hover, enlarge the image
        onMouseLeave={handleMouseLeave}  // Reset image size when mouse leaves
      />
    </header>
  );
};