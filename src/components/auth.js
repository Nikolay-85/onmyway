'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { authenticate } from '../actions';
import { bindActionCreators } from 'redux';

class Auth extends Component {
		constructor() {
			super();
			this.onSignBtnClick = this.onSignBtnClick.bind(this);
		}
		onSignBtnClick() {
			this.props.authenticate( !this.props.authenticated )
		}
		renderSignBtn() {
			if ( this.props.authenticated ) {
				return (
				  <button type="button" className="btn btn-default" onClick={this.onSignBtnClick}>SignOut</button>
			  );
			}
			return (
			  <button type="button" className="btn btn-default" onClick={this.onSignBtnClick}>SignIn</button>
		  );
		}
    render() {
        return (
	      	<div>
	        	{this.props.children}
					  <Link to="/" className="btn btn-default">Home</Link>
					  <Link to="/map/11" className="btn btn-default">Map</Link>
					  { this.renderSignBtn() }
	        </div>
        );
    }
}

Auth.propTypes = { children: React.PropTypes.element };

function mapStateToProps( state ) {
	return {
		authenticated: state.authenticated
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ authenticate }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( Auth );

if (module.hot) {
    module.hot.accept();
}