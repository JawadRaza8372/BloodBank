import React from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";

class MultiBarChart2 extends React.Component {
    count={
        abp:0,bp:0,bn:0,abn:0,ap:0,an:0,on:0,op:0,other:0
    };
    constructor(props){
        super(props);
   this.state={ chartdat:{
    labels: ["AB+","AB-","A+","A-","B+","B-","O+","O-","Other"],
    datasets:[
       { label:"Number OF Requests",
       data:[this.count.abp,this.count.abn,this.count.ap,this.count.an,this.count.bp,this.count.bn,this.count.op,this.count.on,this.count.other],
    backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        "black",
        "grey"
      ]
    }
    ]


}
    
}}
    render()
 { 

    const {req}=this.props;
   req && req.map((avin)=>{
        if (avin.bloodgroup=== "AB+"){
        this.count.abp=this.count.abp+1;
        }
        else if(avin.bloodgroup=== "AB-"){
            this.count.abp=this.count.abp+1;        
        }
        else if(avin.bloodgroup=== "A+"){
this.count.ap=this.count.ap+1;        
        }
        else if(avin.bloodgroup=== "B+"){
            this.count.bp=this.count.bp+1;
        
        }
        else if(avin.bloodgroup=== "B-"){
this.count.bn=this.count.bn+1;        
        }
        else if(avin.bloodgroup=== "A+"){
this.count.ap=this.count.ap+1;        
        }
        else if(avin.bloodgroup=== "O+"){
this.count.op=this.count.op+1;        
        }
        else if(avin.bloodgroup=== "0-"){
this.count.on=this.count.on+1;        
        }
        else if(avin.bloodgroup=== "A-"){
            this.count.an=this.count.an+1;        
                    }
        else if(avin.bloodgroup=== "Other"){
            this.count.other=this.count.other+1;                    }
        else {
return null;

        }
        
                }
               
                )               
                 this.state.chartdat.datasets[0].data=[this.count.abp,this.count.abn,this.count.ap,this.count.an,this.count.bp,this.count.bn,this.count.op,this.count.on,this.count.other];
        return<div className="chart"> <Bar data={this.state.chartdat} width={100} height={30} options={{}}/></div>
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