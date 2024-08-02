import React from 'react'

const Usertable = ({records,editRecord, deleteRecord}) => {
  return (
      <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Phone</th>
          <th className="py-2">DOB</th>
          <th className="py-2">Address</th>
          <th className="py-2">Profile Picture</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{record.name}</td>
            <td className="border px-4 py-2">{record.email}</td>
            <td className="border px-4 py-2">{record.phone}</td>
            <td className="border px-4 py-2">{record.date}</td>
            <td className="border px-4 py-2">{`${record.city}, ${record.district}, Province ${record.province}, ${record.country}`}</td>
            <td className="border px-4 py-2">
              <img src={URL.createObjectURL(record.profilePic)} alt="Profile" width="50" />
            </td>
            <td className="border px-4 py-2">
              <button onClick={() => editRecord(index)} className="bg-yellow-500 text-white py-1 px-2 rounded">Edit</button>
              <button onClick={() => deleteRecord(index)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
  

export default Usertable