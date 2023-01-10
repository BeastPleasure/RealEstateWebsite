import React from 'react';
import './Best.css';

const Best = () => {

  return (

    <div className='best'>

        <h1> Find The Best Rated Properties </h1>

        <div>

            <p> <span className='bold'> All </span> </p>

            <p> Commercial </p>

            <p> Residential </p>

            <p> Agricultural </p>

        </div>

        <div className='container'>

            <img src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80' alt='' />

            <img src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />

            <img src='https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='' />

        </div>

        <button className='btn'> View All </button>

    </div>

  );

};

export default Best;