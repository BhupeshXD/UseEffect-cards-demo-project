import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl); // use to fetch api
        const output = await response.json(); //converting data into json foramt
        // save data into a variable.
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} />)
        }
      </div>
    </div>
  );
};

export default App;
