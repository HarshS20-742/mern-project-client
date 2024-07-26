import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function AdminContact() {
  const [contactDetails, setContactDetails] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllContactDetails = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('contact-details-server', data);
      
      // Assuming 'contacts' is the correct key from your API response
      setContactDetails(data.contacts || []);
    } catch (error) {
      console.error('Fetch error: ', error);
      toast.error('Failed to fetch contact details');
      setContactDetails([]); // Ensure contactDetails is an empty array on error
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      toast.success('Contact deleted successfully');
      getAllContactDetails(); // Refresh the contact list
    } catch (error) {
      console.error('Delete error: ', error);
      toast.error('Failed to delete contact');
    }
  };

  useEffect(() => {
    getAllContactDetails();
  }, []);

  return (
    <section className='admin-users-section'>
      <div className="container">
        <h1 className="main-heading">Admin Contact Data</h1>
      </div>
      <div className='container admin-users'>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              {/* <th>Update</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contactDetails.length > 0 ? (
              contactDetails.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  {/* <td><Link to={`/admin/contacts/${contact._id}/edit`}>Edit</Link></td> */}
                  <td>
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
                      onClick={() => deleteContact(contact._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No contact details available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminContact;
