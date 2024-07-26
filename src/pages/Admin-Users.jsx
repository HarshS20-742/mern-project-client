import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function AdminUsers() {
  const [user, setUser] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: 'GET',
        headers: {
          'Authorization': authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setUser(data.users || []); // Assuming 'users' is the correct key from your API response
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  const deleteUser = async (userId) => {
   try {
    const response = await fetch(`${API}/api/admin/users/delete/${userId}`,{
        method: 'DELETE',
        headers: {
          'Authorization': authorizationToken,
        },
        
     
    });

    const data = await response.json();
    console.log(data);
    if(response.ok){
        toast.success('User deleted successfully');

        getAllUsers();
    }
   } catch (error) {
    
   }
  }

 

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className='admin-users-section'>
      <div className="container">
        <h1 className="main-heading">Admin User Data</h1>
      </div>
      <div className='container admin-users'>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((currUser, i) => (
              <tr key={i}>
                <td>{currUser.username}</td>
                <td>{currUser.email}</td>
                <td>{currUser.phone}</td>
                <td><Link to={`/admin/users/${currUser._id}/edit`}>Edit</Link></td>
                <td onClick={() => deleteUser(currUser._id)}>
                  <button
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = 'darkred')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminUsers;
