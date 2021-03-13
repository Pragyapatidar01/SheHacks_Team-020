import React, { Component } from 'react';

export class FormEduDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



    render() {
      const { values, handleChange } = this.props;
      return (

          <div className="card animated fadeInUp">
              <div className="card-body">
          {/* <strong>   <i className="fas fa-university fa-5x" ></i></strong>  */}
                  <h3 className="card-title ">Education</h3>
                  <hr />
              </div>
              <form onSubmit={this.continue}>

                  



                  <div className="row col-lg-10 mx-auto">
                      <div className="col-lg-12 text-left">
                          <h3><b><i className="fas fa-school"></i></b></h3>
                      </div>
                    
                      <div className="col-lg-4 text-left">
                          <label>School</label>
                          <input type="text" name="eduSchool" className="form-control" defaultValue={values.status === 1 ? '' : values.eduSchool} onChange={handleChange} required />
                      </div>
                      <div className="col-lg-4 text-left">
                          <label>Year</label>
                          <input type="text" name="edu12Year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu12Year} onChange={handleChange} required/>
                      </div>
                      <div className="col-lg-4 text-left">
                          <label>Qualification</label>
                          <input type="text" name="eduQualSchool" className="form-control" defaultValue={values.status === 1 ? '' : values.eduQualSchool} onChange={handleChange} required/>
                      </div>

                  </div>
                  <div className="row col-lg-10 mx-auto">
                      <div className="col-lg-12 text-left">
                          <label>Describe</label>
                          <input type="text" name="eduDescSch" className="form-control" defaultValue={values.status === 1 ? '' : values.eduDescSch} onChange={handleChange} required />
                      </div>
                  </div>


                  <br />

                  


                  <div className="row col-lg-10 mx-auto">
                      <div className="col-lg-12 text-left">
                          <h3><b><i className="fas fa-graduation-cap"></i></b></h3>
                      </div>
                      <div className="col-lg-4 text-left">
                          <label>College</label>
                          <input type="text" name="eduCollege" className="form-control" defaultValue={values.status === 1 ? '' : values.eduCollege} onChange={handleChange} />
                      </div>
                      <div className="col-lg-4 text-left">
                          <label>Year</label>
                          <input type="text" name="eduGradYear" className="form-control" defaultValue={values.status === 1 ? '' : values.eduGradYear} onChange={handleChange} />
                      </div>
                      <div className="col-lg-4 text-left">
                          <label>Qualification</label>
                          <input type="text" name="eduQualCollg" className="form-control" defaultValue={values.status === 1 ? '' : values.eduQualCollg} onChange={handleChange} />
                      </div>

                  </div>
                  <div className="row col-lg-10 mx-auto">
                      <div className="col-lg-12 text-left">
                          <label>Description</label>
                          <input type="text" name="eduDescCllg" className="form-control" defaultValue={values.status === 1 ? '' : values.eduDescCllg} onChange={handleChange} />
                      </div>
                  </div>
                  <br />
                  <div className="container text-center">
                      <button type="button" className="btn btn-danger" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                      <button type="submit" className="btn btn-dark">Next<i className="fas fa-angle-right ml-1"></i></button>
                  </div>
                  <br />

              </form>

          </div>
      )
  }
}

export default FormEduDetails;