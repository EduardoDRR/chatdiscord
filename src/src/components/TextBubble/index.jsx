//* Styles
import './styles.css';

function TextBubble({ message, time, status }) {
  return (
    <div
      className={status === 'owner' ? 'textBubble-owner' : 'textBubble-sender'}
    >
      <p className="message">{message}</p>
      <small>
        <span className="time">{time}</span>
      </small>
    </div>
  );
}

export default TextBubble;
