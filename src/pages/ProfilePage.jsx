import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Profilecard from '../components/card/Profilecard';
import { Link, useLocation } from 'react-router-dom';

const ProfilePage = () => {
            const [records, setRecords] = useState([]);
          
            useEffect(() => {
              // Fetch stored records from localStorage
              const storedRecords = JSON.parse(localStorage.getItem('records'));
              if (storedRecords) {
                setRecords(storedRecords);
              }
            }, []);

            console.log(records)

  return (
<Layout>
<div className="flex justify-center w-full ">
<div className="container w-full my-3 px-4 lg:px-20 max-w-full ">
  <div className="w-full p-8 my-2 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-xl h-screen">
    <div className="flex mb-4">
        <br/>
      <h1 className="font-bold uppercase text-center text-2xl"> <br/>Profiles</h1>
    </div>
    <Profilecard records={records}/>
 
  </div>
</div>
</div>
  <div className="flex justify-center my-4 ">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          View Home Page
        </Link>
      </div>
        
   </Layout>
  
  );
};

export default ProfilePage;

