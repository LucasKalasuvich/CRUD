import React from 'react'
import classes from './style.module.scss'
import TextField  from '@mui/material/TextField'
import Box from '@mui/material/Box'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Content = () => {

    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3030/password')
            setData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        
        fetchData()
    }, [])

  return (
    <>
    <div className={classes.wrapper}>
        <div className={classes.addUser}>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate autoComplete="off">
                <div>
                    <TextField
                    
                    id=""
                    label="Provider"
                    defaultValue=""
                    />
                    <TextField
                    id="outlined-error-helper-text"
                    label="Email"
                    defaultValue=""
                    helperText=""
                    />
                </div>
                <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Password"
                    defaultValue=""
                    helperText=""
                    />
                    <TextField
                    id="outlined-error-helper-text"
                    label="Category"
                    defaultValue=""
                    helperText=""
                    />
                </div>  
            </Box>
        </div>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Provider</th>
              <th>Email</th>
              <th>Password</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.provider}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  )
}

export default Content
