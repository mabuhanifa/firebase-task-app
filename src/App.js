import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase.util";

function App() {
  const [task, setTask] = useState([]);
  console.log(task);
  useEffect(() => {
    const q = query(collection(db, "task"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTask(tasks);
    });
    return unsubscribe;
  }, []);
  return <div>hi</div>;
}

export default App;
