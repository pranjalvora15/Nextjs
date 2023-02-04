import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const resposne = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resposne.json();
    console.log(data);
  };

  const deleteComment = async id=>{
    const resposne = await fetch(`api/comments/${id}`,{
        method:'DELETE'
    })
    const data = await resposne.json()
    console.log(data)
    fetchComments()

  }

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
          <button onClick={()=>deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
