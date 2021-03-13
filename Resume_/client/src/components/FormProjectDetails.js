import React, { Component } from 'react';


export class FormProjectDetails extends Component {
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

              <h3 className="card-title">Projects</h3>
              <hr />
          </div>
          <form onSubmit={this.continue}>

              



              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <h3><b><i className="fas fa-thumbtack"></i> 1</b></h3>
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Title</label>
                      <input type="text" name="project1Name" className="form-control" defaultValue={values.status === 1 ? '' : values.project1Name} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Link (Provide github link)</label>
                      <input type="text" name="project1Link" className="form-control" defaultValue={values.status === 1 ? '' : values.project1Link} onChange={handleChange} />
                  </div>
                  
              </div>
              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Description</label>
                      <input type="text" name="project1About" className="form-control" defaultValue={values.status === 1 ? '' : values.project1About} onChange={handleChange} required />
                  </div>
              </div>

              <br />

              

              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <h3><b><i className="fas fa-thumbtack"></i>  2</b></h3>
                      <hr/>
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Title</label>
                      <input type="text" name="project2Name" className="form-control" defaultValue={values.status === 1 ? '' : values.project2Name} onChange={handleChange} required />
                  </div>
                  <div className="col-lg-6 text-left">
                      <label>Link</label>
                      <input type="text" name="project2Link" className="form-control" defaultValue={values.status === 1 ? '' : values.project2Link} onChange={handleChange} />
                  </div>
                  
              </div>
              <div className="row col-lg-10 mx-auto">
                  <div className="col-lg-12 text-left">
                      <label>Description</label>
                      <input type="text" name="project2About" className="form-control" defaultValue={values.status === 1 ? '' : values.project2About} onChange={handleChange} required />
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

export default FormProjectDetails;