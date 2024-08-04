
const Profilecard = ({records}) => {
  return (

      <div className="p-4">
      <ul className="space-y-4">
        {records?.map((record, index) => (
          <li key={index} className="p-4  rounded shadow-2xl">
            <div className="flex items-center mb-2">
              <img
              src={record.profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{record.name}</h2>
                <p className="text-gray-600">Email: {record.email}</p>
                <p className="text-gray-600">Phone: {record.phone}</p>
                <p className="text-gray-600">DOB: {record.date}</p>
                <p className="text-gray-600">Address: {`${record.city}, ${record.district}, ${record.province}, ${record.country}`}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profilecard