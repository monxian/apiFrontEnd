import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/signInForm';

class Signin extends Component{
  renderField(field){
    const { meta:{touched, error} } = field;
    const className = `form-group ${touched && error? 'has-danger':''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
          <input
            className="form-control"
            type={field.type}
            {...field.input}
          />
          <div className='text-help'>
            {touched ?  error:''}
          </div>
      </div>
    );
  }

  onSubmit(values){
    //  this.props.signInUser(values);
     this.props.signInUser(values,() =>{
       this.props.history.push('/');
     });
  }

  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Opps!</strong>{this.props.errorMessage}
        </div>
        )
    }
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
       <Field
          label='Email'
          name='email'
          type='text'
          component={this.renderField}
        />
       <Field
          label="Password"
          name='password'
          type='password'
          component={this.renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}
function validate(values){
  const errors = {};

  //validate the inputs from 'values'
 if(!values.email){
   errors.email = "Enter an email"
 }
  if(!values.password){
   errors.password = "Enter a password"
 }
  //if errors is empty form fine to submit
  // if errors has any properties redux assumes form is invalid
  return errors;
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error};
}
  
export default reduxForm({
  validate,
  form: 'SigninForm'
})(
  connect(mapStateToProps, { signInUser })(Signin)
);


