import { collection, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from './firebase.util';

function App() {
  useEffect(()=>{
    const {_path}= query(collection(db, 'task'));
    console.log(_path);
  },[])
  return (
    <div>hi</div>
  );
}

export default App;
