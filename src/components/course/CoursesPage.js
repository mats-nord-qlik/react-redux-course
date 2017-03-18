import React, {PropTypes} from 'react';
import {connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
	constructor(props, context){
		super(props, context);
		this.redirectToAddCoursePage.bind( this );
	}

	courseRow(course, index){
		return (<div key={index}>{course.title}</div>);
	}

	redirectToAddCoursePage(){
		browserHistory.push('/course');
	}

	// Render the DOM
	render(){
		// Use detstructure to pull out the courses, so that the ref will be short down there.
		const {courses} = this.props;
		
		return (
			<div>
				<h1>Courses</h1>
				<input type="submit"
					value="Add Course"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage} />
				<CourseList courses={courses} />
			</div>
		);
	}
}
// Validatetion of prop types
CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};


// Redux connect and related functions
function mapStateToProps(state, ownProps){
	return{
		courses: state.courses
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
};
export default connect( mapStateToProps, mapDispatchToProps )(CoursesPage);