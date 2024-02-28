import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
  let navigate = useNavigate()

 

  let navbarComponent


  return (
    <>
     <div className='w-full bg-green-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/produto' className='hover:underline'>Produtos</Link>
            <Link to='/categoria' className='hover:underline'>Categorias</Link>


            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar