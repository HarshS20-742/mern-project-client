import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
  const {storeTokenInLS, API} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    const { name, value} = e.target;

    setUser({
      ...user,  [name]: value
    });
  }

  // handle the form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${API}/api/auth/register`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const res_data = await response.json();
    console.log('res from server',res_data.extraDetails);
    if(response.ok){
   
      // localStorage.setItem('token',res_data.token);
      storeTokenInLS(res_data.token);
      setUser({
        username: '',
        email: '',
        phone: '',
        password: '',
      });
      toast.success('Registration successful');
      navigate('/');
    }else{
      toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
    }
    } catch (error) {
      console.log('Register Error: ',  error);
    }
    
  
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="images/register.png"
                  alt="Registration"
                  width='500'
                  height='500'
                />
              </div>

              {/*  lets make the registration form here */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Enter username" id="username"  value={user.username} onChange={handleInput}  required />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" value={user.email} onChange={handleInput} required />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input type="number" id="phone" name="phone" placeholder="Enter Phone" value={user.phone} onChange={handleInput} required />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleInput} required  />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
