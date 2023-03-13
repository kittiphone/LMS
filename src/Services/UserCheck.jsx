import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserCheck = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- set initial state to false

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:3000/authen',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === 'ok') {
          setIsLoggedIn(true); // <-- update state if authorized
        } else {
         // localStorage.removeItem('token');
          setIsLoggedIn(false); // <-- update state if not authorized
          // navigate('/login', { replace: true });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [navigate]);

  return isLoggedIn; // <-- return the isLoggedIn state variable
};

export default UserCheck;
