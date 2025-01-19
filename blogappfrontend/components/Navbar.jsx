import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "blue" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BlogApp
            </Typography>

            <Link to={"/blogs"}>
              <Button style={{ color: "white" }}>HOME</Button>{" "}
            </Link>
            <Link to={"/addblogs"}>
              <Button style={{ color: "white" }}>ADDBLOG</Button>
            </Link>
            <Link to={"/"}>
              <Button style={{ color: "white" }} onClick ={()=>{
                sessionStorage.removeItem('logintoken');
              }}>LOGOUT</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar
