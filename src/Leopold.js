import { Component } from "react";

export class Leopold extends Component  {
    constructor(){
        super();

        this.state = {
            Name: "Jack"
        }
    }
    ChangeName =()=> {
        this.setState({Name: "Leopold"})
    }

    render() {
        return (
            <div>
                <h2>Hello {this.state.Name}</h2>
                <button onClick={()=>this.ChangeName()}>Click here for name change</button>
            </div>
        )
    }
}