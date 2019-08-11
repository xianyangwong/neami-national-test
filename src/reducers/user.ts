import { isType } from 'typescript-fsa'
import { login } from '../actions/user';

export const initialState = {
    loginStatus: false,
    login: "",
    password: ""
} 

export default (state = initialState, action:any) => {
    
    if(isType(action, login)){
        return {
            ...state,
            loginStatus: true,
            login: action.payload.login,
            password: action.payload.password
        }
    }
    
    return state
}
