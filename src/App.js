import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  width: ${ props => props.theme.dimensions.large };
  color: ${ props => props.theme.colors.one };
  background-color: ${props => props.theme.colors.two };
`;

const Child = styled(Parent)`
  color: ${props => props.theme.colors.three };
`;

export { Parent, Child };
