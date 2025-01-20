import React, { useState } from 'react';
import { Comment } from './components/comment';
import { Notification } from './components/notification';
import { Post } from './components/post';
import Info from './components/userprofile/info';
import { Header } from './components/userprofile/header';
import './App.css';

export const App = () => {
  // State to store the list of comments
  const [commentsList, setCommentsList] = useState<string[]>([]);

  // Function to update the comments list
  const addComment = (newComment: string) => {
    setCommentsList((prevComments) => [...prevComments, newComment]); // Add new comment to the list
  };

  return (
    <div>
      <Header />
      <Info followers={100} following={150} />
      <Post />
      
      {/* Pass the addComment function to the Comment component */}
      <Comment addComment={addComment} />

      {/* Pass the comments list to the Notification component */}
      <Notification comments={commentsList} />
    </div>
  );
};
