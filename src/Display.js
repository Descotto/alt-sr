import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



function Display(props) {
  const [redirect, setRedirect] = useState(false);


  const targetId = props.data;

  function showTable() {
    axios.get(`${REACT_APP_SERVER_URL}order/${targetId}`)
      .then((response) => {

        props.setOrder(response.data);
        setRedirect(true);
      }).catch((error) => {
        console.log("ERROR", error);
      });

  }
  setTimeout(showTable, 2000);
  if (redirect) return <Navigate to="/displayorder" />

  return (
    <div className='App'>
      <p>Request sent</p>
      <p>Request ID saved to the clipboard</p>

      <div id="show"></div>
      <button className='btn btn-secondary' onClick={showTable}>Show Order</button>
    </div>
  )
}



export default Display;