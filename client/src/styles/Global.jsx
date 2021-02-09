import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
	--global-font: 'Open Sans';
	--global-font-color: #333;
	--global-borders: #818181;
	--global-link-font-color: #2b5197;
	--global-link-font-hover-color: #fff;
	--global-link-background-color: #fff;
	--global-link-hover-background-color: #2b5197;
}

* {
	box-sizing: border-box;
	color: var(--global-font-color);
}

body {
	margin: 0;
	padding: 0;
}

html {
	font-size: 14px;
}

body, .button, .input {
	font-family: var(---global-font);
}

#page_wrapper {
	max-width: 80%;
	padding-bottom: 60px;
	margin: 60px auto;
}

#page_content {
	padding-bottom: 60px;
}

.footer {
	padding-top: 10px;
}
.mail, .phone {
	margin: 14px 0;
}
a {
	color: var(--global-link-font-color);
	text-decoration: none;
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
	border: 1px solid var(--global-borders);
	box-sizing: border-box;
	font-size: 16px;
	margin-bottom: 20px;
}

select {
	padding: 10px 10px;
	width: calc(100% - 72px);
	border-radius: 5px;
	border: 1px solid var(--global-borders);
	box-sizing: border-box;
	font-size: 16px;
	margin-bottom: 20px;
}
label, input {
	display: block;
}

span {
	display: inline-block;
	color: var(--global-link-font-hover-color);
}

.button, .link {
	color: var(--global-link-font-color);
	background-color: var(--global-link-background-color); 
	border-radius: 5px;
	padding: 4px 20px;
	border: 1px solid var(--global-borders);
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	line-height: 40px;
	height: 50px;
}

.button:hover, .link:hover {
	color: var(--global-link-font-hover-color);
	background-color: var(--global-link-hover-background-color);
	cursor: pointer;
}
.block {
	display: block;
}

.centered {
	display: block;
	margin: 0 auto;
}

.big {
	width: 300px;
}

.space {
	margin-left: 10px;
}

#register {
text-align: center;
}

#register > p {
	margin: 0;
	padding-bottom: 20px;
}
#register > p::before {
	content: "- ";
}
#register > p::after {
	content: " -";
}

.showPassword {
	display: inline-block;
}
`;
