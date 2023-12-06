import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from './main.jsx';
//* Components
import TextsContainer from './components/TextsContainer';
//* Layout
import InputBar from './layout/InputBar';
import ChatsBar from './layout/ChatsBar';
import ChatHeader from './layout/ChatHeader';

function App() {
  const [chats, setChats] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getMessages = async () => {
    try {
      const res = await query(collection(db, 'chat1'), orderBy('id'));

      onSnapshot(res, (querySnapshot) => {
        setChats(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="app-content">
      <ChatsBar />
      <main>
        <ChatHeader contactName={id} />
        <TextsContainer sender={id} />
        {chats}
        <InputBar />
      </main>
    </div>
  );
}

export default App;
