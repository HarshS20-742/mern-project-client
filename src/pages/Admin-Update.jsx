import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function AdminUpdateUser() {
    const { userId} = useParams();
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
    });
    const { authorizationToken, API} = useAuth();
    const navigate = useNavigate();


    const getUserById = async()=>{
        // fetch user data from backend

        try {
            const response = await fetch(`${API}/api/admin/users/${userId}`,{
            method: 'GET',
            headers:{
                'Authorization': authorizationToken,
            }
        })
        if(response.ok){
            const data = await response.json();
            setUser(data.data);
            console.log(data.data);
        }
        } catch (error) {
            console.error('Fetch user error:', error);
            toast.error('Failed to fetch user data');
        }

        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };

    const handleUpdate = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/admin/users/update/${userId}`,{
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': authorizationToken,
                },
                body: JSON.stringify(user),
            });
            if(!response.ok){
                toast.error('Not Updated');
                throw new Error('Network response was not ok');
            }
            toast.success(`${user.username}'s data was updated successfully`);
            navigate(-1); // navigate back to the users list page


        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUserById();
    }, []);
  return (
    <>
    <section className='section-contact'>
      <div className="container contact-content">
        <h2 className='main-heading' >Update User {user.username}</h2>
      </div>
      {/* contact page main */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          
        </div>

        {/* actual content of the contact us form */}
        <section className="section-form">
            <form onSubmit={handleUpdate} >
             <div>
             <label htmlFor='usermane'>username</label>
             <input type='text' name='username' value={user.username} id='username' onChange={handleInputChange} autoComplete='off'  />
             </div>

             <div>
             <label htmlFor='email'>email</label>
             <input type='email' name='email' id='email' value={user.email} onChange={handleInputChange}  autoComplete='off'  />
             </div>

             <div>
             <label htmlFor='phone'>phone</label>
             <input type='number' name='phone' id='phone' value={user.phone} onChange={handleInputChange} autoComplete='off'  />
             </div>
         

            <div>
              <button type='submit'>Update</button>
             
            </div>

             
            </form>
        </section>
      </div>

     
    </section>
  </>
  )
}

export default AdminUpdateUser;