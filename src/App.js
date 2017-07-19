import React, { Component } from 'react';
import Header from './components/header';
import Homepage from './components/Homepage';
import DrugApprovalDetails from './components/drug-approval-details'
import PatientList from './components/patient-drug-table';
import NewPatient from './components/NewPatient';
import NewApproval from './components/NewApproval';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/patients" component={PatientList} />
          <Route path="/new" component={NewPatient} />
          <Route path="/approval/new" component={NewApproval} />
          <Route path="/details/:approvalId" component={DrugApprovalDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
