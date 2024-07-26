import React from 'react'
import { useAuth } from '../store/auth';

const Service = () => {
  const { service } = useAuth();

  return (
    <>
      <section className='section-services'>
        <div className='container'>
          <h1 className='main-heading'>Services</h1>
        </div>

        <div className="container grid grid-three-cols">
          {service ? (
            service.map((currService, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src='/images/design.png' alt='no image found' width='200' height='200' />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>Harsh Yadav</p>
                    <p>{currService.price}</p>
                  </div>
                  <h2 style={{color: 'black'}}>{currService.service}</h2>
                  <p>{currService.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading services...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Service;
