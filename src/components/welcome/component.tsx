import React from 'react';
import './style.scss';
import { withRouter } from "react-router";

export interface IProps {
    name: string,
    loginStatus: boolean,
    history: any,
    location: any,
    match: any
}

class Login extends React.Component<IProps> {

    constructor(props: any) {
        super(props);
        if(this.props.loginStatus === false){
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className="welcome wrapper fadeInDown">
                Welcome {this.props.name}
            </div>
        )
    }
}

export default withRouter(Login);
