import { Link } from 'react-router-dom';
//* Styles
import './styles.css';

function ChatsBar() {
  return (
    <aside>
      <Link to={'/'}>
        <h1>Lalo's Chat App</h1>
      </Link>
      <ul className="chats-list">
        <li>
          <Link to={'/Fer Contreras'}>Fer Contreras</Link>
        </li>
        <li>
          <Link to={'/Miguel Eduardo'}>Miguel Eduardo 🌻</Link>
        </li>
        <li>
          <Link to={'/Alexis'}>Alexis 🤠</Link>
        </li>
        <li>
          <Link to={'/Mariana Torres'}>Mariana Torres</Link>
        </li>
        <li>
          <Link to={'/Diego Armando'}>Diego Armando</Link>
        </li>
        <li>
          <Link to={'/San Cristobal'}>San Cristobal</Link>
        </li>
        <li>
          <Link to={'/Laura'}>Laura 🎨</Link>
        </li>
        <li>
          <Link to={'/Jane Lane'}>Jane Lane</Link>
        </li>
      </ul>
    </aside>
  );
}

export default ChatsBar;
