import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "Mona",
    email: "mona@gmail.com",
    username:"",
    password:"",
    confirmpassword:""

  });
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    usernameError:null,
    passwordError:null,
    confirmpasswordError:null
  });

  const handleChange = (evt) => {
    console.log(evt.target);

    if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
    } else if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
    }
    else if(evt.target.name=="password"){
        setUser({...user,password:evt.target.value})
    }
    else if(evt.target.name=="confirmpassword"){
        setUser({...user,confirmpassword:evt.target.value})
    }
    else if(evt.target.name=="username"){
        setUser({...user,username:evt.target.value})
    }

    if (evt.target.name == "name") {
      setErrors({
        ...errors,
        nameError:
          evt.target.value.length <= 0
            && "Name is required"
           
      });
    }
    else if(evt.target.name=="email"){
        setErrors({
            ...errors,
            emailError:
            evt.target.value.length <= 0
            ? "Email is Required"
            : !/\S+@\S+\.\S+/.test(evt.target.value)?"Email address is invaild":null
        })
    }
    else if (evt.target.name=="username"){
        setErrors({
            ...errors,
            usernameError:
            evt.target.value.length <=0
            ?"Username is Required"
            :evt.target.value.indexOf(' ') >=0 ?"Username can not contain White Spaces":null
        })
    }
  
    else if (evt.target.name=="password"){
        setErrors({
            ...errors,
            passwordError:
            evt.target.value.length <=0
            ?"Password is Required"
            :!strongRegex.test(evt.target.value)?"Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:":null
        })
    }

    else if (evt.target.name=="confirmpassword"){
        setErrors({
            ...errors,
            confirmpasswordError:
            evt.target.value.length <=0
            ?"Password is Required"
            :evt.target.value != user.password?"Password do not match":null
        })
    }
  
  };

  const handleSubmit=(e)=>{
  e.preventDefault();
    console.log("submit")
  }
  return (
    <>
    <div className="container contair">
        <h1 className="head">Create Your Account Now</h1><br></br>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="row">
        <div className="col col-lg-3"></div>
        <div className="col col-lg-5">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${(errors.nameError)?'border-danger':''}`}
          placeholder="Enter your name"
          value={user.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <small className="text-danger">{errors.nameError}</small>
      </div>
      <div className="col col-lg-4"></div>
        </div>
        <div className="row">
        <div className="col col-lg-3"></div>
        <div className="col col-lg-5">
     
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="Email"
          className="form-control"
          placeholder="Enter your email"
          value={user.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
         <small className="text-danger">{errors.emailError}</small>
      </div>
      <div className="col col-lg-4"></div>
      </div>

      <div className="row">
      <div className="col col-lg-3"></div>
      <div className="col col-lg-5">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          value={user.username}
          name="username"
          onChange={(e) => {
            handleChange(e);
          }}
        />
         <small className="text-danger">{errors.usernameError}</small>
      </div>
      <div className="col col-lg-4"></div>
      </div>

      <div className="row">
      <div className="col col-lg-3"></div>
      <div className="col col-lg-5">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={user.password}
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
         <small className="text-danger">{errors.passwordError}</small>
      </div>
      <div className="col col-lg-4"></div>
      </div>

      <div className="row">
      <div className="col col-lg-3"></div>
      <div className="col col-lg-5">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your Password"
          value={user.confirmpassword}
          name="confirmpassword"
          onChange={(e) => {
            handleChange(e);
          }}
        />
         <small className="text-danger">{errors.confirmpasswordError}</small>
      </div>
      <div className="col col-lg-4"></div>
      </div>

      <button type="submit" className="btn btn-outline-light butn">Register</button>
      </form>
      </div>
    </>
  );
}
