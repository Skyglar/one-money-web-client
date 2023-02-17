import { Link } from "react-router-dom"

export const MenuNavbar = () => {

    return (
        <div>
            <div>
                <Link to='/profile'>Profile</Link>
            </div>

            <ul>
                <li><Link to='/accounts'>Accounts</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/transactions'>Transactions</Link></li>
                <li><Link to='/overview'>Overview</Link></li>
            </ul>
        </div>
    )
}