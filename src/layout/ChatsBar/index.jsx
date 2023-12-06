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
          <Link to={'/Fer'}>chat 1</Link>
        </li>
        <li>
          <Link to={'/Flowers'}>chat 2</Link>
        </li>
        <li>
          <Link to={'/Alexis'}>chat 3</Link>
        </li>
        <li>
          <Link to={'/Lalo'}>chat 4</Link>
        </li>
      </ul>
    </aside>
  );
}

export default ChatsBar;
