import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userform = ({addRecord,editRecord,editIndex,recordToEdit}) => {

      const [countries,setCountries]= useState([])
      const [data,setData]=useState({
            name:'',
            email:'',
            phone:'',
            date:'',
            city:'',
            district:'',
            province:'',
            country:'Nepal',
            profilePic:null,
      })

      const handleChange=(e)=>{
            const name=e.target.name
            const value=e.target.value

            setData({
                  ...data,
                  [name]:value,
            })
            console.log(data)
      }
      const handleImageChange=(e)=>{
            const name=e.target.name
            const value=e.target.value

            setData({
                  ...data,
                 profilePic:e.target.files[0]
            })
      }

      const handleSubmit=(e)=>{
            e.preventDefault()
            console.log(data)
            addRecord(data)
            setData({
                  name:'',
                  email:'',
                  phone:'',
                  date:'',
                  city:'',
                  district:'',
                  province:'',
                  country:'Nepal',
                  profilePic:null,
            })
            
      }
    
      useEffect(() => {
            const fetchCountries = async () => {
              try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
            //     console.log(response)
                const countryNames = response.data.map((country) => country.name.common);
                setCountries(countryNames);
                console.log(countryNames); // Log the fetched country names
              } catch (error) {
                console.error('Error fetching countries:', error); // Log any error that occurs
              }
            };
        
            fetchCountries();
          }, []);
  return (
       <div class="flex justify-center  w-screen h-100%">
      <div class="container my-3 px-4 lg:px-20 ">
        <div class="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">
          <div class="flex">
            <h1 class="font-bold uppercase text-4xl">
             ADD <br /> Details
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
          <br/>
          <div class="flex justify-start">
            <h3 class=" text-gray-900 font-light  text-md">
             Personal Information
            </h3>
          </div>
            <div class="grid grid-cols-1 gap-5 mt-1 md:grid-cols-2 ">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name*"
                name="name"
             required
             onChange={handleChange}
             value={data.name}
            
              />
               <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Emai*"
                name="email"
                required
                onChange={handleChange}
                value={data.email}
              />
               <input
               autoComplete="off"
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number* "
                name="phone"
                required
                pattern="\d{7}" 
                onChange={handleChange}
             value={data.phone}
                
             
            
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                onChange={handleChange}
                value={data.date}
            
              />

              <div class="flex justify-start">
            <h3 class=" text-gray-900 font-light  text-md">
             Address
            </h3>
          </div>
          <br />
          <input
                class="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
          value={data.city}
             
            
              />   <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="District"
                name="district"
                onChange={handleChange}
                value={data.district}
            
              />
                <select name="province"  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required onChange={handleChange}
          value={data.province} >
                <option  value="">Select Your province</option>
                <option value="Province 1">Province 1</option>
                <option value="Province 2">Province 2</option>
                <option value="Province 3">Province 3</option>
                <option value="Province 4">Province 4</option>
                <option value="Province 5">Province 5</option>
                <option value="Province 6">Province 6</option>
                <option  value="Province 7">Province 7</option>
            </select>
            <select name="country"  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required      onChange={handleChange}
          value={data.country}>
                <option  value="Nepal">Nepal</option>
                {countries.map((country) => (
            <option value={country}>{country}</option>
          ))}
            </select>
            
            <div class="flex justify-start">
            <h3 class=" text-gray-900 font-light  text-md">
             Profile Picture
            </h3>
          </div>
          <br />
          <input
                class="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                placeholder="Image"
                name="profilePic"
                accept="image/png"
                onChange={handleImageChange}
              /> 
            </div>
           
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
               className="block py-2 px-3 bg-gradient-to-r from-blue-400 to-blue-600 
    hover:from-blue-600 hover:to-blue-800 
    text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full font-mono" aria-current="page"
              >
            Submit

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default Userform