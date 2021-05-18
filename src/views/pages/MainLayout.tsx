import React, { FC, Suspense, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Setting } from "./Setting";
import { Login } from "./Login";
import { Header } from "../components/compound";
import { AuthContext } from "../../contexts/authContext";

const Dashboard = React.lazy(() => import("./Dashboard"));

export const MainLayout: FC = () => {
  const { authState, logout } = useContext(AuthContext);
  const isAuth = authState.status === "in";
  if (!isAuth) return <Login />;

  return (
    <div>
      <Suspense fallback={<div>Loading ... </div>}>
        <Header handleLogout={logout} />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/settings'>
            <Setting userId={authState.user.id} />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
};
