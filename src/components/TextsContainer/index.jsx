import './styles.css';
//* Components
import TextBubble from '../TextBubble';

const DATA = [
  { id: 0, message: 'Hola', timestamp: '09:00 pm' },
  {
    id: 1,
    message:
      'This means: When you set the width/height of an element, the element often appears bigger than you have set (because the elements border and padding are added to the elements specified width/height).',
    timestamp: '09:00 pm',
  },
  { id: 2, message: 'Hola', timestamp: '09:00 pm' },
  { id: 3, message: 'Hola', timestamp: '09:00 pm' },
];

function TextsContainer({ sender }) {
  return (
    <div className="message-container">
      {sender !== undefined ? (
        <>
          <ul className="message-list-owner">
            {DATA.map((elem) => (
              <li key={elem.id}>
                <TextBubble
                  message={`${elem.message} | ${sender}`}
                  time={elem.timestamp}
                  status={'sender'}
                />
              </li>
            ))}
          </ul>
          <ul className="message-list-sender">
            {DATA.map((elem) => (
              <li key={elem.id}>
                <TextBubble
                  message={elem.message}
                  time={elem.timestamp}
                  status={'owner'}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="home-text">
          <h3>💬&nbsp; Haz click en un chat para comenzar</h3>
        </div>
      )}
    </div>
  );
}

export default TextsContainer;
