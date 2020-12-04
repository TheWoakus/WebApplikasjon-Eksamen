import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background-color: #dbdbdb;
	height: 300px;
`;

const Title = styled.h1`
	font-size: 30px;
	text-align: center;
	line-height: 280px;
	margin: 5px;
`;

class PageHeader extends React.Component {
  render() {
    return (
		<Header>
			<Title>{this.props.title}</Title>
		</Header>
    )
  }
}

export default PageHeader;