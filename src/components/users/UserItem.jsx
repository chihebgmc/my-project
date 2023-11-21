import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const user = {
  id: '1',
  login: 'mojombo',
  avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  html_url: 'https://github.com/mojombo',
};

const UserItem = () => (
  <Col md={4} sm={6}>
    <Card>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Button variant="primary" href={user.html_url} target="_blank">
          More
        </Button>
      </Card.Body>
    </Card>
  </Col>
);
export default UserItem;
