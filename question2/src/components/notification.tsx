import React from 'react';

interface NotificationProps {
  comments: string[];
}

export const Notification: React.FC<NotificationProps> = ({ comments }) => {
  return (
    <div>
      <h2>Notifications:</h2>
      {comments.length === 0 ? (
        <p>No new comments.</p> // Display a message when no comments exist
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginBottom: '5px' }}>
              {comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
