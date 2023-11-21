// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    const handleSignIn = () => {
        // Fetch user input data
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Get user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem('user'));

        if (storedUserData && storedUserData.username === enteredUsername && storedUserData.password === enteredPassword) {
            alert('Authentication successful!');
            // Redirect or set authentication state here
        } else {
            alert('Authentication failed!');
        }
    };

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField id='username' label='Username' placeholder='Enter username' fullWidth required /><br /><br />
                    <TextField id='password' label='Password' placeholder='Enter password' type='password' fullWidth required /><br /><br />
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        style={btnstyle}
                        fullWidth
                        onClick={handleSignIn}
                    >
                    <Link to='/new'>
                        Sign in
                    </Link>
                    </Button>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;
