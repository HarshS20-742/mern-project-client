import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const {storeTokenInLS, API} = useAuth();

  const handleInput = (e) =>{
    const {name, value} = e.target;
    setuser({
      ...user, [name]:value
    });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/login`,{
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(user),
    });
    console.log('Login response: ',response);
    const res_data = await response.json();
    if(response.ok){
      storeTokenInLS( res_data.token);
      setuser({
        email: '',
        password: '',
      });
      toast.success('Login successful');
      navigate('/');

    }else{
      
      toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message); 
    }
    } catch (error) {
      console.log('ErrorCatch: ' + error);
    }
    
  }
  return (
   <>
   <section>
    <main>
          {/* <h3>Login Form</h3> */}
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="images/login.png" alt="Login Image" />
          </div>

          {/* this is the login fields */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'
            >
              Login Form
            </h1><br/>
            <form onSubmit={handleSubmit}>
            <div>
                    <label  htmlFor="email">Email</label><br/>
                    <input type="email" name="email" placeholder="Enter email" id="email"  value={user.email} onChange={handleInput}  required />
                  </div>

                  <div>
                    <label htmlFor="password">password</label><br/>
                    <input type="password" name="password" placeholder="Enter password" id="password"  value={user.password} onChange={handleInput}  required />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
   </section>
   
   </>
  )
}

export default Login