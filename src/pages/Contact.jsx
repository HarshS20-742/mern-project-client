import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Contact = () => {

  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [user, setUser] = useState(true);

  const {userData, API} = useAuth(); 
  if(user && userData){
    setContact({
      username: userData.username,
      email: userData.email,
      message: ''
    });
    setUser(false); // hide login form when user is logged in and display contact form
  }

  const handleInput = (e) =>{
    const {name, value} = e.target;

    // setContact({
    //   ...contact, [name]:value
    // });

    // another way to do the commented code 
    setContact((prev) =>({
      ...prev, [name]: value
    }));

  } 

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // send data to your server
    try {
       const response = await fetch(`${API}/api/form/contact`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(contact),
      
    });
    console.log(response);
    if(response.ok){
      const res_data = await response.json();
     
      toast.success(res_data.message);
      
    }
    } catch (error) {
      console.log('Error sending message: ' + error.message);
    }
   

    
  }

  const handleReset = (e) =>{
    setContact({
      username: '',
      email: '',
      message: ''
    })
  }
  return (
  <>
    <section className='section-contact'>
      <div className="container contact-content">
        <h2 className='main-heading' >contact us</h2>
      </div>
      {/* contact page main */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src='images/support.png' alt='No image found...'/>
        </div>

        {/* actual content of the contact us form */}
        <section className="section-form">
            <form onSubmit={handleSubmit}>
             <div>
             <label htmlFor='usermane'>username</label>
             <input type='text' name='username' id='username' value={contact.username} onChange={handleInput} autoComplete='off'  />
             </div>

             <div>
             <label htmlFor='email'>email</label>
             <input type='email' name='email' id='email' value={contact.email} onChange={handleInput} autoComplete='off'  />
             </div>

            <div>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' cols='30' rows='5' value={contact.message} onChange={handleInput} required></textarea>
            </div>

            <div>
              <button type='submit'>Submit</button>
              <button type='reset' style={{ marginLeft: 5, background: 'red'}} onClick={handleReset}>Reset</button>
            </div>

             
            </form>
        </section>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.540767341737!2d74.02196067595544!3d15.238277761145152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfad26ffffffff%3A0x4b879579d94d8dbb!2sShri%20Damodar%20Nursing%20Home!5e0!3m2!1sen!2sin!4v1721220578809!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </>
  )
}

export default Contact;