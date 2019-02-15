import React from "react";
import {Switch, Route} from "react-router-dom";
import SerieForm from "./SerieForm";
import {connect} from "react-redux";
import {serie} from "../redux/actions/serie"

class CreateSerieContainer extends React.Component {
    handleSubmit = (data) => {
        this.props.serie(data.name, data.start_date,data.country, this.props.dispatch);
    }

    render() {
        return (
            <Switch>
                <Route path="/createSerie" render={
                    () => <SerieForm onSubmit={this.handleSubmit} />} />
            </Switch>
        );
    }
}

const mapStateToProps = function(state, ownProps){
    const {security: {user, isLogged}} = state;
    return {
        user,
        isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        serie: (name, start_date, country) => dispatch(serie(name, start_date, country, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSerieContainer);