import React, { useState } from 'react';

export const Post = () => {
  // State to track likes for each image
  const [likes, setLikes] = useState([0, 0, 0, 0]); // Array to store like counts for each image

  // Function to handle like/unlike for each image
  const toggleLike = (index: number) => {
    setLikes((prevLikes) => {
      // If the image is not already liked and hasn't reached 500 likes, increment it
      if (prevLikes[index] < 500) {
        const newLikes = [...prevLikes];
        newLikes[index] += 1;
        return newLikes;
      }
      return prevLikes; // If the like count is 500, don't change
    });
  };

  return (
    <div style={postStyle}>
      <h2 style={titleStyle}>Post</h2>
      
      {/* Images container */}
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle}>
          <img 
            src="https://t3.ftcdn.net/jpg/04/89/04/66/360_F_489046635_8gPEut1uBnWUI35cLv4WFtN5YI1aSI7b.jpg" 
            alt="chilling" 
            style={imageStyle} 
          />
          <button 
            style={likeButtonStyle} 
            onClick={() => toggleLike(0)}
          >
            Like {likes[0]} {/* Show likes for this image */}
          </button>
        </div>

        <div style={imageWrapperStyle}>
          <img 
            src="https://static2.bigstockphoto.com/1/2/7/large1500/72134821.jpg" 
            alt="scenic view" 
            style={imageStyle} 
          />
          <button 
            style={likeButtonStyle} 
            onClick={() => toggleLike(1)}
          >
            Like {likes[1]} {/* Show likes for this image */}
          </button>
        </div>

        <div style={imageWrapperStyle}>
          <img 
            src="https://pbs.twimg.com/media/FjdHscNXwAk5z3Q.jpg" 
            alt="scenic view" 
            style={imageStyle} 
          />
          <button 
            style={likeButtonStyle} 
            onClick={() => toggleLike(2)}
          >
            Like {likes[2]} {/* Show likes for this image */}
          </button>
        </div>

        <div style={imageWrapperStyle}>
          <img 
            src="https://pbs.twimg.com/media/FjdjzveXkAIbw72?format=jpg&name=small" 
            alt="scenic view" 
            style={imageStyle} 
          />
          <button 
            style={likeButtonStyle} 
            onClick={() => toggleLike(3)}
          >
            Like {likes[3]} {/* Show likes for this image */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles for the Post component
const postStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '600px', // Set a max width for the post
  margin: '20px auto', // Center the post horizontally
  padding: '20px', // Add some padding inside the post
  borderRadius: '10px', // Round the corners of the post
  backgroundColor: '#fff', // White background for the post
  marginLeft: '20px',
};

// Styles for the title
const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px', // Space below the title
  color: '#333', // Dark color for the title
};

// Container for the images
const imageContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between', // Space out the images
  gap: '10px', // Add some space between images
  flexWrap: 'wrap', // Allow images to wrap on smaller screens
};

// Wrapper for each image and button
const imageWrapperStyle: React.CSSProperties = {
  position: 'relative', // Allows button to be placed below the image
};

// Styles for individual images
const imageStyle: React.CSSProperties = {
  width: '48%', // Set width to 48% of the container for side-by-side images
  height: 'auto', // Ensure the height is adjusted to the image aspect ratio
  borderRadius: '8px', // Slight rounding of the image corners
  objectFit: 'cover', // Make sure the image fills the space well without distortion
};

// Styles for the Like button
const likeButtonStyle: React.CSSProperties = {
  display: 'block',
  marginTop: '10px',  // Space between image and button
  padding: '10px 20px', // Add padding for the button
  backgroundColor: '#007bff', // Blue background for the button
  color: '#fff', // White text
  border: 'none', // Remove border
  borderRadius: '5px', // Rounded corners for the button
  cursor: 'pointer', // Pointer cursor for interactivity
  fontSize: '14px', // Font size for the button text
  transition: 'background-color 0.3s ease', // Smooth transition for background color
};

// Adding hover effect to the Like button
likeButtonStyle[':hover'] = {
  backgroundColor: '#0056b3', // Darker blue when hovered
};
