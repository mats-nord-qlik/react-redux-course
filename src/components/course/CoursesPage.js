import React, {PropTypes} from 'react';
import {connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			course: {title: ""}
		};
		// Bind functions 
		this.onTitleChange = this.onTitleChange.bind(this); // this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this); // this.onClickSave.bind(this);
	}
	// Child functions, used by the render function
	onTitleChange(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({ course: course });
	}
	onClickSave(){
		// Dispach is proveded by connect, because we did not map a dispatcher to props
		this.props.actions.createCourse(this.state.course);
		//alert(`Saving ${this.state.course.title}`);
	}
	courseRow(course, index){
		return <div key={index}>{course.title}</div>;
	}
	// Render the DOM
	render(){
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title} />
				<input 
					type="Submit"
					onClick={this.onClickSave}
					defaultValue="save" />
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