import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App, { Parent, Child } from './App';


test('Parent', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Child)).toHaveStyleRule('top', '100px');
})
