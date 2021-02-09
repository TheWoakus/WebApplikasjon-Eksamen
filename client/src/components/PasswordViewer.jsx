import React from 'react';
import styled from 'styled-components';

const TextLabel = styled.p`
	display: inline-block;
	margin: 0 0 20px 5px;
`;

const togglePassword = () => {
	const password = document.getElementById('password');
	
	if (password.type !== `text`) {
		password.type = `text`;
	}
	else {
		password.type = `password`;
	}

}
const PasswordViewer = () => (
	<>
		<input 
			type="checkbox"
			className="showPassword"
			value="show"
			onClick={togglePassword}
		/>
		<TextLabel>Vis passord</TextLabel>
	</>
);

export default PasswordViewer;
