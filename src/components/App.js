import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <div className="container-fluid">
                    <Header
                        loading={this.props.loading}
                     />
                    {this.props.children}
                </div>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
};

//export default App;

/* Make the App to a connected to redux component as we are mapping the loading to ajax calls in progress
    and pass it down to the Header
*/
export default connect(mapStateToProps)(App);