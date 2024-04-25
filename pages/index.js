import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { deleteNote } from "../redux/actions";
const Home = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this note?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div className="container">
      <h1 className="title my-4 text-3xl font-bold underline ">Notes</h1>
      <Link href="/add">
        <button className="add-note-btn py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Note
        </button>
      </Link>
      <table className="note-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td className=" w-1/6 title text-xl font-bold  text-black-500 hover:text-blue-700 capitalize ">
                {note.title}
              </td>
              <td className=" text-lg font-bold text-black-500 hover:text-blue-700 capitalize align-middle my-4 px-4">
                {note.content}
              </td>
              <td className=" w-1/6 align-middle my-4 px-4">
                <Link href={`/edit/${note.id}`}>
                  <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
