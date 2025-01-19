import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Link, useNavigate}from 'react-router-dom';
import axios from 'axios'

const Login = () => {

  const [form, setForm] = useState({
    userEmail:'',
    userPassword:''
  });

const navigate = useNavigate();

  function capValue(){
    // console.log(form);
    // (give the backend port no: and backend url) redirection url - app.js/index.js)
    axios.post("http://localhost:3000/users/login",form).then((res) => {
      console.log(res)
      alert(res.data.message);
      // blogs is given in the route of app.jsx - frontend
      //if token is with the data then it is save to the frontend
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token)
        //if loken is generated it will navigate to blogs page 
           navigate("/blogs");

      }else{
        //otherwise prohibited (stay there it self)
        navigate('/');
      }
   
    }).catch((error)=>{
      alert('Invalid Login');
    })
  }



  return (
    <div style={{ margin: "10%", textAlign: "center" }}>
      <Typography variant="h3" style={{ color: "Brown" }}>
        BlogApp Login
      </Typography>
      <br />
      <br />
      <div>
        {/* for to capture data need to write onChange event   and any change in the field is setting to the 2nd var in useState*/}
        {/* spread operator used to concatenate new value  */}
        <TextField placeholder="Email" variant="outlined" name='userEmail' onChange={(e)=>{
          setForm({...form, userEmail:e.target.value})
        }}></TextField>
      </div>
      <br />

      <div>
        <TextField placeholder="Password" variant="outlined" name='userPassword' onChange={(e)=>{
          setForm({...form, userPassword:e.target.value})

        }}></TextField>
      </div>
      <br />
      <Button color="#f44336" variant="contained" onClick={capValue}>
        Login
      </Button>

      <Link to={'/signup'}>
      <br /> <br />
      {/* to - keyword and /signup is the path in app.jsx */}
      New user? Please Register here
      </Link>
    </div>
  );
}

export default Login
