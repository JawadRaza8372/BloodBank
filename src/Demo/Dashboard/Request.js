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
        res:0,idds:""
    }
    mess={
        st:""
    }
    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   
  const {statt,req,project}=this.props;
  return (
            <Aux>
                <Row>
                    <Col className=" m-auto" md={10} xl={12}>
                        <Card className='Recent-Users  m-auto'>
                            <Card.Header>
                                <Card.Title as='h5'> Requested Units Details</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    
                                {   project && project.map((avin)=>{
    if (`${avin.hospitalf}` === `${statt}`){
       this.state.idds=avin.id;
       this.state.dataa=avin;

    }
}),
                                    
                                     req && req.map((avin)=>{
                                        if ((`${avin.Reqhospital}`  ===  `${statt}` )&&(avin.status !== "Rejected") && (avin.status !== "Collected") && (avin.status !== "Canceled")){
                                            return <Reqtable place={statt} stockdata={this.state.dataa} stock={this.state.idds} doc={avin} key={avin.id}/>
                                        }
                                       else {
                                           return null;
                                       }

                                    }
                                  
                                )
                             
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

 export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'stocks'},{ collection: 'bloodreq',orderBy:["timee","desc"]},]))(Request);