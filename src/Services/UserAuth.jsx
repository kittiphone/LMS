import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:3000/user/authen',
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
         // setIsLoggedIn(true); // <-- update state if authorized
        } else {
          localStorage.removeItem('token');
          //setIsLoggedIn(false); // <-- update state if not authorized
           navigate('/login', { replace: true });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [navigate]);

  return null; // <-- return null 
};

export default UserAuth;
