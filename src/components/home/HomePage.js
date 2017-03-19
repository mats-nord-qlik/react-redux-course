import React from 'react';
import {Link} from 'react-router';

// Could be a stateless component if so...

class HomePage extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <h1>Analytic head</h1>
                <p>A dog store</p>
                <Link to="deltas" className="btn btn-primary btn-lg">Adaptive Distribution Spin</Link>
            </div>
        );
    }
}

export default HomePage;