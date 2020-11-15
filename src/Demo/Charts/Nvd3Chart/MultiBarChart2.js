import React from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";

class MultiBarChart2 extends React.Component {
    count={
        a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0,a10:0,a11:0,a12:0,a13:0,a14:0,a15:0,a16:0,a17:0,a18:0,a19:0,a20:0,a21:0

    };
    s={
        z:0
    }
    constructor(props){
        super(props);
   this.state={ chartdat:{
    labels: ["RBC A+","RBC B+","RBC O+","RBC B-","RBC A-","RBC O-","RBC AB+","RBC AB-",
    "RBC Other","WBC A+","WBC B+","WBC O+","WBC B-","WBC A-","WBC O-","WBC AB+","WBC AB-",
    "WBC Other","Platelet","Cryo","Plasma"],
    datasets:[
       { label:"Number OF Requests",
       data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    backgroundColor:"grey"
      
    }
    ]


}
    
}}
    render(){ 

    const {req}=this.props;
   
    if (req){
        req.map((avin)=>{
            if (avin.bloodgroup=== "RBCAp"){
            this.count.a1=this.count.a1+1;
  
            }
            else if(avin.bloodgroup=== "RBCAn"){
                this.count.a5=this.count.a5+1;        
            }
            else if(avin.bloodgroup=== "RBCBN"){
                this.count.a4=this.count.a4+1;        
            }
            else if(avin.bloodgroup=== "RBCBp"){
                this.count.a2=this.count.a2+1;  
                console.log(this.count.a2)      
            }
            else if(avin.bloodgroup=== "RBCOn"){
                this.count.a6=this.count.a6+1;        
            }
            else if(avin.bloodgroup=== "RBCOp"){
                this.count.a3=this.count.a3+1;        
            }
            else if(avin.bloodgroup=== "RBCABn"){
                this.count.a8=this.count.a8+1;        
            }
            else if(avin.bloodgroup=== "RBCABp"){
                this.count.a7=this.count.a7+1;        
            }
            else if(avin.bloodgroup=== "RBCOther"){
                this.count.a9=this.count.a9+1;        
            }
            else if (avin.bloodgroup=== "WBCAp"){
                this.count.a10=this.count.a10+1;
                }
                else if(avin.bloodgroup=== "WBCAn"){
                    this.count.a14=this.count.a14+1;        
                }
                else if(avin.bloodgroup=== "WBCBn"){
                    this.count.a13=this.count.a13+1;        
                }
                else if(avin.bloodgroup=== "WBCBp"){
                    this.count.a11=this.count.a11+1;        
                }
                else if(avin.bloodgroup=== "WBCOn"){
                    this.count.a15=this.count.a15+1;        
                }
                else if(avin.bloodgroup=== "WBCOp"){
                    this.count.a12=this.count.a12+1;        
                }
                else if(avin.bloodgroup=== "WBCABn"){
                    this.count.a17=this.count.a17+1;        
                }
                else if(avin.bloodgroup=== "WBCABp"){
                    this.count.a16=this.count.a16+1;        
                }
                else if(avin.bloodgroup=== "WBCOther"){
                    this.count.a18=this.count.a18+1;        
                }
                else if(avin.bloodgroup=== "Platelet"){
                    this.count.a19=this.count.a19+1;        
                }
                else if(avin.bloodgroup=== "Cryo"){
                    this.count.a20=this.count.a20+1;        
                }
                else if(avin.bloodgroup=== "Plasma"){
                    this.count.a21=this.count.a21+1;        
                }
           
            else {
    return null;
    }
        
    } );
    this.s.z=this.count.a1+this.count.a2+this.count.a3+this.count.a4+this.count.a5+
        this.count.a6+this.count.a7+this.count.a8+this.count.a9+this.count.a10+this.count.a11
        +this.count.a12+this.count.a13+this.count.a14+this.count.a15+this.count.a16+this.count.a17+
        this.count.a18+this.count.a19+this.count.a20+this.count.a21;
     ;
        if (this.s.z<=req.length){
            this.state.chartdat.datasets[0].data=[this.count.a1,this.count.a2,this.count.a3,this.count.a4,this.count.a5,
                this.count.a6,this.count.a7,this.count.a8,this.count.a9,this.count.a10,this.count.a11
                ,this.count.a12,this.count.a13,this.count.a14,this.count.a15,this.count.a16,this.count.a17,
                this.count.a18,this.count.a19,this.count.a20,this.count.a21]
             ;
           
                     return<div className="chart"> <Bar data={this.state.chartdat} width={100} height={30} options={{}}/>                          
                     </div>  
    }
        else{
return <h4 style={{textAlign:"center"}}>Please Reload the page</h4>
        }
        
               
           
              
                   
    
                            }
    else {
        return null
    }
   
    }
}

const mapStateToProps=(state)=>{
    let data2=state.firestore.ordered.bloodreq;
    let auth= state.firebase.auth;
     const req=data2 ? data2:null;
     return {
         req:req,
       auth:auth
         }
      
 }
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'bloodreq'}]))(MultiBarChart2);