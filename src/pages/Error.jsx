import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div id='error-page'>

        <section className=" content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page Not Found</h4>
            <p>
                Oops! It seems like the page you are trying to access does not exist. If you believe there is an issue, please feel free to report it, and we will look into it.

            </p>
            <div className='btns'>
                <NavLink to='/' >return home</NavLink>
                <NavLink to='contact'>report problem</NavLink>

            </div>
        </section>
    </div>
    </>
  )
}

export default Error