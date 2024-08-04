import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import Userform from '../components/form/Userform'
import Usertable from '../components/table/Usertable';
import Pagination from '../components/pagination/Pagination';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import App from '../App';

const Home = () => {
    
      const [records, setRecords] = useState([]); //this is a array to store records from form
      console.log(records)
      const [editIndex, setEditIndex] = useState(null);
      const [recordToEdit, setRecordToEdit] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const recordsPerPage = 5;
      //passed data from Userform.jsx 

      const addRecord = (data) => {
            setRecords([...records, data]);
          };

            const editRecord = (index, updatedRecord) => {
    const updatedRecords = [...records];
    updatedRecords[index] = updatedRecord;
    setRecords(updatedRecords);
    setEditIndex(null);
    setRecordToEdit(null);
  };

  const handleEditClick = (index) => {
      setEditIndex(index);
      setRecordToEdit(records[index]);
    };
        
          const deleteRecord = (index) => {
            setRecords(records.filter((_, i) => i !== index));
          };


          const currentRecords = records.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
          const totalPages = Math.ceil(records.length / recordsPerPage);
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
    
      <Userform addRecord={addRecord} editRecord={editRecord} editIndex={editIndex} recordToEdit={recordToEdit}/>
      <Usertable records={currentRecords}  editRecord={handleEditClick} deleteRecord={deleteRecord} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
     </Layout>
   
  )
}

export default Home