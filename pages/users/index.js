
    // const axios = require('axios');

    //     axios.get('https://tptusers.vercel.app/api/v1/students?email=artur.kaasik@tptlive.ee').then(resp => {
    //         console.log(resp.data);
    //     });


import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [student, setStudent] = useState();

    let config = {
      headers: {'Access-Control-Allow-Origin' : '*'}
    }

    useEffect(() => {
      axios.get('https://tptusers.vercel.app/api/v1/students?email=artur.kaasik@tptlive.ee', {headers: {"Access-Control-Allow-Origin": "*"} }).then(resp => {
        setStudent(resp.data);
        setLoading(false);
      });
    }, []);
  
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
  
    return (
      <div className="App">
        <h3>{student.firstname} {student.lastname}</h3>
      </div>
    );
  }

export default App;


// import React from "react";
// import useSWR from "swr";

//   const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function App() {
//   const { data, error } = useSWR(
//     "https://tptusers.vercel.app/api/v1/students?email=artur.kaasik@tptlive.ee",
//     fetcher,
//   );

//   if (error) return "An error has occurred.";
//   if (!data) return "Loading...";
//   return (
//     <div>
//       <p>{data.firstname} {data.lastname}</p>
//     </div>
//   );
// }

