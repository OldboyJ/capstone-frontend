import React, { Component } from 'react';

class Homepage extends Component {

  redirectToPatients(e) {
    e.preventDefault();
    this.props.history.push({pathname: '/patients'});
  }

  render() {

    return (
      <div className="container login-form">
        <div className="row vertical-offset-100">
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Please sign in</h3>
                       </div>
                      <div className="panel-body">
                        <form onSubmit={this.redirectToPatients.bind(this)}>
                  <fieldset>
                              <div className="form-group">
                                <input className="form-control" placeholder="UserID" name="userid" type="text" />
                              </div>
                              <div className="form-group">
                                  <input className="form-control" placeholder="Password" name="password" type="password" />
                              </div>
                            <input className="btn btn-lg btn-success btn-block action-button" type="submit" value="Login" />
                          </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Homepage;
