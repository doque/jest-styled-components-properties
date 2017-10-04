import React from "react";
import { mount } from "enzyme";
import styled, { ThemeProvider } from "styled-components";

const myTheme = {
  colors: {
    one: "#fff",
    two: "#0f0",
    three: "#f0f",
    four: "#00f"
  }
};

const Parent = styled.div`
  border-color: ${props =>
    props.one ? props.theme.colors.one : props.theme.colors.two};
  background-color: ${props => props.theme.colors.three };
`;

// Change Child to Parent.extend`` to make tests pass
const Child = styled(Parent)`
  background-color: ${props => props.theme.colors.four };
`;

describe("Theme is applied correctly", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={myTheme}>
        <div>
          <Parent one />
          <Child one/>
        </div>
      </ThemeProvider>
    );
  });

  test("Parent has the correct border-color", () => {
    expect(wrapper.find(Parent)).toHaveStyleRule(
      "border-color",
      myTheme.colors.one
    );
  });

  test("Child has the correct background-color", () => {
    expect(wrapper.find(Child)).toHaveStyleRule("background-color", myTheme.colors.four);
  })

  // This test breaks, border-color property not found in Child
  test("Child has the correct inherited border-color", () => {
    expect(wrapper.find(Child)).toHaveStyleRule("border-color", myTheme.colors.one);
  })

});
