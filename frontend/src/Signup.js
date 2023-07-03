import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import SignupValidation from './SignupValidation'
import axios from 'axios'
// import image1 from './img/image1.jpg'
import './Signup.css'


function Signup() {
    const[values,setValues] = useState({
      fname: '',
      lname: '',
      NIC: '',
      DOB: '',
      email: '',
      mobile: '',
      address: '',
      occupation: '',
      ageatmarriage: '',
      pregnancies: '',
      husbandname: '',
      husbandoccupation: '',
      husbandmobileno: '',
      password: '',
      cpassword: '',
    })

    // const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);
    const[errors,setErrors] = useState({})

    const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(SignupValidation(values));
      if (
        Object.values(errors).every((error) => error === "") 
       
      ) {
        setLoading(true);
    
        axios
          .post('http://localhost:8081/signup', values)
          .then((res) => {
            console.log(res);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    };
  

  // const [file,setFile] = useState();

  // const handleFile = (e) => {
  //   setFile(e.target.files[0]);
  // } 

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append('image',file);
  //   axios.post('http://localhost:8081/upload',formData)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err));
  // }

  // const handleSubmitAndUpload = (event) => {
  //   handleSubmit(event);
  //   handleUpload();
  // };

  return (
    <div className="mainLoginPage">
     
     
      <div className="container">
        
        <div className="table">
          <form onSubmit={handleSubmit}>
          <h2>REGISTER</h2><br></br>
          <h6>Mother's Details</h6>
          <hr className='hr'/>
          <div className="form-row">
            <div className="form-column">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" placeholder="Enter First Name" id="fname" name="fname" onChange={handleInput}/>
                {errors.fname && <span className='text-danger'>{errors.fname}</span>}
            </div>
            <div className="form-column">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" placeholder="Enter Last Name" id="lname" name="lname" onChange={handleInput}/>
                {errors.lname && <span className='text-danger'>{errors.lname}</span>}
            </div>
            <div className="form-column">
                <label htmlFor="NIC" className="form-label">NIC</label>
                <input type="text" placeholder="Enter NIC" id="NIC" name="NIC" onChange={handleInput}/>
                {errors.NIC && <span className='text-danger'>{errors.NIC}</span>}
            </div>
            <div className="form-column">
                <label htmlFor="DOB" className="form-label">Date of Birth</label>
                <input type="date"  placeholder="Enter Date of Birth" id="DOB" name="DOB" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" placeholder="Enter Email" id="email" name="email" onChange={handleInput}/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            </div>
            <div className="form-row">
            <div className="form-column">
                <label htmlFor="mobile" className="form-label">Mobile No</label>
                <input type="text" placeholder="Enter Mobile No" id="mobile" name="mobile" onChange={handleInput}/>
                {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
            </div>
            <div className="form-column">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" placeholder="Enter Address" id="address" name="address" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="occupation" className="form-label">Occupation</label>
                <input type="text" placeholder="Enter Occupation" id="occupation" name="occupation" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="ageatmarriage" className="form-label">Age at Marriage</label>
                <input type="text" placeholder="Enter Age at Marriage" id="ageatmarriage" name="ageatmarriage" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="pregnancies" className="form-label">Pregnancies</label>
                <input type="text" placeholder="Enter pregnancies" id="pregnancies" name="pregnancies" onChange={handleInput}/>
            </div>
            </div><br/>
            <h6>Husband's Details</h6>
            <hr className='hr'/>
            <div className="form-row">
            <div className="form-column">
                <label htmlFor="husbandname" className="form-label">Husband Name</label>
                <input type="text" placeholder="Enter Husband Name" id="husbandname" name="husbandname" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="husbandoccupation" className="form-label">Husband Occupation</label>
                <input type="text" placeholder="Enter Husband Occupation" id="husbandoccupation" name="husbandoccupation" onChange={handleInput}/>
            </div>
            <div className="form-column">
                <label htmlFor="husbandmobileno" className="form-label">Husband mobile No</label>
                <input type="text" placeholder="Enter Husband mobile No" id="husbandmobileno" name="husbandmobileno" onChange={handleInput}/>
            </div>
            </div>
            <br/>
            <hr className='hr'/>
            <div className="form-row">
            <div className="form-column">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" placeholder="Enter Password" id="password" name="password" onChange={handleInput}/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <div className="form-column">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" placeholder="Enter Confirm Password" id="cpassword" name="cpassword" onChange={handleInput}/>
                {errors.cpassword && <span className='text-danger'>{errors.cpassword}</span>}
            </div>
            </div>
            <br/>
          <center>
          <button type="submit">{Loading ? "Loading..." : "Register"}</button><br/><br/>
          <Link to="/" >Do you already have an account? Login here.</Link>
          </center>
          </form>
        </div>

      </div>
    


    </div>
  )
}

export default Signup
