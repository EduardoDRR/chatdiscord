import { Link } from 'react-router-dom';
//* Styles
import './styles.css';

function ChatsBar() {
  return (
    <aside>
      <Link to={'/'}>
        <h1>Chat App</h1>
      </Link>
      <ul className="chats-list">
        <li>
          <Link to={'/chat1'}>chat 1</Link>
        </li>
        <li>
          <Link to={'/chat2'}>chat 2</Link>
        </li>
        <li>
          <Link to={'/chat3'}>chat 3</Link>
        </li>
        <li>
          <Link to={'/chat4'}>chat 4</Link>
        </li>
      </ul>
    </aside>
  );
}

export default ChatsBar;
