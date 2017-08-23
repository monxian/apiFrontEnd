import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchActivity, deleteActivity } from '../actions';

class ActivityShow extends Component{
  componentDidMount(){
    //wildcard from url
    const id = this.props.match.params.id;
    //console.log(id);
    this.props.fetchActivity(id);
  }

  onDeleteClick(){
    const id = this.props.match.params.id;

      this.props.deleteActivity(id, ()=>{
      this.props.history.push('/');
    });

  }

  render(){
    const {activity}=this.props;

    //component renders before we fetch data
    if(!activity){
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to="/">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
          >
          Delete Activity
        </button>
        <h3>{activity.activity}</h3>
        <p>{activity.date}</p>
        <p>{activity.address}</p>
      </div>
    );
  }
}
//ownProps are the props you want to point to the component
//we are pulling one activity off the big state.
function mapStateToProps({activities}, ownProps){
  return {activity: activities[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchActivity, deleteActivity })(ActivityShow);
