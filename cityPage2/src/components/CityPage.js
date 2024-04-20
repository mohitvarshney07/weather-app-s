import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CityPage = (prop) => {
  const { pageItems, setPageItems } = prop;

  useEffect(() => {
    setPageItems(JSON.parse(localStorage.getItem("data")));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cityPage">
        <h1>{pageItems.city_name}</h1>
        <div>
          <p style={{ backgroundColor: "red" }}>
            Temperature {pageItems.temperature}
          </p>
          <p style={{ backgroundColor: "blue" }}>
            Temperature Feels Like{pageItems.temp_feels_like}
          </p>
          <p style={{ backgroundColor: "green" }}>
            Maximum Temperature{pageItems.temp_max}
          </p>
          <p style={{ backgroundColor: "yellow" }}>
            Minimum Temperature{pageItems.temp_min}
          </p>
        </div>
        <div>
          <p style={{ backgroundColor: "pink" , marginRight: "5px", padding:'5px'}}>
            Humidity
            <br />
            {pageItems.humidity}
          </p>
          <p style={{ backgroundColor: "orange" , padding:'5px'}}>
            Pressure
            <br />
            {pageItems.pressure}
          </p>
        </div>
      </div>
      <Link to={'/'}>
        <button className="back">Back to Home Page</button>
      </Link>
    </>
  );
};

export default CityPage;
