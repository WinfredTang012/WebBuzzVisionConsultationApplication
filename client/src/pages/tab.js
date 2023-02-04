import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Register from './register' ;
import Login from './login' ;


const tab=()=>{

const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  
  const paperStyle={backgroundColor:' #C6EFF9', width:340,margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="info"
          textColor="primary"
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "blue"
            }
          }}
          aria-label="disabled tabs example"
        >
          <Tab label="Login" />
         
          <Tab label="Register" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Register/>
      </TabPanel>
      </Paper>
      
    )
}

export default tab;
