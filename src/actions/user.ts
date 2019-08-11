import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('USER')

const login = actionCreator<{
    login: string,
    password: string
}>('LOGIN')

const loginSuccess = actionCreator<string>('LOGIN_SUCCESS')

export {
    login,
    loginSuccess
}
