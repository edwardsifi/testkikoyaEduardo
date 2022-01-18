import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {logOut} from '../../ducks/users';

const Navbar = ({ state, logOutUser }) => {
    console.log(state.user.users.user);
   
    return (
        <div class="topnav">
            <NavLink className="active" to='/'>Home</NavLink>
            <NavLink to='/login'>login</NavLink>
            <p style={{ color: 'white', padding: 15 }} >{`${state.user.users.user ? state.user.users.user : ''}`} </p>

            {
                state.user.users.rol && state.user.users.rol == 'user' && (
                    <>
                        <p style={{ color: 'white', padding: 15 }}>Tienda</p>
                        <p style={{ color: 'white', padding: 15 }}>Productos</p>
                        <p style={{ color: 'white', padding: 15 }}>Ventas</p>
                    </>
                )
            }

            {
                state.user.users.rol && state.user.users.rol == 'admin' && (
                    <>
                        <p style={{ color: 'white', padding: 15 }}>Usuarios</p>
                        <p style={{ color: 'white', padding: 15 }}>Productos</p>
                        <p style={{ color: 'white', padding: 15 }}>Administración</p>
                    </>
                )
            }

            <span style={{ color: 'white', padding: 15 }} onClick={()=>logOutUser()}>Logout</span>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logOutUser: () => dispatch(logOut()),
})

export default connect((state, props) => ({ state }), mapDispatchToProps)(Navbar);