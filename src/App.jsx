import Container from 'react-bootstrap/Container';
import Header from './components/layout/Header';
import UserItem from './components/users/UserItem';
import Row from 'react-bootstrap/Row';
import logo from './components/layout/github-mark-white.png';

import { users } from './components/users/users';
import Search from './components/layout/Search';

function App() {
  return (
    <>
      <Header navLogo={logo} navTitle="Github Users" />
      <Container className="mt-3">
        <Row>
          <Search />
        </Row>
        <Row>
          {users.map(element => (
            <UserItem user={element} key={element.id}>
              <span className="badge rounded-pill text-bg-danger">
                {element.id}
              </span>
            </UserItem>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
