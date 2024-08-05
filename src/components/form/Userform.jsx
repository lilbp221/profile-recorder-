import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Userform = ({ addRecord, editRecord, editIndex, recordToEdit }) => {
  const [countries, setCountries] = useState([]);
  
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    city: '',
    district: '',
    province: '',
    country: 'Nepal',
    profilePic: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
//     console.log(data);
  };

  const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setData({
            ...data,
            profilePic: reader.result, // Store base64 string
          });
        };
  
        reader.readAsDataURL(file); // Convert file to base64 string
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      editRecord(editIndex, data);
    } else {
      addRecord(data);
    }

    setData({
      name: '',
      email: '',
      phone: '',
      date: '',
      city: '',
      district: '',
      province: '',
      country: 'Nepal',
      profilePic: null,
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map((country) => country.name.common);
        setCountries(countryNames);
      //   console.log(countryNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (recordToEdit) {
      setData(recordToEdit);
    }
  }, [recordToEdit]);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="container w-full my-3 px-4 lg:px-20 max-w-full">
        <div className="w-full p-8 my-2 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-xl">
          <div className="flex mb-4">
              <br/>
            <h1 className="font-bold uppercase text-4xl"> {editIndex !== null ? 'Edit' : 'ADD'}<br/>Details</h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="flex justify-items-start mb-4 text-gray-900  text-lg">Personal Information</div>
        <pre class="text-red-400" >(Fields marked * are required) </pre> 
         
              
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name*"
                name="name"
                required
                onChange={handleChange}
                value={data.name}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                required
                onChange={handleChange}
                value={data.email}
              />
              <input
                autoComplete="off"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number*"
                name="phone"
                required
                pattern="\d{7,10}" 
                onChange={handleChange}
                value={data.phone}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                onChange={handleChange}
                value={data.date}
              />
              <div className="flex justify-start">
                <h3 className="text-gray-900 text-lg">Address</h3>
              </div>
              <br/>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={data.city}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="District"
                name="district"
                onChange={handleChange}
                value={data.district}
              />
              <select
                name="province"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
                onChange={handleChange}
                value={data.province}
              >
                <option value="Province 1">Province 1</option>
                <option value="Province 2">Province 2</option>
                <option value="Province 3">Province 3</option>
                <option value="Province 4">Province 4</option>
                <option value="Province 5">Province 5</option>
                <option value="Province 6">Province 6</option>
                <option value="Province 7">Province 7</option>
              </select>
              <select
                name="country"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
                onChange={handleChange}
                value={data.country}
              >
                <option value="Nepal">Nepal</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <div className="flex justify-start">
                <h3 className="text-gray-900  text-lg">Profile Picture</h3>
              </div>
              <br/>

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                placeholder="Image"
                name="profilePic"
                accept="image/png"
                onChange={handleImageChange}
              />
            </div>
            <div className="my-2 w-full lg:w-1/4">
              <button
                className="block py-2 px-3 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full  "
                aria-current="page"
              >
                {editIndex !== null ? 'Update & Save' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userform;

