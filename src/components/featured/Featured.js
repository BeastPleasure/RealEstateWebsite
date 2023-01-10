import React from 'react';
import './Featured.css';

const Featured = () => {

  return (

    <div className='featured'>

        <h1 className='featured-text'> Top Featured Listings </h1>

        <p className='featured-text'> Selected Listings By City, State & Zip Based On Views </p>

        <div className='container'>

            <img className='span-3 image-grid-row-2' src='https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            <img src='https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            <img src='https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            <img src='https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80' alt=''/>

            <img src='https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            <div className='span-3 img-details'>

                <div className='top'>

                    <h2> 123 Melrose St. Dallas, MA</h2>

                    <p> House For Sale: </p>

                    <p className='price'> $3,481,903 </p>

                </div>

                <div className='info-grid'>

{/* /////////////////////////////////////////////////////////////////////////////////// */}

                    <div>

                        <div className='info'>

                            <p className='bold'> Bedrooms: </p>

                            <p> 5 </p>

                        </div>

                        <div className='info'>

                            <p className='bold'> Bathrooms: </p>

                            <p> 7 </p>

                        </div>

                    </div>

{/* /////////////////////////////////////////////////////////////////////////////////// */}

                    <div>

                        <div className='info'>

                            <p className='bold'> Square Feet: </p>

                            <p> 9,671 </p>

                        </div>

                        <div className='info'>

                            <p className='bold'> Est Payment: </p>

                            <p> $14,979/mo </p>

                        </div>

                    </div>


                </div>

            </div>


            <div className='span-2 right-img-details'>

                <p> 

                    A Beautiful Modern Day Home In The City With A Full-Size Pool

                </p>

                <button className='btn'> View Listing </button>

            </div>

        </div>


                            {/* SECOND SECTION  */}
        

        <div className='container'>

            <img className='order-2' src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' alt=''/>

            <img className='order-3' src='https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt=''/>


            <img className='span-3 image-grid-row-2 order-1' src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            
            <img className='order-4' src='https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''/>

            <img className='order-5' src='https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' alt=''/>

            
            
            <div className='span-2 right-img-details order-7'>

                <p> 

                    A Beautiful Modern Day Home In The City With A Full-Size Pool

                </p>

                <button className='btn'> View Listing </button>

            </div>

            
            
            <div className='span-3 img-details order-6'>

                <div className='top'>

                    <h2> 123 Melrose St. Dallas, MA</h2>

                    <p> House For Sale: </p>

                    <p className='price'> $3,481,903 </p>

                </div>

                <div className='info-grid'>

{/* /////////////////////////////////////////////////////////////////////////////////// */}

                    <div>

                        <div className='info'>

                            <p className='bold'> Bedrooms: </p>

                            <p> 5 </p>

                        </div>

                        <div className='info'>

                            <p className='bold'> Bathrooms: </p>

                            <p> 7 </p>

                        </div>

                    </div>

{/* /////////////////////////////////////////////////////////////////////////////////// */}

                    <div>

                        <div className='info'>

                            <p className='bold'> Square Feet: </p>

                            <p> 9,671 </p>

                        </div>

                        <div className='info'>

                            <p className='bold'> Est Payment: </p>

                            <p> $14,979/mo </p>

                        </div>

                    </div>


                </div>

            </div>


        </div>

    </div>

  );

};

export default Featured;