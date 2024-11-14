import React from "react";

function Blog({image, title, body}) {
    
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {body}
          </p>
          <button className="btn btn-primary">Show more</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
