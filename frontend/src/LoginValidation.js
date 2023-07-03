function LoginValidation (values) {

  let errors = {};
  const NIC_pattern = /^[0-9]{9}[vVxX]$/;
  const NIC_pattern2 = /^[0-9]{12}$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

  if(values.NIC === ""){
    errors.NIC = "NIC is required"
}
else if(!(NIC_pattern.test(values.NIC) || NIC_pattern2.test(values.NIC))){
    errors.NIC = "NIC is invalid"
}else{
    errors.NIC = ""
}
  

  if (!values.password) {
    errors.password = "Password is required";
  }
  else if (!password_pattern.test(values.password)) {
    errors.password = "Password is invalid";
  }else{
    errors.password = ""
  }

    return errors;

}


export default LoginValidation