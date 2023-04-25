import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from "../api/config";
const UserCheck = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- set initial state to false
  const [firstname, setFirstname] = useState(''); 
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .post(
        `${API_BASE_URL}/user/authen`,
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
          setFirstname(response.data.decoded.firstname);
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

  // Return an object with both isLoggedIn and firstname properties

  return { isLoggedIn, firstname };
};

export default UserCheck;
