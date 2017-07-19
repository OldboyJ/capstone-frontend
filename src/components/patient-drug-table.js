import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class PatientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient_data: []
    };
  }

  componentDidMount() {
    let self = this;
    axios.get('http://localhost:8000/patients')
      .then(res => {
        console.log('responses',res.data);
      self.setState({
        patient_data: res.data});
      })
      .catch(err => {console.log(err);
      })
  }

  removeItem(patient, e) {
    let self = this;
    axios.get('http://localhost:8000/patients/' + patient.patientdrugid + '/delete').then(res => {
      self.setState({
        patient_data: res.data
      })
    })
  }

  render() {
    let patData = this.state.patient_data.map((patient) => {
      let color = "";
      let status;
      if (patient.APPROVED === 1) {
        color = "success";
        status = "glyphicon glyphicon-ok";
      } else if (patient.APPROVED === 0) {
        color = "warning";
        status = "glyphicon glyphicon-time";
      } else {
        color = "danger";
        status = "glyphicon glyphicon-ban-circle";
      }

      return <tr key={patient.PATIENTID}>
        <td>{patient.PATIENTID}</td>
        <td className={color}><Link to={/details/+ patient.patientdrugid} role="button" className="btn">{patient.FIRSTNAME} {patient.LASTNAME}</Link></td>
        <td className={color}><span className={status}></span></td>
        <td><a onClick={ this.removeItem.bind(this,patient) }>remove</a></td>
      </tr>
    })

    return (

      <div className="Patient-drug-table">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Patient ID#</th>
                    <th>Patient</th>
                    <th>Approval</th>
                  </tr>
                </thead>
                <tbody>
                  {patData}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientList;
