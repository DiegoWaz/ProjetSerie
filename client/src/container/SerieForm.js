import React from "react";

export default class SerieForm extends React.Component {

    state = {
        name: "",
        start_date: "",
        country: ""
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
                    <label for="username">Name</label>
                    <input className="form-control" id="name" placeholder="Enter name" onKeyUp={(event) => this.handleKeyUp(event, "name")} />
                </div>
                <div className="form-group">
                    <label for="username">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" onKeyUp={(event) => this.handleKeyUp(event, "start_date")} />
                </div>
                <div className="form-group">
                    <label for="username">Country</label>
                    <input className="form-control" id="country" placeholder="Enter country" onKeyUp={(event) => this.handleKeyUp(event, "country")} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}