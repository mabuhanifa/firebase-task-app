import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase.util";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // Create todo
  const createTask = async () => {
    if (title.length && description.length && date.length) {
      await addDoc(collection(db, "task"), {
        title,
        description,
        date,
      });
      setTitle("");
      setDescription("");
      setDate("");
    } else {
      alert("Please fill all the fields");
      setTitle("");
      setDescription("");
      setDate("");
    }
  };
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "task", id));
  };

  useEffect(() => {
    const q = query(collection(db, "task"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTasks(tasks);
    });
    return unsubscribe;
  }, []);
  return (
    <div className="p-10">
      <div>
        <input
          type="text"
          placeholder="title"
          className="bg-gray-300 px-5 py-3 my-3 rounded"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          className="bg-gray-300 px-5 py-3 my-3 rounded"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="date"
          className="bg-gray-300 px-5 py-3 my-3 rounded"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={createTask}
          className="bg-blue-600 text-white font-bold px-5 py-3 my-3 rounded"
        >
          Create Task
        </button>
      </div>
      <div>
        {tasks &&
          tasks.map((task) => (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <p>{task.date}</p>
              <button
                className="bg-red-600 text-white font-bold px-5 py-3 my-3 rounded"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
