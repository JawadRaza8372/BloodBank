import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Aux from "../../../hoc/_Aux/index";
import MultiBarChart from "./MultiBarChart";
import MultiBarChart2 from "./MultiBarChart2";

class Nvd3Chart extends React.Component {
state={
}

    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   

  
        return (
            <Aux>
                <Row>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Stocks of Blood Bank</Card.Title>
                            </Card.Header> 
                            <Card.Body>
                                <MultiBarChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Requests of Units</Card.Title>
                            </Card.Header> 
                            <Card.Body>
                                <MultiBarChart2/>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
            </Aux>
        );
    }
}
const mapStateToProps=(state)=>{
    let data2=state.firestore.ordered.bloodreq;
    let data3=state.firestore.ordered.clientshistory;
    let auth= state.firebase.auth;
     const req=data2 ? data2:null;
     const donat=data3?data3:null;
     return {
         donat:donat,
         req:req,
       auth:auth
         }
      
 }
export default compose(connect(mapStateToProps))(Nvd3Chart);
