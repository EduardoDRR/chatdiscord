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
          <Link to={'/Fer'}>Fer Contreras</Link>
        </li>
        <li>
          <Link to={'/Flowers'}>El Flowers</Link>
        </li>
        <li>
          <Link to={'/Alexis'}>Alexis 🤠</Link>
        </li>
        <li>
          <Link to={'/Lalo'}>Lalo 🚀</Link>
        </li>
      </ul>
    </aside>
  );
}

export default ChatsBar;
