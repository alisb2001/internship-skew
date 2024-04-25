
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../redux/actions"; 

const EditNote = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const note = useSelector((state) =>
    state.notes.find((note) => note.id === Number(id))
  );

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and content");
      return;
    }
    dispatch(editNote(Number(id), title, content));
    router.push("/");
  };

  return (
    <div className="container my-4">
      <h1 className="title my-4 text-3xl font-bold underline">Edit Note:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label my-4 text-2xl font-bold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="label my-4 text-2xl font-bold">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditNote;
