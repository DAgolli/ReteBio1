import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField, Paper, InputAdornment, IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import useStyles from '../styles/styles_login_register';
import Logo from "../images/logo.png";
//import ReactPlayer from 'react-player';

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";



const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    // ikona e show password
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
    // const [typePass, setTypePass] = useState(false)
    const classes = useStyles();
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div>
            <video src='/videos/video-5.mp4' className={classes.video} autoPlay loop muted />
            
            <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Grid className={classes.grid} container justify="center">
                <Grid item xs={12} sm={6}>
                  {/* <img className={classes.imgLoad} src={Load} alt="Load" /> */}
                
                <Paper elevation={10} className={classes.paper}>
                <img className={classes.imgLogin} src={Logo} alt="Logo" />  
                <div>
                   <TextField
                   className={classes.textField} 
                   label="Email" 
                   variant="outlined"
                   type="email" 
                   fullWidth 
                   value={userData.email} 
                   onChange={(e) => setUserData({ ...userData, email: e.target.value })}

                   />

                </div>

                <div>
                    <TextField 
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value={userData.password}
                    onChange={(e) => setUserData({...userData, password: e.target.value })}
                    InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                    )
                }}
                    />
                </div>


                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>

                <p className="my-2">
                    You dont have an account? <Link to="/register" style={{color: "crimson"}} >Register Now</Link>
                </p>
                </Paper>
                </Grid>
                </Grid>

            </form>
        </div>
    )
}

export default Login
