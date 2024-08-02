import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className=" text-white bg-gray-900 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvT9uDJ9kV7C3zO6iOt95e24Dtt3QMSncmqLLsuv4KWpeC_Gx6C0AZZpyHQWps4h-Psq8&usqp=CAU" 
            className="h-8" 
            alt="Blogbook logo" 
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white font-mono">Blogbook</span>
        </Link>
        <div className="flex items-center space-x-2 rtl:space-x-reverse mt-4 md:mt-0">
         
           
            <div class="flex items-center justify-center gap-2 ">
              <Link 
                to="" 
                className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono  h-10"
              >
                Home
              </Link>
              <Link 
                to="" 
                className=" flex items-center justify-center py-1 px-2 text-sm md:text-sm lg:text-base bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 font-mono  h-10"
              >
               Profile
              </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header