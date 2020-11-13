import React from 'react';
import {NavLink,Redirect} from 'react-router-dom';
import { signIn } from '../../../Firebase/actions/authActions'
import { connect } from 'react-redux'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class SignIn1 extends React.Component {
    state={
        email:'',password:''
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
     console.log(this.state);
            }
    
            handlein=(e)=>{
                this.setState({ [e.target.id]:e.target.value});
                    }
    render () {
        const { authError,auth } = this.props;
        if (auth.uid) return <Redirect to='/verify' />        
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div><form onSubmit={this.submit}>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <input type="email" onChange={this.handlein} id="email" autoComplete="off" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" onChange={this.handlein} id="password" autoComplete="off" className="form-control" placeholder="password"/>
                                </div>
                               
                                { authError ? <p style={{color:"red"}}>{authError}</p> : null }
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">Login</button>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/resetpassword">Reset</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth:state.firebase.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (SignIn1);
