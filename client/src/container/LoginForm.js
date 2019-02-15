import React from "react";

export default class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleKeyUp = (event, field) => {
        const input = event.currentTarget;
        
        this.setState({
            [field]: input.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" onKeyUp={(event) => this.handleKeyUp(event, "username")} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onKeyUp={(event) => this.handleKeyUp(event, "password")} /> 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}