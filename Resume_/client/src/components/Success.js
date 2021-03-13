import React, { Component } from 'react';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

  render() {
    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
            <i className="fas fa-check-circle fa-7x text-success"></i>
            {/* <h1>Your Resume is being downloaded!!</h1> */}
            <h3 className="card-title">Your Resume is being downloaded!!</h3>

            </div>
            </div>
    );
  }
}

export default Success;