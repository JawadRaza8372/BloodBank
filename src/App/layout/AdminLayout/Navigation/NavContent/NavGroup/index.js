import React from 'react';
import Aux from "../../../../../../hoc/_Aux";
import {User} from "../../../../../../hoc/_Aux/index";
import NavCollapse from './../NavCollapse';
import NavItem from './../NavItem';
import { connect } from 'react-redux';

const navGroup = (props) => {
    const { profiles } = props;
    let navItems = '';
    if (props.group.children) {
        const groups = props.group.children;
        navItems = Object.keys(groups).map(item => {
            item = groups[item];
         
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} collapse={item} type="main" />;
                case 'item':
                    return <NavItem layout={props.layout} key={item.id} item={item} />;
                default:
                    return false;
            }
        });
    }   
        
         if (`${navItems[0].props.item.id}`==="dashboard"){return<><User pff={profiles}/><Aux>{navItems}</Aux></>}
else{return <Aux>{navItems}</Aux>};
     
};
const mapStateToProps = (state) => {
    return{
      profiles:state.firebase.profile
    }
  }

export default  connect(mapStateToProps) (navGroup);