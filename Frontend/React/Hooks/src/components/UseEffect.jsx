import React, { useState, useEffect } from "react";

function UseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function apiData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data); 
    }

    apiData();
  }, []);  

  return (
    <>
      <div className="card-deck">
        {posts.map((post) => (
          <div className="card" style={{ width: '18rem' }} key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UseEffect;
