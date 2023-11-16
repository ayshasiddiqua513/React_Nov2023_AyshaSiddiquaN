import React, { Component } from "react";
class HelloWorld1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Aysha",
        };
    }
    render(){
        return(
            <div>
                <h1>Hello! {this.state.name}</h1>
            </div>
        );
    }
}
    export default HelloWorld1;