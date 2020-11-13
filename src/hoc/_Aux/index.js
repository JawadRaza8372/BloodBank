import DEMO from "../../store/constant";
import React from "react";
const Aux = (props) => props.children;
const User=(props)=>{  
    return(     <div className="header-logo">
<b className="b-brand">
   <div className="b-bg">
       <i className="feather icon-user" />
   </div>
   <span style={{textTransform:"capitalize",fontSize:"16px"}} className="b-title">{props.pff.name}</span>
</b>
            </div>)}
export default Aux;
export {User};