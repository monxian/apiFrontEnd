import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchActivities } from '../actions';

class ActivityIndex extends Component{
  componentDidMount(){
    this.props.fetchActivities();
  }

  renderActivities(){
    //working with an object not an array
   return  _.map(this.props.activities, activity =>{
     return (
       <li className="list-group-item" key={activity._id}>
         <Link to={`/activity/${activity._id}`}> {activity.activity}</Link>
       </li>
     )
   });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/activity/new">
            Add an Activity
          </Link>
        </div>
        <h3>Activities</h3>
        <ul className="list-group">
          {this.renderActivities()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {activities: state.activities};
}

export default connect(mapStateToProps, { fetchActivities })(ActivityIndex);
