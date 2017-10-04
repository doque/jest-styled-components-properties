import React from "react";
import { mount } from "enzyme";
import styled, { ThemeProvider } from "styled-components";

const myTheme = {
  colors: {
    one: "#fff",
    two: "#0f0",
    three: "#f0f",
    four: "#00f"
  },
  dimensions: {
    small: "1px",
    large: "10px"
  }
};

const Parent = styled.div`
  border-color: ${props =>
    props.one ? props.theme.colors.one : props.theme.colors.two};
  background-color: ${props => props.theme.colors.three };
  width: ${props => props.theme.dimensions.small };
`;

const Child = styled(Parent)`
  width: ${props => props.theme.dimensions.large };
`;

describe("Theme is applied correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={myTheme}>
        <Parent one>
          <Child />
        </Parent>
      </ThemeProvider>
    );
  });

  test("Parent has correct border color", () => {
    expect(wrapper.find(Parent)).toHaveStyleRule(
      "border-color",
      myTheme.colors.one
    );
  });

  // This test breaks, border-color property not found
  test("Child has correct inherited border color", () => {
    expect(wrapper.find(Child)).toHaveStyleRule("border-color", myTheme.colors.one);
  })

  // This test breaks, background-color property not found 
  test("Child has correct background color", () => {
    expect(wrapper.find(Child)).toHaveStyleRule("background-color", myTheme.colors.four);
  })

  test("Parent has correct width", () => {
    expect(wrapper.find(Parent)).toHaveStyleRule("width", myTheme.dimensions.small);
  })

  // Child overrides width from Parent
  test("Child has correct width", () => {
    expect(wrapper.find(Child)).toHaveStyleRule("width", myTheme.dimensions.large);
  })

});
