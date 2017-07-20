import React, {Component} from 'react';
import axios from 'axios';

class NewPatient extends Component {

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('http://localhost:8000/patients', {
        FIRSTNAME: this.refs.firstName.value,
        LASTNAME: this.refs.lastName.value,
        REFERRALSRC: this.refs.refSource.value,
        PRIMPLAN: this.refs.planName.value,
        PRIMARYPLANID: this.refs.planId.value
      })
      .then(() => this.props.history.push({pathname: '/patients'}));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
         <div className="col-sm-12">
           <h1 className="text-center">New Patient Form</h1>
           <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
             <fieldset>
               <div className="form-group">
                 <label className="col-lg-2 control-label">First Name</label>
                 <div className="col-lg-10">
                   <input type="text" className="form-control" id="inputEmail" placeholder="First" ref="firstName" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="col-lg-2 control-label">Last Name</label>
                 <div className="col-lg-10">
                   <input type="text" className="form-control" id="inputEmail" placeholder="Last" ref="lastName" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="col-lg-2 control-label">Referral Source</label>
                 <div className="col-lg-10">
                   <input type="text" className="form-control" id="inputEmail" placeholder="Hospital/clinic" ref="refSource" />
                 </div>
               </div>
               <hr />
               <div className="form-group">
                 <label className="col-lg-2 control-label">Plan Name</label>
                 <div className="col-lg-10">
                   <input type="text" className="form-control" id="inputEmail" placeholder="Plan" ref="planName" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="col-lg-2 control-label">Plan ID</label>
                 <div className="col-lg-10">
                   <input type="text" className="form-control" id="inputEmail" placeholder="ID" ref="planId" />
                 </div>
               </div>
               <div className="form-group">
                 <div className="col-lg-10 col-lg-offset-2">
                   <button type="submit" className="btn btn-primary action-button">Submit</button>
                 </div>
               </div>
             </fieldset>
           </form>
         </div>
        </div>
      </div>
    );
  }
}

export default NewPatient;
