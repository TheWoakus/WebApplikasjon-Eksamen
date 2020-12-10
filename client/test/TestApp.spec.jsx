/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './TestApp';

it('should contain the text "Hello World"', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toContain('Hello World');
});
