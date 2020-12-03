import React from 'react';
import { Heading } from '@chakra-ui/core';

class Title extends React.Component {
  render() {
    return (
      <Heading as="h2" size="lg">
        {this.props.title}
      </Heading>
    )
  }
}

export default Title;