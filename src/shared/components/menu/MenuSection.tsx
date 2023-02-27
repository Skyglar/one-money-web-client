import { Link, NavLink } from "react-router-dom"

export const MenuSection = () => {

    return (
        <div>
            <div>
                <Link to='/profile'>Profile</Link>
            </div>

            <ul>
                {/* TODO Add style to display active link */}
                <li><NavLink to='/accounts' style={ (( {isActive} ) => ({ color: isActive ? "red" : "black"})) } >Accounts</NavLink></li>
                <li><NavLink to='/categories' style={ (( {isActive} ) => ({ color: isActive ? "red" : "black"})) } >Categories</NavLink></li>
                <li><NavLink to='/transactions' style={ (( {isActive} ) => ({ color: isActive ? "red" : "black"})) } >Transactions</NavLink></li>
                <li><NavLink to='/overview' style={ (( {isActive} ) => ({ color: isActive ? "red" : "black"})) } >Overview</NavLink></li>
            </ul>
        </div>
    )
}