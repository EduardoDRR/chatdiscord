//* Styling
import './styles.css';

function ChatHeader({ contactName }) {
  return (
    <div className="headerTitle">
      <h2>{contactName}</h2>
    </div>
  );
}

export default ChatHeader;
