import { Component } from "react";

export default class CCQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: false,
            lastName: false,
            psychoGrade: false,
            psychoMessage: ""
        }
    }
    HandlePsychoBlur = (e) => {
        this.setState({ psychoGrade: false });
        if (e.target.value != "") {
            if (Number(e.target.value) > 555) {
                this.setState({ psychoMessage: "You can be accepted for studies." })
            }
            else {
                this.setState({ psychoMessage: "You should try again next year." })
            }
        }
        else {
            this.setState({ psychoMessage: "" });
        }
    }
    render() {
        return (
            <form>
                {this.state.firstName && <p style={{ color: "red" }}>please fill your first name</p>}
                <input type="text" placeholder="First Name" onFocus={() => this.setState({ firstName: true })} onBlur={() => this.setState({ firstName: false })} /> <br /><br />
                {this.state.lastName && <p style={{ color: "red" }}>please fill your last name</p>}
                <input type="text" placeholder="Last Name" onFocus={() => this.setState({ lastName: true })} onBlur={() => this.setState({ lastName: false })} /> <br /><br />
                {this.state.psychoGrade && <p style={{ color: "red" }}>please fill your psycho grade</p>}
                <input type="text" placeholder="Psycho Grade" onFocus={() => this.setState({ psychoGrade: true })} onBlur={this.HandlePsychoBlur} /> <br /><br />
                <p style={{ color: "blue" }}>{this.state.psychoMessage}</p>
            </form>
        );
    }
}