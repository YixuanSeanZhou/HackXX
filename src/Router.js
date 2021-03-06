import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from './components/EmpolyeeList.js';
import EmployeeCreate from './components/CreateEmpolyee.js';
import EmployeeEdit from './components/EmployeeEdit.js';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Keywords"
          initial
          />
          <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Keyword"
          />
          <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Keyword"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
