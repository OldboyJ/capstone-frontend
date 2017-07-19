import React, {Component} from 'react';
import axios from 'axios';

class NewPatient extends Component {

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:8000/patients', {
      FIRSTNAME: this.refs.firstName.value,
      LASTNAME: this.refs.lastName.value,
      REFERRALSRC: this.refs.refSource.value,
      PRIMPLAN: this.refs.planName.value,
      PRIMARYPLANID: this.refs.planId.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal top-margin">
        <fieldset>
          <div className="form-group">
            <label className="col-lg-2 control-label">First Name</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="firstName" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Last Name</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="lastName" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Referral Source</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="refSource" />
            </div>
          </div>
          <hr />
          <div className="form-group">
            <label className="col-lg-2 control-label">Plan Name</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="planName" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Plan ID</label>
            <div className="col-lg-10">
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="planId" />
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

export default NewPatient;
