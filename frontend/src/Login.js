import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import LoginValidation from './LoginValidation'
import axios from 'axios'
import image1 from './img/image1.jpg'
import admin from './img/admin.jpg'
import { Radio } from 'antd';
import './login.css'

//import { Drawer} from 'antd';

function Login() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Nurse");
  

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const[values,setValues] = useState({
    NIC:'',
    password:''
  })

  
  const navigate = useNavigate();
  const[errors,setErrors] = useState({})

  const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
    if( errors.NIC === "" && errors.password === ""){
      axios.post('http://localhost:8081/login',values)
      .then(res => {
        if(res.data === "Success"){
          navigate('/Home')
        }
        else{
          alert("Invalid Credentials")
        } 
      })
      .catch(err => console.log(err));
    }
  }
  


  return (
    <div className="mainLoginPage">
      <div className="leftside">
          <img src={image1} alt="banner" />
        </div>
        <div className="rightside">
          <h1>LOGIN</h1>
          <div>
            <Radio.Group value={placement} onChange={placementChange} className={"radiogroup"}>
            <Radio.Button value="Mother" className={"radiobutton"}>Mother</Radio.Button>
            <Radio.Button value="Nurse" className={"radiobutton"}>Nurse</Radio.Button>
            <Radio.Button value="Doctor" className={"radiobutton"}>Doctor</Radio.Button>
            <Radio.Button value="Admin" className={"radiobutton"}>Admin</Radio.Button>


            </Radio.Group>
              
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>{placement} NIC/ID </h3>
              <input type="text" placeholder="Enter NIC" name='NIC' onChange={handleInput} required />
              {errors.NIC && <span className='text-danger'> {errors.NIC}</span>}
              <h3>Password</h3>
              <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} required />
              {errors.password && <span className='text-danger'> {errors.password}</span>}
              <button type="submit">{Loading ? "Loading..." : "Login"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>
              <Link to = "/Signup" className="btn btn-default boder w-100 bg-light rounded-100 text-decoration-none">Register</Link>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Login