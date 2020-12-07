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
			email: this.email.value,
			password: this.password.value
		};

		axios.post(`${process.env.BASE_URL}${process.env.API_VERSION}/login`, userDetails)
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