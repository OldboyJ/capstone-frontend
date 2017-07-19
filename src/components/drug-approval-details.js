import React, {Component} from 'react';
import axios from 'axios';

class DrugApprovalDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      approvalDetails: []
    }
  }

  componentDidMount() {
    let comp = this;
    console.log('The outer', comp.props.match.params.approvalId);

    axios.get('http://localhost:8000/details/' + comp.props.match.params.approvalId).then(res => {
      let approval = res.data[0];
      if(approval.APPROVED === 1){
        approval.APPROVED = 'Approved'
      }else if(approval.APPROVED === 0){
        approval.APPROVED = 'Pending'
      }else{
        approval.APPROVED = 'Denied'
      }
      comp.setState({approvalDetails: approval})
    })
  }

  render() {

    let info = this.state.approvalDetails;
    let styles = {
      width: 'auto'
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 top">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Patient Information</h3>
              </div>
              <div className="panel-body">
                <dl className="dl-horizontal">
                  <dt>Patient ID: </dt>
                  <dd>{info.PATIENTID}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Patient Name: </dt>
                  <dd>{info.FIRSTNAME} {info.LASTNAME}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-sm-6 top">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Drug Information</h3>
              </div>
              <div className="panel-body">
                <dl className="dl-horizontal">
                  <dt>Drug Name: </dt>
                  <dd>{info.DRUGNAME}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Drug Type: </dt>
                  <dd>{info.DRUGTYPE}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Dose: </dt>
                  <dd>{info.DOSE}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Duration: </dt>
                  <dd>{info.DURATION}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Tier: </dt>
                  <dd>{info.TIER}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Health Care Cost: </dt>
                  <dd>{info.HCCOST}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Cost Per Dose: </dt>
                  <dd>{info.COSTPERDOSE}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt style={styles}>Total Out Of Pocket Cost: </dt>
                  <dd>{info.OOPMAXTODATE}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Drug Approval: </dt>
                  <dd>{info.APPROVED}</dd>
                </dl>
                <div className="text-center">
                <a className="btn btn-success">Send for Approval</a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Insurance Information</h3>
              </div>
              <div className="panel-body">
                <dl className="dl-horizontal">
                  <dt>Referral Source: </dt>
                  <dd>{info.REFERRALSRC}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Primary Plan: </dt>
                  <dd>{info.PRIMPLAN}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt style={styles}>Deductible Met For Year: </dt>
                  <dd>{info.DEDMEFORYEAR}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt>Is Deductible Met? : </dt>
                  <dd>{info.DEDMET}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt style={styles}>Out Of Pocket Max To Date: </dt>
                  <dd>{info.OOPMAXTODATE}</dd>
                </dl>
                <dl className="dl-horizontal">
                  <dt style={styles}>Out Of Pocket Max Met? : </dt>
                  <dd>{info.OOPMET  }</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DrugApprovalDetails;
