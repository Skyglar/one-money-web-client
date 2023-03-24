import { NavLink } from "react-router-dom";
import "../../../assets/styles/menu.section.scss";

export const Menu = () => {
  const activeStyle = ({ isActive }: any) => ({
    color: isActive ? "#fcfdff" : "#ebedf3",
    fontSize: isActive ? 20 : 15,
  });

  return (
    <section>
      <div>
        <NavLink to="/profile" style={activeStyle}>
          Profile
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink to="/accounts" style={activeStyle}>
            Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" style={activeStyle}>
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" style={activeStyle}>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/overview" style={activeStyle}>
            Overview
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
