import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
	constructor( props, context ){
		super( props, context );
		this.state = {
			course: Object.assign( {}, this.props.course ),
			errors: {},
			saving: false
		};
		// Try a shorte form
		// this.updateCourseState.bind( this );
		// this.saveCourse.bind( this );
		this.updateCourseState = this.updateCourseState.bind( this );
		this.saveCourse = this.saveCourse.bind( this );
	}

componentWillReceiveProps( nextProps ){

	if ( this.props.course.id != nextProps.course.id ){
		this.setState( {course: Object.assign( {}, nextProps.course )} );
	}
}
	

updateCourseState( event ) {
	const field = event.target.name;
	let course = this.state.course;
	course[field] = event.target.value;
	return this.setState({ cours: course });
}

saveCourse( event ) {
	event.preventDefault();
	this.setState({ saving: true });
	this.props.actions.saveCourse( this.state.course )
		.then(() => this.redirect()	)
		.catch(error => {
			toastr.error( error );
			this.setState({ saving: false });
		});
}

redirect(){
	// Push a new rout on the global context.router
		this.setState({ saving: false });
		toastr.success('Course save');
	// Changes the url to /courses after saving the new route, displays the list of routes
	this.context.router.push('/courses');
}


  render() {
    return (
				<CourseForm 
				allAuthors={this.props.authors}
				onChange={this.updateCourseState}
				onSave={this.saveCourse}
				course={this.state.course}
				errors={this.state.errors}
				saving={this.state.saving}
			/>
		);
  }
}


ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
//MND: Make access to a global context..
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id){
	const course = courses.filter( course => course.id == id );
	if ( course.length ) return course[0]; // Grab the first, and only, element.
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id; // from the path '/course/:id
	let course = { id: "", title: "", watchHref: "", authorId: "", length: "", category: "" };

	if ( courseId && state.courses.length > 0 ){
		course = getCourseById( state.courses, courseId );
	}

const authorsFormattedForDropDown = state.authors.map( author => {
		return{
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
});

  return {
    course: course,
		authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps( dispatch ){
	return {
		actions: bindActionCreators( courseActions , dispatch )
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
