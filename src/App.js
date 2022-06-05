import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import regions from "./Lviv_regions.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./components/create-student.component";
import LoginStudent from "./components/login-student.component";
import LoginUser from "./components/login-user.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import UserPage from "./components/user-page.component";
import Homepage from "./components/homepage.component";
import News from "./components/news.component";
import LvivMap from "./components/lvivmap.component";
import UseOfEnglish from "./components/use-of-english.component";
import Reading from "./components/reading.component";
import Listening from "./components/listening.component";
import Grammar from "./components/grammar.component";
import Vocabulary from "./components/vocabulary.component";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  const [userName, setUserName] = useState(user?.name);
  console.log("username", userName);

  console.log("user", user);

  const onLogout = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="App">
      {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}

      <Router>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/homepage"} className="nav-link">
                  Home
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to={"/news"} className="nav-link">
                  Новини
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to={"/use-of-english"} className="nav-link">
                  Захворюваність
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to={"/lvivmap"} className="nav-link">
                  Карта області
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to={"/listening"} className="nav-link">
                  Вакцинація
                </Link>
              </Navbar.Brand>
              {/* <Navbar.Brand>
                <Link to={'/login-user'} className="nav-link">
                  Авторизація
                </Link>
              </Navbar.Brand> */}
              <Navbar.Brand>
                <Link to={"/grammar"} className="nav-link">
                  Актуальна інформація
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end" />
              <Nav>
                {userName == "Admin" && (
                  <Nav>
                    <Link to={"/student-list"} className="nav-link">
                      Адмін панель
                    </Link>
                  </Nav>
                )}
              </Nav>
              {userName == "Admin" && (
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Реєстрація
                  </Link>
                </Nav>
              )}
              <Nav className="justify-content-end" />
              {userName == "Admin" && (
                <Nav>
                  <Link to={"/login-student"} className="nav-link">
                    Авторизація
                  </Link>
                </Nav>
              )}
              <Nav className="justify-content-end" />
              <Nav>
                <Nav>
                  {userName ? (
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={userName}
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="/user-page">
                        Профіль
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/homepage"
                        onClick={() => onLogout()}
                      >
                        Вийти
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Link to={"/login-student"} className="nav-link">
                      COVID-19
                    </Link>
                  )}
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  {/* <Route
                    exact
                    path="/homepage"
                    element={(props) => <Homepage {...props} />}
                  /> */}

                  <Route
                    path="/homepage"
                    element={<Homepage authed={true} />}
                  />

                  <Route path="/news" element={<News authed={true} />} />

                  <Route path="/lvivmap" element={<LvivMap authed={true} />} />

                  <Route
                    path="/login-user"
                    element={<LoginUser authed={true} />}
                  />

                  <Route
                    exact
                    path="/use-of-english"
                    component={(props) => <UseOfEnglish {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/login-student"
                    component={(props) => (
                      <LoginStudent {...props} onLogin={setUserName} />
                    )}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/user-page"
                    component={(props) => <UserPage {...props} />}
                  />
                  <Route
                    exact
                    path="/reading"
                    component={(props) => <Reading {...props} />}
                  />
                  <Route
                    exact
                    path="/vocabulary"
                    component={(props) => <Vocabulary {...props} />}
                  />
                  <Route
                    exact
                    path="/listening"
                    component={(props) => <Listening {...props} />}
                  />
                  <Route
                    exact
                    path="/grammar"
                    component={(props) => <Grammar {...props} />}
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
