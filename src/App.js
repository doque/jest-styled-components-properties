import React, { Component } from "react";
import styled from "styled-components";

const Parent = styled.div`
  border-color: red;
  background: yellow;
`;

const Child = styled(Parent)`
  background: green;
`;

class App extends Component {
  render() {
    return (
      <Parent>
        <Child />
      </Parent>
    );
  }
}

export { Parent, Child };

export default App;
