function SignupValidation (values) {

    let errors = {};
    const NIC_pattern = /^[0-9]{9}[vVxX]$/;
    const NIC_pattern2 = /^[0-9]{12}$/;
    const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const phone_pattern = /^[0-9]{10}$/

    if(values.fname === ""){
      errors.fname = "First Name is required"
  }
  else{
      errors.fname = ""
  }

  if(values.lname === ""){
      errors.lname = "Last Name is required"
  }else{
      errors.lname = ""
  }

  if(values.NIC === ""){
      errors.NIC = "NIC is required"
  }
  else if(!(NIC_pattern.test(values.NIC) || NIC_pattern2.test(values.NIC))){
      errors.NIC = "NIC is invalid"
  }else{
      errors.NIC = ""
  }

    
    if (!values.email) {
      errors.email = "Email address is required";
    }
    else if (!email_pattern.test(values.email)) {
      errors.email = "Email address is invalid";
    }else{
      errors.email = ""
    }
    
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    }
    else if (!phone_pattern.test(values.mobile)) {
      errors.mobile = "Mobile number is invalid";
    }else{
      errors.mobile = ""
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    }
    /*else if (!password_pattern.test(values.password)) {
      errors.password = "Password is invalid";
    }*/else{
      errors.password = ""
    }

   
    

   
  
      return errors;
  
  }
  
  export default SignupValidation