import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewActivity } from '../actions';

var currentDate = new Date().toString();

class ActivityNew extends Component{

  renderField(field){
    const { meta:{touched, error} } = field;
    const className = `form-group ${touched && error? 'has-danger':''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
          <input
            className="form-control"
            type="text"
            {...field.input}
          />
          <div className='text-help'>
            {touched ?  error:''}
          </div>
      </div>
    );
  }
  renderDate(field){
    const { meta:{touched, error} } = field;
    const className = `form-group ${touched && error? 'has-danger':''}`;

    return(
      <div className={className}>
        <label>{field.label}</label>
          <input
            className="form-control"
            type="date"
            {...field.input}
          />
          <div className='text-help'>
            {touched ?  error:''}
          </div>
      </div>
    );
  }

  onSubmit(values){

    this.props.createNewActivity(values,() =>{
        this.props.history.push('/');
    });

  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
       <Field
          label="Activity"
          name='activity'
          component={this.renderField}
        />
        <Field
          label="Date"
          name='date'
          component={this.renderDate}
        />
        <Field
          label="Address"
          name='address'
          component={this.renderField}
        />
        <Field
          label="Ground Block"
          name='groundBlock'
          component={this.renderField}
        />
        <Field
          label="Dish"
          name='dish'
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    );
  }
}
function validate(values){
  const errors = {};

  //validate the inputs from 'values'
 if(!values.activity){
   errors.activity = "Enter an activity"
 }
 if(!values.date){
   errors.date = "Enter a date"
 }
 if(!values.address){
   errors.address = "Enter an address"
 }
 if(!values.groundBlock){
   errors.groundBlock = "Enter a groundBlock"
 }
 if(!values.dish){
   errors.dish = "Enter a dish"
 }
  //if errors is empty form fine to submit
  // if errors has any properties redux assumes form is invalid
  return errors;
}
//combine reduxForm and combine
export default reduxForm({
  validate,
  form: 'ActivityNewForm'
})(
  connect(null, { createNewActivity })(ActivityNew)
);
