import React from 'react';
import {Row, Col, Card, Form} from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import {connect} from "react-redux";
import {createDonor} from "../../Firebase/actions/Projectactions";
class FormsElements extends React.Component {
  state={

}
handlein=(e)=>{
  this.setState({ [e.target.id]:e.target.value});
}
submit=(e)=>{
  e.preventDefault();
  console.log(this.state);
  this.props.createDonor(this.state);
  this.props.history.push("/dashboard");
}
    render() {
      const { auth } = this.props;
      if (auth.uid && ! auth.emailVerified) return <Redirect to='/verify' /> 
      else if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   

        return (
            <Aux>

                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">BLOOD DONORS REGISTRATION FORM</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                    <Form onSubmit={this.submit}>

                                <Row>
                                    <Col md={6}>
                                   

                                    
                            <div className="mb-3">

                                <div className="input-group mb-3">
                                    <input type="text" onChange={this.handlein} id="name" autoComplete="off" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="number" onChange={this.handlein} id="cnic" autoComplete="off" className="form-control" placeholder="CNIC"/>
                                </div> 
                                <div className="input-group mb-4">
                                    <input type="email" onChange={this.handlein} id="email" autoComplete="off" className="form-control" placeholder="Email"/>
                                </div>   <select defaultValue="Ethnicity" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="ethnicity" id="ethnicity">
                                                <option disabled>Ethnicity</option>
                                                <option>Asian</option>
                                                <option>White</option>
                                                <option>American Indian</option>
                                                <option>Black African American</option>
                                                <option>Native Hawaiian</option>
                                            </select><br/><br/>
                                <label style={{textAlign:"left!important",marginLeft:"2px"}}>Date Of Birth</label>
                                <div className="input-group mb-3">
                              
                                    <input type="date" onChange={this.handlein} id="dob" autoComplete="off" className="form-control" placeholder="Data Of Birth"/>
                                </div> 
                                
                             
                               </div>


                                       
                                    </Col><br/>
                                    <Col md={6}>
                                       


                            <div className="mb-3 ">
                                <div className="input-group mb-3">
                                    <input type="number" onChange={this.handlein} id="contact" autoComplete="off" className="form-control" placeholder="Contact Number"/>
                                </div>
                               
                                <div className="input-group mb-4">
                                    <input type="password" onChange={this.handlein} id="password" autoComplete="off" className="form-control" placeholder="password"/>
                                </div>
                                <select defaultValue="Gender" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="gender" id="gender">
                                 <option disabled>Gender</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                                 <option value="Rather not to say">Rather Not to say</option>
                                </select>
                                <br/><br/>
                                <div className="row">
                                <div className="col-12">
                                 <select defaultValue="Blood Group" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="bloodgroup" id="bloodgroup">
                                 <option disabled>Blood Group</option>
                                                 <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                                <option>other(Minorties Blood Groups)</option>
                                               
                                </select>

                           </div>
</div>
</div>

                                    </Col>
                                    </Row>    <br/>
                                    <Row>
                                    <div className="ml-3">
                                      <button  className="btn btn-primary shadow-2 mb-4">submit</button></div>
                                    </Row>
                                    </Form>
                            </Card.Body>
                        </Card>

            </Aux>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  createDonor:(project)=>  dispatch(createDonor(project))
  
}
}
export default connect(mapStateToProps,mapDispatchToProps)(FormsElements);
