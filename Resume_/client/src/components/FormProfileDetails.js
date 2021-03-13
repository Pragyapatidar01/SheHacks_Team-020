import React, { Component } from 'react';
import axios from 'axios'
import {saveAs} from 'file-saver';

export class FormProfileDetails extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  formSubmit=(e)=>{
      e.preventDefault();
      this.props.submitted();
      this.props.nextStep();

      const data = this.props.values;
      console.log(data);

      axios.post('/create-pdf', data)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'cv.pdf');
      });

  e.target.reset();

}

  


    render() {
      const { values, handleChange } = this.props;
      return (
          <div className="card animated fadeInUp">
              <div className="card-body">

                  <h3 className="card-title">Profiles</h3>
                  <hr />
                  <br></br>
              </div>
              <form onSubmit={this.formSubmit}>
                  <div className="row col-lg-10 mx-auto">

                      <div className="col-lg-6 md-form">
                          <input type="text" name="profileLinkedIn" className="form-control" defaultValue={values.status === 1 ? '' : values.profileLinkedIn} onChange={handleChange} required />
                          <label htmlFor=" profileLinkedIn">LinkedIn</label>
                      </div>
                      <div className="col-lg-6 md-form">
                          <input type="text" name="profileGithub" className="form-control" defaultValue={values.status === 1 ? '' : values.profileGithub} onChange={handleChange} required />
                          <label htmlFor=" profileGithub">Github</label>
                      </div>
                  </div>
                  <br />
                  <div className="row col-lg-10 mx-auto">

                      <div className="col-lg-6 md-form">
                          <input type="text" name="profilePortFolio"  className="form-control" defaultValue={values.status === 1 ? '' : values.profilePortFolio} onChange={handleChange} required />
                          <label htmlFor="profilePortFolio">PortFolio</label>
                      </div>
                      <div className="col-lg-6 md-form">
                          <input type="text" name="profileDevfolio"  className="form-control" defaultValue={values.status === 1 ? '' : values.profileDevfolio} onChange={handleChange} required />
                          <label htmlFor="profileDevfolio">Devfolio</label>
                      </div>
                  </div>

                  
                  <br />
                  <div className="container text-center">
                      <button type="button" className="btn btn-danger" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                      <button type="submit" className="btn btn-dark">Download <i className="fas fa-download ml-1"></i></button>
                  </div>
                  <br />
              </form>
          </div>

      )
  }
}

export default FormProfileDetails;