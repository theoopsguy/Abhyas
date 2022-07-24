import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function CreateQ(props) {
  const questionValues = {
    questionStatement: "",
    option0: "",
    option1: "",
    option2: "",
    option3: "",
  };

  function onChangeHandeler(e) {
    questionValues[e.target.attributes.handeler.value] = e.target.value;
    console.log(questionValues);
  }

  function valueHandler(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }

  function answerIdx() {
    if (document.querySelector("#option1").checked) return 0;
    if (document.querySelector("#option2").checked) return 1;
    if (document.querySelector("#option3").checked) return 2;
    return 3;
  }
  return (
    <Form>
      <Form.Group as={Col} className="mb-3" controlId="formHorizontalQ">
        <Form.Label column sm={2}>
          Question:
        </Form.Label>
        <Col sm={12}>
          <Form.Control
            type="text"
            placeholder="Question Statement"
            handeler="questionStatement"
            onChange={onChangeHandeler}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formHorizontalOption">
        <Form.Label column sm={2}>
          Options:
        </Form.Label>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option1"
            className="optionBox"
            required
          />
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Option 1"
              required
              handeler="option0"
              onChange={onChangeHandeler}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option2"
            className="optionBox"
          />
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Option 2"
              handeler="option1"
              onChange={onChangeHandeler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option3"
            className="optionBox"
          />
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Option 3"
              handeler="option2"
              onChange={onChangeHandeler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 optionForm">
          <Form.Check
            type="radio"
            name="options"
            id="option4"
            className="optionBox"
          />
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Option 4"
              handeler="option3"
              onChange={onChangeHandeler}
              required
            />
          </Col>
        </Form.Group>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <div className="addQbutt">
            <Button
              type="button"
              onClick={async () => {
                const postJSON = {
                  unitId: props.unit,
                  options: [
                    questionValues.option0,
                    questionValues.option1,
                    questionValues.option2,
                    questionValues.option3,
                  ],
                  questionStatement: questionValues.questionStatement,
                  answer: answerIdx(),
                };
                console.log(postJSON, "postjson");
                try {
                  console.log(
                    await axios.post(
                      "/api/question/",
                      postJSON
                    )
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CreateQ;
