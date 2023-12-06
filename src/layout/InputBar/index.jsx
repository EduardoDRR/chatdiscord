import { useState } from 'react';
//* Styles
import './styles.css';

function InputBar({ sendMessage }) {
  const [text, setText] = useState('');

  const handleTextInput = (message) => {
    setText(message.target.value);
  };

  return (
    <form className="inputMessage" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Inserta un mensaje..."
        value={text}
        onChange={(event) => handleTextInput(event)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </form>
  );
}

export default InputBar;
