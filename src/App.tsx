import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyles from './globalStyles';
import styled from 'styled-components';
import Home from './pages/Home';
import Registration from './pages/Registration';
import { COLORS } from "./constant";

const Wrapper = styled.div`
  background-color: ${COLORS.ashWhite};
`;

function App(): JSX.Element {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        <GlobalStyles />
      </Wrapper>
    </Router>
  );
}

export default App;
