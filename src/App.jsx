import { useEffect, useState } from "react";

import "./App.css";
// import { response } from "express";

function App() {
  const [form, setForm] = useState({});
  const [fetchedData, setFetchedData] = useState([]);
  async function handleForm(e) {
    e.preventDefault();
    // await fetch('http://localhost:8080/form')
    // .then((res)=>res.text())
    // .then((result)=>console.log(result))

   const response= await fetch("http://localhost:8080/form", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

  }

const showData=()=>{
fetch('http://localhost:8080/form')
.then((res)=>res.json())
.then((data)=>setFetchedData(data))

}
showData()

  return (
    <>
      {JSON.stringify(fetchedData, null, 2)}

      <form onSubmit={handleForm}>
        Name{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />{" "}
        <hr />
        Age{" "}
        <input
          type="number"
          name="age"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />{" "}
        <hr />
        Password{" "}
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />{" "}
        <hr />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
