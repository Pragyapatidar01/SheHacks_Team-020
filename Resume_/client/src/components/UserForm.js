import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormEduDetails from './FormEduDetails';
import FormProjectDetails from './FormProjectDetails';
import FormExperienceDetails from './FormExperienceDetails';
import FormProfileDetails from './FormProfileDetails';
import Success from './Success';


class UserForm extends Component {
    state = {
      step: 1,
      /* Personal Details!! */
      name:'',
      about:'',
      dob:'',
      email: '',
      phoneNumber: '',
      skills: '',

      /* Education Details!! */
      eduSchool:'',
      edu12Year:'',
      eduQualSchool:'',
      eduDescSch:'',

      eduCollege:'',
      eduGradYear:'',
      eduQualCollg:'',
      eduDescCllg:'',
     
      /*Projects*/
      project1Name:'',
      project1Link:'',
      project1About:'',
     
      project2Name:'',
      project2Link:'',
      project2About:'',

   /* Experience */
      experience1Company:'',
      experience1Post:'',
      experience1Duration:'',
      experience1desc:'',

      experience2Company:'',
      experience2Post:'',
      experience2Duration:'',
      experience2desc:'',

      /*Profile */
      profileLinkedIn:'',
      profileGithub:'',
      profilePortFolio:'',
      profileDevfolio:'',

      /* For submitting functionality */
      status:0
    };

    //var skillArr = skills.split(',')

// Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //When the user successfully submit all the data!
  submitted = () => {
    const { status } = this.state;
    this.setState({
        status: status + 1
    });
}

  // Handle fields change
  
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

  render() {

    const { step } = this.state;
   // const values = { step, firstName, lastName, email, phoneNumber, skills, eduCollege, eduGradYear, eduSchool, edu12Year, project1Name, project1Link, project1About, project2Name, project2Link, project2About, experience1Company, experience1Post, experience2Company, experience2Post, profileLinkedIn, profileGithub };

    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );

      case 2:
        return (
          <FormEduDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        );
        case 3:
            return (
              <FormProjectDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={this.state}
              />
            );
        case 4:
            return (
                <FormExperienceDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={this.state}
                />
              );
        case 5:
            return (
              <div className="App pt-5 mt-5">
              <div className="container col-lg-8 mx-auto text-center">

                  <FormProfileDetails
                      values={this.state}
                      prevStep={this.prevStep}
                      nextStep={this.nextStep}
                      submitted={this.submitted}
                      handleChange={this.handleChange}
                  />
              </div>
              <br />
          </div>
              );
  

      case 6:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm