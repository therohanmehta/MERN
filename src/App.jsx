import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [data, setData] = useState([]);
  async function handleForm(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fetchedData = await response.json();
    console.log(fetchedData);
  }

  useEffect(()=>{

    fetch("http://localhost:8080/demo")
  .then((res)=>res.json())
  .then((newData)=>setFetchData([...newData]))
})
 

  return (
    <>
      <form action="submit" onSubmit={handleForm}>
        <h1>{JSON.stringify(data)}</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setData({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      {fetchData.map((ele, ind) => {
  return <li key={ind}>{ele.username}</li>;
})}



    </>
  );
}

export default App;
