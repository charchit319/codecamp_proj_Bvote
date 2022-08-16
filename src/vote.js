import Logo from "./government.png";
import namaste from "./hands(1).png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./vote.css";
import { NavLink } from "react-router-dom";
function Vote() {
  return (
    <div className="main_div">
      <div className="child_div1">
        <header className="App-header">
          <div className="LOGO">
            <div className="logo1">
            <NavLink to="/" replace> 
            <Button variant="outline-danger">LOGOUT</Button>
            </NavLink>
            </div>
            <div className="form_control">
              <p className="a" align="center">
                GOVERMENT OF #####
              </p>
              <br />
              <p className="b" align="center">
                ELECTION COMMISSION
              </p>
            </div>
            <div className="logo2">
              <img
                className="img"
                src={Logo}
                alt="government"
                width="200px"
                height="200px"
              />
            </div>
          </div>
        </header>
      </div>
      <div className="child_div2">
        <div className="for_line">
          <hr className="new1"></hr>
        </div>
        <div className="mainComponent">
          <div className="namaste">
            <img
              className="vote"
              src={namaste}
              alt="namaste"
              width="150px"
              height="150px"
            />
          </div>
          <div className="search">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="card">
              <div className="card-header">Select Party Name</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">(1001)UML</li>
                <li className="list-group-item">(1002)Congress</li>
                <li className="list-group-item">(1003)third-party</li>
              </ul>
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder=""
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">choose the respective party number</Button>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;