import Container from 'react-bootstrap/Container';
import Header from './components/layout/Header';
import Row from 'react-bootstrap/Row';
import logo from './components/layout/github-mark-white.png';
import Search from './components/layout/Search';
import UserList from './components/users/UserList';

function App() {
  return (
    <>
      <Header navLogo={logo} navTitle="Github Users" />
      <Container className="mt-3">
        <Row>
          <Search />
        </Row>
        <Row>
          <UserList />
        </Row>
      </Container>
    </>
  );
}

export default App;
