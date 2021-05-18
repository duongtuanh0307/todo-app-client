import React, { FC } from "react";
import {
  headerWrapper,
  navMenu,
  navItem,
  navLabel,
  navLabelActive,
  logout,
  logoutIcon,
} from "./styles.css";
import { useHistory, useLocation } from "react-router-dom";

export const Header: FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
  const history = useHistory();
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      value: "Dashboard",
      url: "/",
    },
    {
      id: 2,
      value: "Setting",
      url: "/settings",
    },
  ];

  return (
    <div className={headerWrapper}>
      <ul className={navMenu}>
        {navItems.map((item) => {
          const isActive = item.url === location.pathname;
          return (
            <li key={item.id} className={navItem}>
              <p
                className={`${navLabel} ${isActive && navLabelActive}`}
                onClick={() => {
                  history.push(item.url);
                }}
              >
                {item.value}
              </p>
            </li>
          );
        })}
      </ul>
      <div onClick={() => handleLogout()} className={logout}>
        <i className={`fas fa-sign-out-alt ${logoutIcon}`}></i>
      </div>
    </div>
  );
};
