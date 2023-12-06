import { useState } from 'react';
//* Styles
import './styles.css';

function InputBar() {
  const [text, setText] = useState('');

  const handleTextInput = (message) => {
    setText(message.target.value);
  };

  const sendMessage = () => {
    console.log('ENVIADO: ', text);
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
