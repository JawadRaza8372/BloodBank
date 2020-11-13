import React from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";

class MultiBarChart extends React.Component {
    count={
a1:0,a2:0,a3:0,a4:0,a5:0,a6:0,a7:0,a8:0,a9:0,a10:0,a11:0,a12:0,a13:0,a14:0,a15:0,a16:0,a17:0,a18:0,a19:0,a20:0,
    };
    constructor(props){
        super(props);
   this.state={ chartdat:{
    labels: [
"RBC A+","RBC B+","RBC O+","RBC B-","RBC A-","RBC O-","RBC AB+","RBC AB-",
"RBC Other","WBC A+","WBC B+","WBC O+","WBC B-","WBC A-","WBC O-","WBC AB+","WBC AB-",
"WBC Other","Platelet","Cryo","Plasma"

    ],
    datasets:[
       { label:"Stock Of Bank",
       data:[this.count.a1,this.count.a2,this.count.a3,this.count.a4,this.count.a5,
        this.count.a6,this.count.a7,this.count.a8,this.count.a9,this.count.a10,this.count.a11
        ,this.count.a12,this.count.a13,this.count.a14,this.count.a15,this.count.a16,this.count.a17,
        this.count.a18,this.count.a19,this.count.a20],
    backgroundColor:`#007bff` 
    }
    ]


}
    
}}
    render(){ 

    const {donat,place}=this.props;
   donat && donat.map((avin)=>{
        if (avin.hospital=== place){
            this.state.chartdat.datasets[0].data=[
               avin.RBCAp,avin.RBCBp,avin.RBCOp,avin.RBCBn,avin.RBCAn,avin.RBCOn,avin.RBCABp,avin.RBCABn,avin.RBCOther,
               avin.WBCAp,avin.WBCBp,avin.WBCOp,avin.WBCBn,avin.WBCAn,avin.WBCOn,avin.WBCABp,avin.WBCABn,avin.WBCOther,
               avin.Platelet,avin.Cryo,avin.Plasma


            ];}})

    return (       
               <div className="chart"> <Bar data={this.state.chartdat} width={100} height={50} options={{}}/></div>     

    );
    
                
    }
}

const mapStateToProps=(state)=>{
    let data3=state.firestore.ordered.stocks;
    let place=state.firebase.profile.hospital;
    let auth= state.firebase.auth;
     const donat=data3?data3:null;
   
     return {
         donat:donat,
       auth:auth,
       place:place
         }
      
 }
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'stocks'}]))(MultiBarChart);