import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-white flex justify-center text-white plano">
          <div className='container grid grid-cols-2 text-red-700'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold '>Performance-Farma!</h2>
              <p className='text-xl'>Sua saúde em primeiro lugar, com excelência e comprometimento!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-logo text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;