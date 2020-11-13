import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    Collapse
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

class BasicCollapse extends Component {
    state = {

        accordionKey: 1
    };

    render() {
        const { accordionKey } = this.state;

        return (
            <Aux>
                <Row>
                    <Col sm={12} className="accordion">
                        <h5>Updates</h5>
                        <hr/>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                       aria-controls="accordion1"
                                       aria-expanded={accordionKey=== 1}>
Update Blood Donation Date                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 1}>
                                <div id="accordion1">
                                    <Card.Body>
                                        <Card.Text>
                                        <Row>
                                        <Col md={6}>
                                        <div className="input-group mb-3">
                                    <input type="date" onChange={this.handlein} id="donate" autoComplete="off" className="form-control" placeholder="Last Blood Donation Date"/>
                                </div> 
</Col>  <Col md={6}>
                                <div className="ml-3">
                                      <button  className="btn btn-primary shadow-2 mb-4">submit</button></div></Col>
</Row>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                       aria-controls="accordion2"
                                       aria-expanded={accordionKey === 2}>
                                       Update Email and Password
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 2}>
                                <div id="accordion2">
                                    <Card.Body>
                                    <Card.Text>
                                        <Row>
                                        <Col md={6}>
                                        <div className="input-group mb-4">
                                    <input type="email" onChange={this.handlein} id="email" autoComplete="off" className="form-control" placeholder="email"/>
                                </div>
</Col>  <Col md={6}>
                               <div className="input-group mb-4">
                                    <input type="password" onChange={this.handlein} id="password" autoComplete="off" className="form-control" placeholder="password"/>
                                </div></Col>
</Row>
<Row>
<Col md={6}>

<div className="ml-3">
             <button  className="btn btn-primary shadow-2 mb-4">submit</button>
             </div>
</Col>
</Row>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                       onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                       aria-controls="accordion3"
                                       aria-expanded={accordionKey === 3}>
                                        Update Blood Group and Gender
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 3}>
                                <div id="accordion3">
                                    <Card.Body>
                                    <Card.Text>
                                        <Row>
                                        <Col md={6}>
                                        <select defaultValue="Blood Group" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="cars" id="bloodgroup">
                                 <option disabled>Blood Group</option>
                                 <option>RBC A+</option>
                                                <option>RBC A-</option>
                                                <option>RBC B+</option>
                                                <option>RBC B-</option>
                                                <option>RBC AB+</option>
                                                <option>RBC AB-</option>
                                                <option>RBC O+</option>
                                                <option>RBC O-</option>
                                                <option>RBC other(Minorties Blood Groups)</option>
                                                <option>WBC A+</option>
                                                <option>WBC A-</option>
                                                <option>WBC B+</option>
                                                <option>WBC B-</option>
                                                <option>WBC AB+</option>
                                                <option>WBC AB-</option>
                                                <option>WBC O+</option>
                                                <option>WBC O-</option>
                                                <option>WBC other(Minorties Blood Groups)</option>
                                                <option>Platelets</option>
                                                <option>Plasma</option>
                                                <option>Cryo</option>
                                </select>
                        </Col> 
                        <Col md={6}>
                        <select defaultValue="Gender" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="gender" id="gender">
                                 <option disabled>Gender</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                                 <option value="Rather not to say">Rather Not to say</option>
                                </select>
                                </Col>
</Row>
<Row>
<Col md={6}>

<div className="mt-3 ml-3">
             <button  className="btn btn-primary shadow-2 mb-4">submit</button>
             </div>
</Col>
</Row>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicCollapse;