import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Aux from "../../hoc/_Aux";
import Td from "./Td";
import Tdd from "./Tdjunior";
import {createHistory} from "../../Firebase/actions/Projectactions";
class register extends React.Component {
    state={
        search:""
    }
    handlein=(e)=>{
      this.setState({ [e.target.id]:e.target.value});
    }
   

    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   
        const { project, statt,historyy} = this.props;
        const updat={
            hospital:statt,
            donorid:this.state.search
        }
const donation=(e)=>{
    e.preventDefault();
    console.log(updat);
    this.props.createHistory(updat);
    this.props.history.push("/dashboard");
}
        if (project && historyy) {
        return (
            <Aux>
          


                            
                            <form onSubmit={this.submitt}>
                            <Row className="mx-4">
                                        <Col md={8}>
                                        <div className="input-group mb-3">
                                    <input type="text" onChange={this.handlein} id="search" autoComplete="off" className="form-control" placeholder="Enter Donor ID"/>
                                </div> 
</Col></Row></form>

<br/><br/>
<Row><Col>
{project && project.map(avin=>{
    if (`${avin.id}`=== `${this.state.search}` ){
  return ( <Card key={avin.id}>
                            <Card.Header style={{border:"2px solid #1dc4e9 "}}><Card.Title >
                            <>
                            <Row>
                                <Col>
                                <p style={{color:"black"}}>ID:{avin.id}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>Name:{avin.name}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>CNIC:{avin.cnic}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>Contact:{avin.contact}</p></Col>
                                </Row>
<br/>
<Row>
                                <Col>
                                <p style={{color:"black"}}>Ethnicity:{avin.ethnicity}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>Blood Group:{avin.bloodgroup}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>Date Of Birth:{avin.dob}</p></Col>
                                <Col>
                                <p style={{color:"black"}}>Gender:{avin.gender}</p></Col>
                                </Row></></Card.Title>
                            </Card.Header>
                            <Card.Body>

                            <Row className="justify-items-center">
                            <Table striped bordered responsive>
                                    <thead style={{backgroundColor:"#1dc4e9",textAlign:"center",color:"white"}}>
                                    <tr>
                                        <th>Donation Location</th>
                                        <th>Donation Date</th>
                                        <th>Donation Time</th>
                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                  
{ historyy && historyy.map((avin)=>{
if (`${avin.donorid}`=== `${this.state.search}`){
    return(<Tdd doc={avin} key={avin.id}/>)
}
else {
   return  null;
}


})

}


                                    </tbody>
                                </Table>
                                <button onClick={donation} className="btn btn-outline-info">Add Donation</button>
</Row>


                            </Card.Body></Card>)

}
else {
    return null;
}

})}
                            
                            
                            </Col>


</Row>

                       
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Registered Donors</Card.Title>
                            </Card.Header>
                            <Card.Body>
                         
                                <Table striped bordered responsive>
                                    <thead style={{backgroundColor:"#1dc4e9",textAlign:"center",color:"white"}}>
                                    <tr>
                                        <th>Donor ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact Number</th>
                                        <th>Gender</th>
                                        <th>Ethnicity</th>
                                        <th>Date Of Birth</th>
                                        <th>Blood Group</th>
                                        <th>CNIC</th>
                                        <th>Creation Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
{ project && project.map((avin)=>{
        return(<Td doc={avin} key={avin.id}/>)})}
                                   
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
else {
    return null;
}
}
}
const mapStateToProps=(state)=>{
    let data=state.firestore.ordered.clientsdata;
    let data2=state.firestore.ordered.clientshistory;
    let place=state.firebase.profile.hospital;
    let auth= state.firebase.auth;
     const project = data ? data : null;
     const hist= data2 ? data2 : null;
     return {
         historyy:hist,
       project: project,
       auth:auth,
       statt:place
     }
      
 }
 const mapDispatchToProps=(dispatch)=>{
    return {
        createHistory:(proj)=>  dispatch(createHistory(proj))
      
    }
    }
 export default compose(connect(mapStateToProps,mapDispatchToProps), firestoreConnect([{ collection: 'clientsdata',orderBy:["createdAt","desc"] },{ collection: 'clientshistory',orderBy:["createdAt","desc"] }]))(register);
