import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from "react-redux";
import Reqtable from "./Reqtable";

class Request extends React.Component {
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
let counts=0
let curent=new Date().toDateString();
  return (
            <Aux>
                <Row>
                {
                    req && req.find(function (avin) {
      (avin.status !== "null")? response=response+1 : panding=panding+1;
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
    this.state.length2=donat && donat.length

  }
                    <Col className=" m-auto" md={10} xl={12}>
                        <Card className='Recent-Users  m-auto'>
                            <Card.Header>
                                <Card.Title as='h5'>Requested Units Details</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    
                                { req && req.map((avin)=>{
                                    if (`${avin.Reqhospital}`  ===  `${statt}` ){
                                        return <Reqtable place={statt} doc={avin} key={avin.id}/>

                                    }
                                    else {
                                       return null
                                    }
                                })
                                    
                                     }



   </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    
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

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'bloodreq',orderBy:["timee","desc"] }]))(Request);
