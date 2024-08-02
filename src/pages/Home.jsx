import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import Userform from '../components/form/Userform'
import Usertable from '../components/table/Usertable';

const Home = () => {
    
      const [records, setRecords] = useState([]); //this is a array to store records from form
      console.log(records)
      
      const addRecord = (data) => {
            setRecords([...records, data]);
          };

          //sets the records to localStorage
          useEffect(() => {
            localStorage.setItem('records', JSON.stringify(records));
          }, [records]);

          useEffect(() => {
            const storedRecords = JSON.parse(localStorage.getItem('records'));
            if (storedRecords) {
              setRecords(storedRecords);
            }
          }, []);

  return (
     <Layout>
      <Userform addRecord={addRecord}/>
      <Usertable records={currentRecords} editRecord={editRecord} deleteRecord={deleteRecord} />
     </Layout>
   
  )
}

export default Home