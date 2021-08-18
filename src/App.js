import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import UserTable from "./UserTable";

const App = () => {
  const [userObj, setUserObj] = useState([]);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Form userObj={userObj} setUserObj={setUserObj} />}
        ></Route>
        <Route
          path="/detail"
          component={() => <UserTable userObj={userObj} />}
        ></Route>
      </Switch>
    </>
  );
};

export default App;
