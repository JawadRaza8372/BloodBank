import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux'
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import {Redirect} from "react-router-dom";

class SamplePage extends Component {
    render() {
        const { auth } = this.props;
        if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
        else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' /> 
        return (
            <Aux>
                    <Card title='OUR TEAM'>
                            
                            <Row>
                    
                    <Col>
                    <Card title='FIZA NOMAN'>
                            <p>
                            ROLL NUMBER : 2017-CE-067
                            </p>
                        </Card>
                    </Col>
                    <Col>
                    <Card title='MARIYAM ASHRAF'>
                            <p>
                            ROLL NUMBER : 2017-CE-069
                            </p>
                        </Card>
                    </Col>
                    <Col>
                    <Card title='M NABEEL ALI'>
                            <p>
                            
                            ROLL NUMBER : 2017-CE-082
                            </p>
                        </Card>
                    </Col>
                    <Col>
                    <Card title='M TALHA SALEEM'>
                            <p>
                            
                            ROLL NUMBER : 2017-CE-103
                            </p>
                        </Card>

                    </Col>
                </Row>   
                <h5>OUR GOAL</h5>                     
              <p>  We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.
                            </p>       
                        </Card>                

                <Row>
                    
                    <Col>
                    <Card title='What we do ?'>
                            <p>
                            
We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.
                            </p>
                        </Card>
                    </Col>
                    <Col>
                    <Card title='Our Innovation'>
                            <p>
Pro-Blood is an innovative approach to address global health. We provide immediate access to blood donors.
                            </p>
                        </Card>
                    </Col>
                    <Col>
                    <Card title='Our Network'>
                            <p>
                            
Pro-Blood is one of several community organizations working together as a network that responds to emergencies in an efficient manner.
                            </p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                   
                    <Col>
                        <Card title='Get Notification'>
                            <p>
Pro-Blood works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card title='It’s Totally Free'>
                            <p>
Pro-Blood's ultimate goal is to provide an easy-to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card title='Support Our Objective'>
                            <p>
We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons. Help us by making a gift !
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError:state.auth.authError,
      authSuccess:state.auth.authSuccess
    }
  }
  export default connect(mapStateToProps)(SamplePage);
