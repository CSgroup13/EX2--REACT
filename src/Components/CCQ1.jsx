import { Component } from "react";

export default class CCQ1 extends Component {
    constructor(props){
        super(props);
        this.state={
            divColor:"white"
        };
    }
    ChangeColor=(e)=>{
        let color=e.target.innerText;
        this.setState({divColor:color});
    }
    render() {
        return (
            <div style={{backgroundColor:this.state.divColor}}><br />
                <button onClick={this.ChangeColor}>Red</button>
                <button onClick={this.ChangeColor}>Blue</button>
                <button onClick={this.ChangeColor}>Green</button>
                <button onClick={this.ChangeColor}>Yellow</button>
                <button onClick={this.ChangeColor}>Purple</button>
                <button onClick={this.ChangeColor}>Orange</button>
                <button onClick={this.ChangeColor}>Pink</button>
                <button onClick={this.ChangeColor}>Brown</button>
            </div>
        );
    }
}