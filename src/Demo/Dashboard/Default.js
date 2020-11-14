import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import Reqtable from "./Reqtable";

class Dashboard extends React.Component {
    state={
        res:0
    }
    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   
  const {project,statt,req,donat}=this.props;
let panding=0;
let response=0;
let count=0;
let l=0;
let counts=0
let curent=new Date().toDateString();
  return (
            <Aux>
                <Row>
                {
                    req && req.find(function (avin) {
      ((avin.status !== "null")&&(`${avin.Reqhospital}` === `${statt}`))?
       response=response+1 : ((avin.status === "null") && (`${avin.Reqhospital}` === `${statt}`))? panding=panding+1:l=0;
    }),
    this.state.resp=response,
    this.state.pand=panding,
    this.state.length=req && req.length,
    donat && donat.map(function (avin) {
                            let datt=avin.createdAt.toDate().toDateString();
                            let loc=avin.hospital;
      ((datt === curent)&& (loc=== statt)) ? count=count+1 : counts=0;
    }),
    this.state.donati=count
    ,
    this.state.length2=donat && donat.length,
    console.log("this.state")

  }

 
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h4 className='mb-4'>Requests</h4>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h4 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-droplet text-c-red f-50 m-r-5"/>  Responded |{this.state.resp}  
                                        <i className="feather icon-droplet text-c-red f-50 m-r-5"/> Pending  |{this.state.pand  }  </h4>
                                    </div>

                                    
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                  
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h4 className='mb-4'>Received Units</h4>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-droplet text-c-red f-50 m-r-5"/> {this.state.donati} Units </h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">Today</p>
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>

                    <Card>
                            <Card.Body>
                                <h4 className='mb-4'>In Stock</h4>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                      

                                  
                    {       project && project.map(avin=>{
            if (`${avin.hospitalf}`=== `${statt}` ){
                this.state.res=avin.Plasma+avin.Platelet+avin.Cryo+avin.WBCAp+avin.RBCAp+avin.WBCAn+avin.RBCAn+avin.WBCABp+avin.RBCABp+avin.WBCABn+avin.RBCABn+avin.WBCOp+avin.WBCOn+avin.RBCOp+avin.RBCOn+avin.WBCOther+avin.RBCOther+avin.WBCBp+avin.RBCBp+avin.WBCBn+avin.RBCBN
return           <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-droplet text-c-red f-50 m-r-5"/>{this.state.res}</h3>

}
          else{
             return null
          }
          })}
                                    </div>
          <div className="col-3 text-right">
                                        <p className="m-b-0">Units</p>
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Requested Units Details</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    
                                { req && req.map((avin)=>{
                                    if (`${avin.Reqhospital}`=== `${statt}`){
                                        if (avin.status=== `null`){

                                        return <Reqtable place={statt} doc={avin} key={avin.id}/>}
                                    else{
                                        return <p style={{textAlign:"center"}}>No Pending Or Collactable Request</p>

                                    }
                                    }
                                    else{
                                        return null;
                                    }
                                   
                                })
                                    
                                     }



   </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-event'>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col">
                                        <h5 className="m-0">Donations Made</h5>
                                    </div>

                                </div>
                                <h2 className="mt-2 f-w-300">60+<sub className="text-muted f-14">Donors</sub></h2>
                                <Row>
                                <Col className="col-10"> <h6 className="text-muted mt-3 mb-0">Deemed healthy and perfect for making donations</h6>
</Col>
<Col className="col-2">
<i className="fa fa-angellist text-c-purple f-50"/>
</Col></Row>
                               
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">350+</h3>
                                        <span className="d-block text-uppercase">Patients received their units</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">20+</h3>
                                        <span className="d-block text-uppercase">total locations registered</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
               
                </Row>
                <Row>
                    <Card className="col-12">
                            <Card.Header>
                                <Card.Title as='h5'>Join Us On Social Media</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                            <Row>
                    <Col md={4}>
                                        <a className="btn btn-outline-dark shadow-2 m-4" href="https://www.facebook.com/problood13/"><i className="fa fa-facebook-square text-primary f-36"/>@ Pro-Blood</a>
           
                    </Col>
                    <Col md={4}>

                                        <a className="btn btn-outline-dark shadow-2 m-4" href="https://twitter.com/ProBlood13"><i className="fa fa-twitter-square text-info f-36"/>@ Pro-Blood</a>
                    </Col>
                    <Col md={4}>
                                        <a className="btn btn-outline-dark shadow-2 m-4" href="https://www.instagram.com/problood13/"><i className="fa fa-instagram text-danger f-36"/>@ Pro-Blood</a>            
                    </Col></Row>
                    </Card.Body></Card>
                    </Row> 
            </Aux>
        );
    }
}
  const mapStateToProps=(state)=>{
    let data=state.firestore.ordered.stocks;
    let data2=state.firestore.ordered.bloodreq;
    let data3=state.firestore.ordered.clientshistory;
    let place=state.firebase.profile.hospital;
    let auth= state.firebase.auth;
     const project = data ? data : null;
     const req=data2 ? data2:null;
     const donat=data3?data3:null;
     return {
         donat:donat,
         req:req,
       project: project,
       auth:auth,
       statt:place
     }
      
 }

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'stocks'},{ collection: 'clientshistory',orderBy:["createdAt","desc"]},{ collection: 'bloodreq',orderBy:["timee","desc"],limit:10 }]))(Dashboard);
