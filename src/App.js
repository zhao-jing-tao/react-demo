import { Button } from "antd";
import styled from "styled-components";
const StyledDiv = styled.div`
color: red;
font-size: 20px;
`
function App() {
  return (
    <div className="App">
      React-app-template
      <h1>测试demohaha </h1>
      <Button>测试antd组件</Button>
      <StyledDiv>样式测试</StyledDiv>
    </div>
  );
}

export default App;
