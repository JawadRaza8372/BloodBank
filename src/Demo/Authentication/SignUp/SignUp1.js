import React from 'react';
import {NavLink,Redirect} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import { signUps } from '../../../Firebase/actions/authActions'
import { connect } from 'react-redux'
class SignUp1 extends React.Component {
    state={
        email:'',password:'',name:"",gender:"",hospital:"",city:"karachi"
    }
    submit=(e)=>{
        e.preventDefault();
     this.props.signUps(this.state);

            }
    
            handlein=(e)=>{
                this.setState({ [e.target.id]:e.target.value});
                    }
    render () {
        const { auth } = this.props;
         if (! auth.uid &&! auth.emailVerified) return <Redirect to='/signin' />   
        const {authError,authSuccess } = this.props;
        return(
            <Aux>                  
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
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div><form onSubmit={this.submit}>
                                <h3 className="mb-4">Sign up</h3>
                                <div className="input-group mb-3">
                                    <input type="text" onChange={this.handlein} id="name" autoComplete="off" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" onChange={this.handlein} id="email" autoComplete="off" className="form-control" placeholder="Email"/>
                                </div> 
                                <div className="input-group mb-4">
                                    <input type="password" onChange={this.handlein} id="password" autoComplete="off" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="row">
                                <div className="col-12">
                                 <select defaultValue="Organization" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="cars" id="hospital">
                                 <option  disabled>Organization</option>
                                 <option value="Pro-Blood">Pro-Blood</option>
                                 <option value="Agha Khan Hospital National Stadium Rd, Aga Khan University Hospital, Karachi">Agha Khan Hospital National Stadium Rd, Aga Khan University Hospital, Karachi </option>
                                 <option value="Fatmid Foundation Garden East Karachi">Fatmid Foundation Garden East Karachi </option>
                                 <option value="Hussaini Blood Bank Shan Hospital, Block 5 Gulshan-e-Iqbal, Karachi">Hussaini Blood Bank Shan Hospital, Block 5 Gulshan-e-Iqbal, Karachi</option>
                                 <option value="Hussaini Blood Bank Lady Dufferin Hospital، Chand Bibi Rd, Adhumal Oodharam Quarter, Karachi">Hussaini Blood Bank Lady Dufferin Hospital، Chand Bibi Rd, Adhumal Oodharam Quarter, Karachi</option>
                                 <option value="Hussaini Blood Bank Plot, SB 59, Block K North Nazimabad Town, Karachi">Hussaini Blood Bank Plot, SB 59, Block K North Nazimabad Town, Karachi</option>
                                 <option value="Hussaini Blood Bank South City Hospital, 12 Rojhan St, Block 5 Block 3 Clifton, Karachi">Hussaini Blood Bank South City Hospital, 12 Rojhan St, Block 5 Block 3 Clifton, Karachi</option>
                                 <option value="Hussaini Blood Bank Afsar Memorial Hospital Gulshan-I-Maymar Rd, Sector W Gulshan-e-Maymar, Karachi">Hussaini Blood Bank Afsar Memorial Hospital Gulshan-I-Maymar Rd, Sector W Gulshan-e-Maymar, Karachi</option>
                                 <option value="Hussaini Blood Bank 22-23 Shaheed-e-Millat Road, Bihar Muslim Society Modern Society BMCHS Sharfabad, Karachi">Hussaini Blood Bank 22-23 Shaheed-e-Millat Road, Bihar Muslim Society Modern Society BMCHS Sharfabad, Karachi</option>
                                 <option value="Hussaini Blood Bank Head Office PLOT#ST02,BLOCK T,QALANDARIA CHOWK,Opposite Talib Chaman Park,Block J North Nazimabad Town,Karachi">Hussaini Blood Bank Head Office Plot#ST02,Block T,Qalanderia Chowk,Opposite Talib Chaman Park,Block J North Nazimabad Town,Karachi</option>
                                 <option value="Saylani Welfare Blood Bank plot number 3/A-5، Block 4 Gulshan-e-Iqbal, Karachi">Saylani Welfare Blood Bank plot number 3/A-5، Block 4 Gulshan-e-Iqbal, Karachi </option>
                                 <option value="Liaquat National Hospital National Stadium Rd, Liaquat National Hospital, Karachi">Liaquat National Hospital National Stadium Rd, Liaquat National Hospital, Karachi</option>
                                 <option value="Indus Hospital Mehran Town Sector 24 Korangi, Karachi">Indus Hospital Mehran Town Sector 24 Korangi, Karachi</option>
                                 <option value="Burhani Blood Bank Saifee Rd, Block F North Nazimabad Town, Karachi">Burhani Blood Bank Saifee Rd, Block F North Nazimabad Town, Karachi </option>
                                 <option value="NIBD Blood Bank National Stadium Colony, Karachi">NIBD Blood Bank National Stadium Colony, Karachi</option>
                                 <option value="Emergency Blood Bank Faisal Cantonment, Karachi">Emergency Blood Bank Faisal Cantonment, Karachi</option>
                                 <option value="DOW Blood Bank Gulzar-e-Hijri Gulshan-e-Iqbal, Karachi">DOW Blood Bank Gulzar-e-Hijri Gulshan-e-Iqbal, Karachi </option>
                                 <option value="Sahara Blood Bank M.A Jinnah Rd, Jamshed Quarters Karachi">Sahara Blood Bank M.A Jinnah Rd, Jamshed Quarters Karachi</option>
                                 <option value="PWA Blood Bank New Labour Colony Nanakwara, Karachi">PWA Blood Bank New Labour Colony Nanakwara, Karachi</option>
                                 <option value="Muhammadi Blood Bank 280 Britto Rd, Soldier Bazaar Catholic Colony, Karachi">Muhammadi Blood Bank 280 Britto Rd, Soldier Bazaar Catholic Colony, Karachi</option>
                                 </select></div></div><br/>
                                 <select defaultValue="Gender" onChange={this.handlein} style={{width:"100%",height:"40px",backgroundColor:"#f4f7fa",borderColor:"#ced4da",color:"#495057"}} name="gender" id="gender">
                                 <option disabled>Gender</option>
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                                 <option value="Rather not to say">Rather Not to say</option>
                                </select>
 
                                { authError ? <p style={{color:"red",textAlign:"center"}}>{authError}</p> : null }
                                { authSuccess ? <p style={{color:"green",textAlign:"center"}}>{authSuccess}</p> : null }
<br/>

                                <button className="btn btn-primary shadow-2 mt-3 mb-4">Sign up</button>
                                <p className="mb-0 text-muted">Back to<NavLink to="/dashboard"> Dashboard</NavLink></p>
                                </form> </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      signUps: (creds) => dispatch(signUps(creds))
    }
  }
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError:state.auth.authError,
      authSuccess:state.auth.authSuccess
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SignUp1);