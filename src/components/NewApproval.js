import React, {Component} from 'react';
import axios from 'axios';

class NewApproval extends Component {

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:8000/patients', {
      PATIENTID: this.refs.patientId.value
      DRUGID: this.refs.drugId.value,
      DURATION: this.refs.duration.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal top-margin">
        <fieldset>
          <div className="form-group">
            <label className="col-lg-2 control-label">Patient</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="patientId" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Drug</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="drugId" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Duration</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="duration" />
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default NewApproval;
