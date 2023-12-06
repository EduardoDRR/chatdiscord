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
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [error, setError] = useState('');

  const getMessages = async () => {
    try {
      const res = await query(collection(db, 'chat1'), orderBy('sender'));

      return onSnapshot(res, (querySnapshot) => {
        setMessages(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    // Add a new message to Firestore
    /* await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }); */

    setFormValue('');
  };

  return (
    <div className="app-content">
      <ChatsBar />
      <main>
        <ChatHeader contactName={id} />
        <TextsContainer sender={id} messages={messages} />
        <InputBar sendMessage={sendMessage} />
      </main>
    </div>
  );
}

export default App;
