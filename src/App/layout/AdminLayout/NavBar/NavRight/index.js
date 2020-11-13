import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import { signOut } from '../../../../../Firebase/actions/authActions';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import { connect } from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";


class NavRight extends Component {
    state = {
        listOpen: false
    };
 
      
    render() {
        const {profiles} =this.props;
        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                   





                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user f-30">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-user f-30"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                  <b className="b-brand">
   <div className="b-bg">
       <i className="feather icon-user" />
   </div>
   <span style={{textTransform:"capitalize",fontSize:"16px"}} className="b-title">{profiles.name}</span>
</b>
                                </div>
                                <ul className="pro-body">
                                    <li><p style={{marginLeft:"15px",textTransform:"capitalize"}}>Hospital:{profiles.hospital}</p></li>
                                    <li><p style={{marginLeft:"15px",textTransform:"capitalize"}}>City:{profiles.city}</p></li>
                                    <li><a onClick={this.props.signOut} style={{textTransform:"capitalize"}} href={DEMO.BLANK_LINK} className="dropdown-item"> <i className="feather icon-log-out"/> Logout</a></li>
                                    </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </Aux>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  const mapStateToProps=(state)=>{
    let data2=state.firestore.ordered.notifications2;
    let data3=state.firestore.ordered.notifications;
     const donat=data3?data3:null;
     const donat2=data2?data2:null;
     return {
         donat:donat,
                  donat2:donat2,
         profiles:state.firebase.profile
     }
      
 }

export default compose(connect(mapStateToProps,mapDispatchToProps), firestoreConnect([{ collection: 'notifications',orderBy:["createdAt","desc"]},{ collection: 'notifications2',orderBy:["createdAt","desc"]}]))(NavRight);

