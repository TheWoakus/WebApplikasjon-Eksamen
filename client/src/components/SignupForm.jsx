import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registrer } from '../utils/authService';

import PasswordViewer from '../components/PasswordViewer.jsx';

import styled from 'styled-components';

const StyledForm = styled.form`
	max-width: 300px;
`;


const SignupForm = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const history = useHistory();


	const onSubmit = async (event) => {
		event.preventDefault();

		const credentials = {
			email,
			password,
		};

		const { data } = await registrer(credentials);

		history.push('/Bruker');
	};

	return (
		<>
			<StyledForm onSubmit={onSubmit}>
				<fieldset>
					<label className="registerLabel" htmlFor="mail">
						Epost&#58;
            <span id="mail_error">OBS!! Sjekk at denne er riktig</span>
					</label>
					<input
						type="text"
						name="mail"
						className="input"
						placeholder="Vennligst oppgi din epost"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label className="registerLabel" htmlFor="password">
						Passord&#58;
            <span id="password_error">OBS!! Sjekk at denne er riktig</span>
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className="input"
						placeholder="Skriv inn ditt ønskede passord"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<PasswordViewer />

					<button type="submit" className="button centered big block">
						Register deg
          </button>
				</fieldset>
			</StyledForm>
		</>
	);
};

export default SignupForm;
