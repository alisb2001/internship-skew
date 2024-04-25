import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and content");
      return;
    }
    dispatch(addNote(title, content));

    router.push("/");
  };

  return (
    <div className="container my-4 ">
      <h1 className="title my-4 text-3xl font-bold underline ">Add Note:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label my-4 text-2xl font-bold  ">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="label my-4 text-2xl font-bold  ">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
