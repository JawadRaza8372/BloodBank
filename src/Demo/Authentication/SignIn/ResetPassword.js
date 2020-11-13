import React from 'react';
import {NavLink} from "react-router-dom"
import { reset } from '../../../Firebase/actions/authActions'
import { connect } from 'react-redux'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class ResetPassword extends React.Component {
    state={
        email:''
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.reset(this.state);
     console.log(this.state);
            }
    
            handlein=(e)=>{
                this.setState({ [e.target.id]:e.target.value});
                    }
    render () {
        const { authError,authSuccess } = this.props;
        // if (auth.uid) return <Redirect to='/dashboard' /> 
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
                                    <i className="feather icon-settings auth-icon"/>
                                </div><form onSubmit={this.submit}>
                                <h3 className="mb-4">Reset Password</h3>
                                <div className="input-group mb-3">
                                    <input type="email" onChange={this.handlein} id="email" autoComplete="off" className="form-control" placeholder="Email"/>
                                </div>
                                { authError ? <p style={{color:"red"}}>{authError}</p> : null }
                                { authSuccess ? <p style={{color:"green"}}>{authSuccess}</p> : null }
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">Reset</button>
                                <p className="mb-0 text-muted">Let's <NavLink to="/signin">Login</NavLink></p>
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
      authSuccess:state.auth.authSuccess,
      auth:state.firebase.auth
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        reset: (creds) => dispatch(reset(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (ResetPassword);
