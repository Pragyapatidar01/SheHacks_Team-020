import React, { Component } from 'react';


export class FormExperienceDetails extends Component {
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

              <h3 className="card-title">Experiences</h3>
              <hr />
          </div>
          <form onSubmit={this.continue}>
              
              



              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                  </div>
                  
                  <div className="col-lg-4 text-left">
                      <label>Company</label>
                      <input type="text" name="experience1Company" className="form-control" defaultValue={values.status === 1 ? '' : values.experience1Company} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Position</label>
                      <input type="text" name="experience1Post" className="form-control" defaultValue={values.status === 1 ? '' : values.experience1Post} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Duration</label>
                      <input type="text" name="experience1Duration" className="form-control" defaultValue={values.status === 1 ? '' : values.experience1Duration} onChange={handleChange} required />
                  </div>
              </div>
              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Description</label>
                      <input type="text" name="experience1desc" className="form-control" defaultValue={values.status === 1 ? '' : values.experience1desc} onChange={handleChange} required />
                  </div>
              </div>

              <br/>

                  

              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                      <hr/>
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Comapny</label>
                      <input type="text" name="experience2Company" className="form-control" defaultValue={values.status === 1 ? '' : values.experience2Company} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Position</label>
                      <input type="text" name="experience2Post" className="form-control" defaultValue={values.status === 1 ? '' : values.experience2Post} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-4 text-left">
                      <label>Duration</label>
                      <input type="text" name="experience2Duration" className="form-control" defaultValue={values.status === 1 ? '' : values.experience2Duration} onChange={handleChange} required />
                  </div>
              </div>
              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Description</label>
                      <input type="text" name="experience2desc" className="form-control" defaultValue={values.status === 1 ? '' : values.experience2desc} onChange={handleChange} required />
                  </div>
              </div>
              <br/>
              <div className="container text-center">
                  <button type="button" className="btn btn-danger" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                  <button type="submit" className="btn btn-dark">Next<i className="fas fa-angle-right ml-1"></i></button>
              </div>
              <br/>
          </form>
      </div>
  )
}
}


export default FormExperienceDetails;