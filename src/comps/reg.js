// RegistrationForm.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegistrationForm = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };

    const handleSignUp = () => {
        // Fetch user input data
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Registration successful!');
    };

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextField id='username' label='Username' placeholder='Enter Your Username' fullWidth required /><br /><br />
                    <TextField id='email' label='Email' placeholder='Enter Your Email' type='email' fullWidth required /><br /><br />
                    <TextField id='password' label='Password' placeholder='Enter password' type='password' fullWidth required /><br /><br />
                    <TextField id='confirmPassword' label='Confirm Password' placeholder='Confirm password' type='password' fullWidth required /><br /><br />
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        style={btnstyle}
                        fullWidth
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                    <Link to='/'>
                        Back to Home
                    </Link>
                </Paper>
            </Grid>
        </div>
    );
};

export default RegistrationForm;
