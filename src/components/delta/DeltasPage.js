import React, {PropTypes} from 'react';
import {connect}  from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deltaActions from '../../actions/deltaActions';
import DeltaList from './DeltaList';
import {browserHistory} from 'react-router';

class DeltasPage extends React.Component {
	constructor(props, context){
		super(props, context);
	}

	deltaRow(delta, index){
		return (<div key={index}>{delta.category}</div>);
	}

	redirectToAddDeltaPage(){
		browserHistory.push('/delta');
	}

    render () {
        const {deltas} = this.props;
        return (
            <div className="jumbotron">
                <h1>Delta</h1>
               <DeltaList deltas={deltas} />
            </div>
        );
    }
}

DeltasPage.propTypes = {
	deltas: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
	return{
		deltas: state.deltas
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(deltaActions, dispatch)
	};
};
export default connect( mapStateToProps, mapDispatchToProps )(DeltasPage);
