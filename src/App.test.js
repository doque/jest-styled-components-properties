import React from "react";
import { mount } from "enzyme";
import styled, { ThemeProvider } from "styled-components";

const myTheme = {
  colors: {
    one: "#fff",
    two: "#0f0",
    three: "#f0f"
  },
  dimensions: {
    large: "10px"
  }
};

const Parent = styled.div`
  border-color: ${props => props.one ? props.theme.colors.one : props.theme.colors.two};
`;

const Child = styled(Parent)``;

test("Parent", () => {
  const wrapper = mount(
    <ThemeProvider theme={myTheme}>
      <Parent>
        <Child />
      </Parent>
    </ThemeProvider>
  );
  expect(wrapper.find(Parent)).toHaveStyleRule(
    "border-color",
    myTheme.colors.two
  );
});
