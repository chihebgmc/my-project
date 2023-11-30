import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const UserItem = props => {
  console.log(props);
  return (
    <Col md={4} sm={6} className="mb-3">
      <Card>
        <Card.Img variant="top" src={props.user.avatar_url} />
        <Card.Body>
          <Card.Title>
            {props.children} {props.user.login}
          </Card.Title>

          <Button variant="primary" href={props.user.html_url} target="_blank">
            More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default UserItem;
