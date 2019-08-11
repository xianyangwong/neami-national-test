import { connect } from 'react-redux';
import { login } from "../../actions/user";
import Component from './component';

const mapDispatchToProps = (dispatch: any) => ({
    login: (payload: {
        login: string,
        password: string
    }) => dispatch(login(payload))
})

const Login = connect(
    null,
    mapDispatchToProps
)(Component)

export default Login