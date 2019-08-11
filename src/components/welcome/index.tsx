import { connect } from 'react-redux';
import Component from './component';


const mapStateToProps = (state: any) => ({
    name: state.user.login,
    loginStatus: state.user.loginStatus
})


const Login = connect(
    mapStateToProps
)(Component)

export default Login