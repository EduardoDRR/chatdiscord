import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import App from './App.jsx';
import TextstContainer from './components/TextsContainer';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyA1mYQOH2DB0cWtVvKMC08l5PZje4STT-A',
  authDomain: 'chatdiscord-6069c',
  projectId: 'chatdiscord-6069c',
  storageBucket: 'chatdiscord-6069c.appspot.com',
  messagingSenderId: '21055040300',
  appId: '1:21055040300:web:41d3e49a3ea2d9b8465a89',
  measurementId: 'G-R4KK9YC76B',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:id',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
