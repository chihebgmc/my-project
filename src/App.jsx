import Container from 'react-bootstrap/Container';
import Header from './components/layout/Header';
import UserItem from './components/users/UserItem';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <UserItem />
          <UserItem />
          <UserItem />
        </Row>
      </Container>
    </>
  );
}

export default App;
