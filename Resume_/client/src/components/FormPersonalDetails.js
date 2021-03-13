import React, { Component } from 'react';





export class FormPersonalDetails extends Component {
  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };


      
render() {
  const { values, handleChange } = this.props;
  return (
    <div >
      <div className="card animated fadeInUp"  >
          <div className="card-body ">

              {/* <h1 className="card-title">Personal Details</h1> */}
              <h3 className="card-title">Personal Details</h3>

           
          </div>
          <form onSubmit={this.continue}>
              <div className="row col-lg-10 mx-auto"  >
                  <div className="col-lg-4 text-left">
                      <label>Name </label>
                      <input type="text" name="name" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.name} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Email </label>
                      <input type="email" name="email" className="form-control" onChange={handleChange}  defaultValue={values.status === 1 ? '' : values.email} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Contact Number</label>
                      <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.phone} required />
                  </div>
              </div>
              <br />
              <div className="row col-lg-10 mx-auto"  >
              <div className="col-lg-6 text-left">
                      <label>About</label>
                      <input type="text" name="about" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.about} required />
                  </div>
              <div className="col-lg-6 text-left">
                      <label>DOB</label>
                      <input type="date" name="dob" className="form-control" onChange={handleChange} defaultValue={values.status === 1 ? '' : values.dob} required />
                  </div>
              </div>
              
              <br />
              <br />
              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Skills  (Separate each skill with a space and a comma)</label>
                      <input type="text" name="skills" className="form-control"  defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange} />
                  </div>
              </div>
              <br />
              <div className="container text-center"><button type="submit" className="btn btn-dark">Next<i className="fas fa-angle-right ml-1"></i></button></div>
              <br/>
          </form>
      
      </div>
      </div>
  )
}
}

export default  FormPersonalDetails;