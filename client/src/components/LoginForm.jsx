import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';
import { login } from '../utils/authService';
import { useAuthContext } from '../context/AuthProvider';

const StyledForm = styled.form`
	max-width: 300px;
`;

class Form extends React.Component {

	constructor() {
		super();

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.setSuccess = this.setSuccess.bind(this);
		this.setError = this.setError.bind(this);
	}

	onChangeUsername(event) {
		this.setState({ username: event.target.value })
	}

	onChangePassword(event) {
		this.setState({ password: event.target.value })
	}

	setSuccess(property) {
		this.setState({success: property})
	}

	setError(property) {
		this.setState({error: property})
	}

	async onSubmit(event) {
		event.preventDefault()

		const credentials = {
			email: this.email.value,
			password: this.password.value
		};

		const {data} = await login(credentials);

		if(!data.success) {
			this.setError(data.message);
		} else {
			const user = data.user;
			const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
			// TODO: Update AuthContext
			this.setSuccess(true);
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<>
				<StyledForm
					ref={(input) => (this.signupForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label htmlFor="email">E-post&#58;</label>
						<input
							ref={(input) => (this.email = input)}
							type="text"
							name="email"
							className="input"
							placeholder="Skriv inn din e-post"
							onChange={this.onChangeUsername}
						/>

						<label htmlFor="password">Passord&#58;</label>
						<input
							ref={(input) => (this.password = input)}
							type="password"
							name="password"
							className="input"
							placeholder="Skriv inn ditt passord"
							onChange={this.onChangePassword}
						/>
						<button
							type="submit"
							className="button centered big"
						>Logg inn</button>
					</fieldset>
				</StyledForm>
			</>
		)
	}
}

export default withRouter(Form);