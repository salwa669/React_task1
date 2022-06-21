import React from "react";
import {Link} from 'react-router-dom'
import ProgressBar from "../../component/progressbar/progressbar";
import Portfoli from "../../component/portfoli/portfoli"
const Home=()=>{
const percentage=60;
    return(
        <div className="container ">
            <div className="row homediv">
              <div className="col col-lg-12 coverdiv">
                <h1>Salwa Gamal</h1>
                <p>Web Developer & Designer</p><br></br>
                <button className="btn border text-white" > <Link  className="text-light link" to="/Register" >Contact me</Link></button>
              </div>
            </div><br></br>
            <div className="row shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col col-lg-6 fs-1 aboutdiv"> <p className="pabout">About me</p></div>
                <div className="col col-lg-6 fs-5 aboutdiv2"><p>Iam a web desginer and I desgined serveral websites using<br></br> html ,css,javascript ,bootstrap and React js</p>
                <button type="button" class="btn btn-dark btn-lg"><i class="fab fa-google-play"></i> Download Resume</button>
                </div>
            </div>
            <div className="container shadow-lg p-3 mb-5 rounded skillcontainer">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h2 className="skills">Skills</h2>
                </div>
          
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <p>Iam a Web Developer Iam a Web Developer Iam a Web Developer Iam a Web Developer<br></br>&nbsp;&nbsp;Iam a Web Developer Iam a Web Developer Iam a Web Developer <br></br>&nbsp;&nbsp;&nbsp; Iam a Web Developer Iam a Web Developer</p>
                </div>
            </div><br></br><br></br>
            <div className="row">
                <div className="col col-lg-5 d-flex justify-content-center">
                <ul class="list-group list-group-flush skillslist">
                  <h5 class="list-group-item skillsli">My Skills</h5>
                  <li class="list-group-item">UI/UX Design</li>
                  <li class="list-group-item">Responsive Desgin</li>
                  <li class="list-group-item">Web Desgin</li>
                  <li class="list-group-item">Mobile App Desgin</li>
               </ul>
                </div>
                <div className="col col-lg-7 d-flex justify-content-center">
                <div>
           <ProgressBar bg={"#6a1b9a"} completed={60}  text={"HTML"}/>
       <ProgressBar bg={"#00695c"} completed={80} text={"CSS"} />
       <ProgressBar bg={"#00695c"} completed={50}  text={"Javascript"}/>
       <ProgressBar bg={"#ef6c00"} completed={90}  text={"Bootstrap"}/>
       <ProgressBar bg={"#00695c"} completed={55} text={"React js"} />
 
    </div>
                </div>
            </div>
            </div>
         <div className="container  shadow-lg p-3 mb-5 rounded">
            <h2>Portfolio</h2><br></br>
            <div className="container">
                <div className="row">
                 <Portfoli bgcolor={"#37393d"} text={"Web Desgin"}/>
                 <Portfoli bgcolor={"#696969"} text={"Mobile Desgin"}/>
                 <Portfoli bgcolor={"#37393d"} text={"Logo Desgin"}/>
                </div>
                </div><br></br>
                <div className="container">
                <div className="row">
              <Portfoli bgcolor={"#696969"} text={"Web Application Development"}/>
                <Portfoli bgcolor={"#37393d"} text={"Mobile Application Development"}/>
                <Portfoli bgcolor={"#696969"} text={"Pw Development"}/>
                </div>
            </div>
            </div><br></br><br></br>

            <div className="container footer">
               <div className="row foot">
                <div className="col col-lg-3">
                   <h6>
                    Get in Touch
                   </h6>
                   <i class="fa fa-phone" aria-hidden="true"> 758-254-123</i><br></br>
                   <i class="fa fa-phone" aria-hidden="true"> 958-554-723</i><br></br>
                 
                </div>
                <div className="col col-lg-2">
                    
                </div>
                <div className="col col-lg-2">
                    <button className="btn btn-lg btn-outline-light text-white">
                        Contact me
                    </button>
                </div>
                <div className="col col-lg-1">
                    
                </div>
                <div className="col col-lg-3">
                    <div className="d-flex justify-content-between">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div><br></br>
                <p>@copyright ID 215452488</p>
                
                    
                </div>

               </div>
            </div>
        </div>
    )
}

export default Home;