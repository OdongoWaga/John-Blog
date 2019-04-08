import React from "react"
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap"

const Sidebar = () => {
  ;<div>
    <Card>
      <CardTitle className="text-center text-uppercase mb-3">
        Newsletter
      </CardTitle>
      <Form className="text-center">
        <FormGroup>
          <Input type="email" name="email" placeholder="Your email" />
        </FormGroup>
        <Button className="btn btn-outline-success text-uppercase">
          Subscribe
        </Button>
      </Form>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">Advert</CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
  </div>
}

export default Sidebar
