import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import image from "./img/drop.png";
import Aux from "../../hoc/_Aux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import firebase from "firebase/app";
class BootstrapTable extends React.Component {
    state={
    }
    
        
    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   
        const { project, statt} = this.props;
       
        let result=0;
        let group="";

   const     handlein=(e)=>{
            this.setState({ [e.target.id]:e.target.value});
          }
     const     submitt=(e)=>{
            e.preventDefault();
            console.log("addd");
            group=`${this.state.bloodgroup}`;
            result=parseInt(this.state.quantity)+(this.state.bg[group]);
            firebase.firestore().collection('stocks').doc(this.state.id).update({[group]:result}).then(()=>{
                return(alert(`Updated Successfully`)
                  
                )});
    
          }
       const   submitt1=(e)=>{
        e.preventDefault();
            
        console.log("remove");
        group=`${this.state.bloodgroup}`;
        result=(this.state.bg[group])-parseInt(this.state.quantity);
        if (`${result}`<0){
            result=0;
        }
        firebase.firestore().collection('stocks').doc(this.state.id).update({[group]:result}).then(()=>{
            return(alert(`Updated Successfully`)
            )    })

      }
          
   if (project){

    return (
 
        <Aux>
        {       project && project.map(avin=>{
            if (`${avin.hospitalf}`=== `${statt}` ){
                this.state.id=`${avin.id}`;
                this.state.bg=avin;
                this.state.res=avin.WBCABp+avin.WBCAp+avin.Plasma;
          return (<><div key={avin.id}>

            <h3   style={{color:"#1dc4e9"}}>RBC</h3>

<Row>
        <Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>A+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCAp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>A-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCAn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>B+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCBp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>B-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCBN}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card   style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"7px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>O+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCOp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>O-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCOn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card   style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"7px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>AB+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCABp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>AB-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCABn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>Other</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.RBCOther}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
    </Row>















    <h3  style={{color:"#1dc4e9"}}>WBC</h3>
    <Row>
        <Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>A+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCAp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>A-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCAn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>B+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCBp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>B-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCBn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>O+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCOp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>O-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCOn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>AB+</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCABp}</h4></Col>
</Row><br/>
                <Row>
<Col><h4 style={{color:"red"}}>AB-</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCABn}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>Other</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.WBCOther}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
    </Row>










<h3  style={{color:"#1dc4e9"}}>Other</h3>
    <Row>
        <Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>Platelets</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.Platelet}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>Cryo</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.Cryo}</h4></Col>
</Row>
</Card.Body>
</Card>
</Col>
<Col>
<Card  style={{border:"2px solid  #1dc4e9",alignItems:"center",width:"250px",margin:"auto",marginBottom:"10px",background:"#f4f7fa"}}>
<Card.Body>
<Row>
<Col><h4 style={{color:"red"}}>Plasma</h4></Col>
<Col><i style={{width:"15px",height:"25px"}} className="feather icon-droplet text-c-red f-30"/></Col>
<Col><h4>{avin.Plasma}</h4></Col>
</Row>

</Card.Body>
</Card>
</Col>

    </Row>
    <div className="auth-wrapper">
                    <div className="auth-content">
    <div className="card" style={{width:"300px"}}>
                            <div className="card-body text-center">
    <form onSubmit={this.submitt}>
    <Row>
<h2 style={{color:"#1dc4e9",textAlign:"center"}} className="m-3">Stock Updation</h2></Row>
<Row>

                     <select defaultValue="Blood Group" onChange={handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="bloodgroup" id="bloodgroup">
                     <option disabled>Blood Group</option>
                                    <option value="RBCAp">RBC A+</option>
                                    <option value="RBCAn">RBC A-</option>
                                    <option value="RBCBp">RBC B+</option>
                                    <option value="RBCBN">RBC B-</option>
                                    <option value="RBCABp">RBC AB+</option>
                                    <option value="RBCABn">RBC AB-</option>
                                    <option value="RBCOp">RBC O+</option>
                                    <option value="RBCOn">RBC O-</option>
                                    <option value="RBCOther">RBC other</option>
                                    <option value="WBCAp">WBC A+</option>
                                    <option value="WBCAn">WBC A-</option>
                                    <option value="WBCBp">WBC B+</option>
                                    <option value="WBCBn">WBC B-</option>
                                    <option value="WBCABp">WBC AB+</option>
                                    <option value="WBCABn">WBC AB-</option>
                                    <option value="WBCOp">WBC O+</option>
                                    <option value="WBCOn">WBC O-</option>
                                    <option value="WBCOther">WBC other</option>
                                    <option value="Platelets">Platelets</option>
                                    <option value="Cryo">Cryo</option>
                                    <option value="Plasma">Plasma</option>
                                   
                    </select>
</Row>
<br/>
<Row>

               <div className="input-group mb-4">
                        <input type="number" onChange={handlein} id="quantity" autoComplete="off" className="form-control" placeholder="Quantity"/>
                    </div>
</Row><Row>
<Col>

               <button onClick={submitt}  className="btn btn-outline-primary">Add</button>
               <button onClick={submitt1} className="btn btn-outline-danger">Remove</button></Col>


</Row>
    </form></div></div></div></div>


</div>



          </>)}
        else{
            return null;
        }
        })}
     
        </Aux>
    );




   }
   else {
       return null;
  }
   }    
            }


const mapStateToProps=(state)=>{
    let data=state.firestore.ordered.stocks;
    let place=state.firebase.profile.hospital;
    let auth= state.firebase.auth;
     const project = data ? data : null;
     return {
       project: project,
       auth:auth,
       statt:place
     }
      
 }

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'stocks'}]))(BootstrapTable);