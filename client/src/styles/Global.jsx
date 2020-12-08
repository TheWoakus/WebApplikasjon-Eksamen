import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	color: #333;
}

body {
	margin: 0;
	padding: 0;
}

html {
	font-size: 14px;
	font-family: "Nunito Sans";
}

h2 {
	font-size: 30px;
}

a {
	text-decoration: none;
}
.mail, .phone {
	margin: 14px 0;
}

fieldset {
	border: none;
	margin: 0;
	padding: 20px 0;
}

form {
	margin: 0 auto;
	max-width: 600px;
	font-size: 18px;
}

.input {
	padding: 10px 10px;
	width: 100%;
	border-radius: 5px;
	border: 1px solid grey;
	box-sizing: border-box;
	font-size: 16px;
	margin-bottom: 20px;
}

select {
	padding: 10px 10px;
	width: calc(100% - 70px);
	border-radius: 5px;
	border: 1px solid grey;
	box-sizing: border-box;
	font-size: 16px;
	margin-bottom: 20px;
}
label, input {
	display: block;
}

span {
	display: inline-block;
	color: white;
}

p:first-letter, span:first-letter, .complete {
	text-transform: capitalize;
}

.button, .link {
	color: #fff;
	background-color: #499eb8; 
	border-radius: 5px;
	padding: 4px 20px;
	border: none;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	line-height: 40px;
	height: 50px;
}

.block {
	display: block;
}

.left {
	margin-left: 0;
	margin-bottom: 20px
}
.centered {
	margin: 0 auto;
}

.big {
	width: 300px;
}

.space {
	margin-left: 10px;
}

.bigspace {
	margin-bottom: 60px;
}
.button:hover, .link:hover, .button:focus, .link:focus {
	color: #333;
	cursor: pointer;
}

.button:disabled {
	opacity: .2;
	cursor: not-allowed;
}
`;
