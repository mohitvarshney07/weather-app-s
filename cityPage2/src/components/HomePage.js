import React from 'react'
import { useState } from 'react';
// import Footer from './Footer';
import Searchbar from './Searchbar';
import CityCard from './CityCard';

const HomePage = (prop) => {
  const {setPageItems} = prop
  const [search, setSearch] = useState("");

  const cityNames = [
    "Agra",
    "Mathura",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chandigarh",
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Chennai",
    "Patna",
    "Jaipur",
    "Varanasi",
    "Gujarat",
  ];

  let cityList = cityNames.map((city, index) => {
    return <CityCard setPageItems={setPageItems} data={city} key={index} />;
  });

  return (
    <div>
      <Searchbar setSearch={setSearch} />
        <div className="cityList">
          {search == "" ? (
            cityList
          ) : (
            <CityCard setPageItems={setPageItems} data={search} className="searched" />
          )}
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default HomePage
