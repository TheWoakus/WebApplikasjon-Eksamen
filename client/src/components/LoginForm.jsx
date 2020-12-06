import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const StyledForm = styled.form`
	max-width: 300px;
`;


class Form extends React.Component {

	constructor() {
		super();

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
	}

	onChangeUsername(event) {
		this.setState({ username: event.target.value })
	}

	onChangePassword(event) {
		this.setState({ password: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()

		const userDetails = {
			username: this.username.value,
			password: this.password.value
		};

		axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/logginn`, userDetails)
			.then((res) => {
				console.log(res.data)
				this.signupForm.reset();
				this.props.history.push('/');
			}).catch((error) => {
				console.log(error)
			});
	}
	render() {
		return (
			<>
				<StyledForm
					ref={(input) => (this.signupForm = input)}
					onSubmit={(event) => this.onSubmit(event)}
				>
					<fieldset>
						<label htmlFor="username">Brukernavn&#58;</label>
						<input
							ref={(input) => (this.username = input)}
							type="text"
							name="username"
							className="input"
							placeholder="Skriv inn ditt brukernavn"
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
							className="button link"
						>Logg inn</button>
					</fieldset>
				</StyledForm>
			</>
		)
	}
}

export default withRouter(Form);