import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <div className="container-fluid">
                    <Header />
                    {this.props.children}
                </div>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
   // loading: PropTypes.bool.isRequired

};
export default App;