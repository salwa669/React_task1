import React from "react";


const Portfoli=(props)=>{
const{bgcolor,text}=props;

const backimg={
    backgroundColor:bgcolor,
    // border:"1px solid white",
    height: 200,
}
const textstyle={
    color:"white",
    padding:"15%"
}
    return(
       <>
        <div style={backimg} className="col col-lg-3 d-flex justify-content-center ">
            <h3 style={textstyle}>{text}</h3>
        </div>
        <div className="col col-lg-1"></div>
        </>

    )
}

export default Portfoli;