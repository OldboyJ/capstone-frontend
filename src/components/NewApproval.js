import React, {Component} from 'react';
import axios from 'axios';

class NewApproval extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      drugs: []
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('this.refs',this.refs);
    axios.post('http://localhost:8000/details/approval', {
      PATIENTID: this.refs.patient.value,
      DRUGID: this.refs.drug.value,
      DURATION: this.refs.duration.value
    });
  }

  componentDidMount() {
    let self = this;
    axios.get('http://localhost:8000/patients').then(patients => {
      axios.get('http://localhost:8000/drug').then(drugs => {
        self.setState({patients: patients.data, drugs: drugs.data})
      })
    })
  }

  render() {
    let patients = this.state.patients.map(patient => {
      return (
          <option value={patient.PATIENTID} key={patient.PATIENTID}>{patient.FIRSTNAME} {patient.LASTNAME}</option>
      )
    })
    let drugs = this.state.drugs.map((drug,index,arr) => {
      return (
          <option value={drug.DRUGID} key={drug.DRUGID}>{drug.DRUGNAME}</option>
      )
    })


    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal top-margin">
        <fieldset>
          <div className="form-group">
            <label className="col-lg-2 control-label">Patients</label>
            <div className="col-lg-10">
              <select ref="patient" className="form-control" id="select">
                {patients}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Drug</label>
            <div className="col-lg-10">
              <select ref="drug" className="form-control" id="select">
                {drugs}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Duration</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="e.g. (in mg) 500 " ref="duration" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default NewApproval;
