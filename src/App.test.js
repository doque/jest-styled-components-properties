import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';

const colors = {
  readonly: 'lightgray'
};

const readonlyStyles = `
border-radius: 3px;

&:disabled,
&:read-only {
  background-color: ${colors.readonly};
}
`;

const InputField = styled.input`
  ${readonlyStyles};
  height: 20px;
`;

test('renders correctly with readOnly prop', () => {
  const wrapper = shallow(<InputField readOnly />);
  expect(wrapper).toHaveStyleRule('background-color', colors.readonly);
});

test('renders correct border', () => {
  const wrapper = shallow(<InputField readOnly />);
  expect(wrapper).toHaveStyleRule('border-radius', '3px');
});
