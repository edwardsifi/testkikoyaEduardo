import Login from './Login';
import { connect } from 'react-redux';
import './Login.css';
import {getUsers, logIn, logOut} from '../../ducks/users';

const mapStateToProps = (state, props) => {
    return {
        users: getUsers(state, props),
    }
}

const mapDispatchToProps = (dispatch) => ({
    logOutUser: () => dispatch(logOut()),
    logInUser: (username, password) => dispatch(logIn(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);