import React from "react";
import Link from 'react-router-dom/Link';
import {connect} from "react-redux";
import {logout} from "../redux/actions/logout";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut(event) {
        event.preventDefault();
        this.props.logout();
    }

    render(){
        const {isLogged} = this.props;
        return (
            isLogged ? <Link onClick={this.logOut} to="/security/logout">Logout</Link> : <Link to="/security/login">Login</Link>
        )
    }
}


const mapStateToProps = function(state, ownProps){
    const {security: {user, isLogged}} = state;
    return {
        user,
        isLogged
    }
}

const mapDispatchToProps = function (dispatch){
    return {
       logout: () => dispatch(logout(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);