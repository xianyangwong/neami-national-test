import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { withRouter } from "react-router";

export interface IProps {
    login: (payload: {
        login: string,
        password: string
    }) => void,
    history: any,
    location: any,
    match: any
}

export interface IState {
    login: string,
    password: string
}

class Login extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            login: "",
            password: ""
        }
    }

    handleSubmit(event:any) {
        event.preventDefault();
        if(this.state.login && this.state.password){
            this.props.login({ login: this.state.login, password: this.state.password })
            ToastsStore.success("Login Success")
            setTimeout(() => {
                this.props.history.push('/welcome')
            }, 1000);
            
        }
        else{
            ToastsStore.error("Username / Password incorrect")
        }
        
    }

    handleChange(event:any) {
        switch (event.target.name) {
            case 'login':
                this.setState({
                    login: event.target.value
                })
                break;
            
            case 'password':
                this.setState({
                    password: event.target.value
                })
                break;
        
            default:
                break;
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={this.handleChange}/>
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.handleChange}/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>

                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>

                    <div id="formFooter">
                        <a className="underlineHover" href="/">Forgot Password?</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Login);
