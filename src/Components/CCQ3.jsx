import { Component } from "react";

export default class CCQ3 extends Component {
    constructor(props) {
        super(props);
        this.state={
            tableWidth:'100%'
        }
    }
    render(){
        return(
            <table style={{width:this.state.tableWidth}} onClick={()=>this.setState({tableWidth:'50%'})} onDoubleClick={()=>this.setState({tableWidth:'100%'})}>
                <tr>
                    <td>Elad</td>
                    <td>Armoni</td>
                    <td>206157323</td>
                </tr>
                <tr>
                    <td>Ofek</td>
                    <td>Begerano</td>
                    <td>318435195</td>
                </tr>
            </table>
        );
    }
}