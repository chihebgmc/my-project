import Container from 'react-bootstrap/Container';
import Header from './components/layout/Header';
import UserItem from './components/users/UserItem';
import Row from 'react-bootstrap/Row';
import logo from './components/layout/github-mark-white.png';

import { users } from './components/users/users';

function App() {
  return (
    <>
      <Header navLogo={logo} navTitle="Github Users" />
      <Container className="mt-3">
        <Row>
          {users.map(element => (
            <UserItem user={element} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
