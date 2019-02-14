import React from "react";
import Banner from "../components/banner";
import ToggleButton from "../components/ToggleButton";

export default class ToggleButtonContainer extends React.Component {
    constructor(props){
        super(props);
     
        this.state = {
          theme: "black"
        };
     
        this.toggleTheme = this.toggleTheme.bind(this);
    }
     
    toggleTheme (){
        console.log(this);
        this.setState({theme: this.state.theme === "black" ? "light" : "black" });
        this.aleterChange();
    };
     
    aleterChange = () => alert(this.state.theme);

    render() {
        return (
            <React.Fragment>
                <ToggleButton toggleHandler={this.toggleTheme} />
                <Banner content={this.state.theme} />
            </React.Fragment>
        );
    }
}