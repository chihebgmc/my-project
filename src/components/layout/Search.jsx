import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Search = () => {
  //   const handleClick = event => alert('Bonjour');
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(formData.get('search'));
    alert(formData.get('search'));
  };
  return (
    <Col md={{ span: 6, offset: 3 }} className="mb-5">
      <Form
        className="d-flex align-items-start gap-3"
        style={{ width: '100%' }}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ flex: '5' }}
        >
          <Form.Control
            type="text"
            name="search"
            placeholder="Search fo user"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ flex: '1' }}
          //   onClick={handleClick}
        >
          Search
        </Button>
      </Form>
    </Col>
  );
};

export default Search;
