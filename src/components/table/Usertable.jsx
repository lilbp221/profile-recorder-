import React from 'react';

const Usertable = ({ records, editRecord, deleteRecord }) => {
      console.log(records)
  return (
    <div className="flex justify-center w-full">
      <div className="container mx-auto px-4">
        <div className="w-full p-14 my-2 rounded-2xl shadow-2xl">
          <div className="flex mb-4">
            <h1 className="font-bold uppercase text-4xl">User List</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">DOB</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Profile Picture</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records?.map((record, index) => (
                  <tr key={index} className="border-t">
                    <td className="border px-4 py-2">{record.name}</td>
                    <td className="border px-4 py-2">{record.email}</td>
                    <td className="border px-4 py-2">{record.phone}</td>
                    <td className="border px-4 py-2">{record.date}</td>
                    <td className="border px-4 py-2">{`${record.city}, ${record.district}, Province ${record.province}, ${record.country}`}</td>
                    <td className="border px-4 py-2">
                      <img src={record.profilePic} alt="Profile" width="50" />
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={() => editRecord(index)}  className="block py-2  m-2 px-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full  "
                aria-current="page">Edit</button>
                      <button onClick={() => deleteRecord(index)}  className="block py-2 m-2 px-3 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full  "
                aria-current="page">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertable;
