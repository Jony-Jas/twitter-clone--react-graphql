import React from "react";
import Post from "./Post";
import { useQuery, gql } from "@apollo/client";

const GET_POST = gql`
  query GetPosts {
    post {
      id
      name
      username
      content
    }
  }
`;

function CenterPane() {
  const { loading, error, data } = useQuery(GET_POST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="center-container">
      <h3 style={{ paddingLeft: "1rem" }}>Home</h3>
      {data.post.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          username={post.username}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default CenterPane;
