import React, { Component } from "react";
import { Button, Modal, ModalBody, Row, Card, CardHeader } from "reactstrap";
import Api from "../utils/Api";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  addThisBook = (
    { id },
    { author },
    { title },
    { subtitle },
    { desc },
    { image },
    { link }
  ) => {
    Api.saveBook({
      id,
      author,
      title,
      subtitle,
      desc,
      image,
      link,
      isSaved: true,
    })
      .then(res => console.log(res.data))
      .then(
        this.setState(prevState => ({
          modal: !prevState.modal,
        }))
      )
      .catch(err => alert(err));
  };

  render() {
    const { id, author, title, subtitle, desc, image, link } = this.props;
    return (
      <Card id={id} className="mt-3">
        <CardHeader>
          <h2>{title}</h2>

          <h6>{subtitle}</h6>
        </CardHeader>
        <Row>
          <div className="col-2 col-sm-4 text-center">
            {" "}
            <img
              src={image}
              className="mt-3 ml-2"
              alt={subtitle}
              style={{ maxWidth: "50%", border: "solid lightgrey .2em" }}
            />
            <Row className="text-center mt-2">
              <button
                className="btn btn-sm btn-info mx-auto mb-2"
                onClick={() =>
                  this.addThisBook(
                    { id },
                    { author },
                    { title },
                    { subtitle },
                    { desc },
                    { image },
                    { link }
                  )
                }
              >
                Save
              </button>
            </Row>
          </div>
          <div className="col col-sm-8 mt-2 text-left">
            <h6>
              {" "}
              <strong>Author:</strong> &nbsp;{author}&nbsp;
            </h6>
            <p>{desc}</p>
            <h6>
              <a className="btn btn-warning mt-2" href={link}>
                Preview Here
              </a>
            </h6>
            <div>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                {/* <ModalHeader toggle={this.toggle}>Saved</ModalHeader> */}
                <Button
                  className="ml-auto"
                  color="danger"
                  onClick={this.toggle}
                >
                  x
                </Button>
                <ModalBody>Your Book Has been Saved!</ModalBody>
                {/* <ModalFooter /> */}
              </Modal>
            </div>
          </div>
        </Row>
      </Card>
    );
  }
}

export default Results;
