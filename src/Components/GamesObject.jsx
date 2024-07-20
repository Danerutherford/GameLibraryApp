import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Game = (props) => {
  return (
    <Form>
      <Container>
        <Image src='' thumbnail />
      </Container>
      <Form.Group>
        <Form.Control type='text' placeholder='Game Title' disabled />
        <Stack direction='horizontal'>
          <Badge pill bg='Primary' PS4 />
        </Stack>
        <Form.Control type='date' placeholder='Date of Release' disabled />
      </Form.Group>
    </Form>
  );
};

export default Game;
