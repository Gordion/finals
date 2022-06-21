import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import banner from "./maxresdefault.jpg";
import regions from "./Lviv_regions.svg";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// const data = [
//   {
//     timestamp: "17.06.2022",
//     title: "На Львівщині продовжується вакцинальна кампанія проти Covid-19",
//     text: "Центри масової вакцинації населення зараз не працюють, проте провакцинуватися можна у пунктах щеплення,",
//   },
//   {
//     timestamp: "17.06.2022",
//     title: "На Львівщині продовжується вакцинальна кампанія проти Covid-19",
//     text: "Центри масової вакцинації населення зараз не працюють, проте провакцинуватися можна у пунктах щеплення,",
//   },
//   {
//     timestamp: "17.06.2022",
//     title: "На Львівщині продовжується вакцинальна кампанія проти Covid-19",
//     text: "Центри масової вакцинації населення зараз не працюють, проте провакцинуватися можна у пунктах щеплення,",
//   },
// ];

export default class Helpful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsCollection: [],
    };
  }
  //   componentDidMount() {
  //     axios
  //       .get("http://localhost:4000/news")
  //       .then((res) => {
  //         this.setState({ newsCollection: res.data });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //   render() {
  //     const settings = {
  //       dots: true,
  //       fade: true,
  //       infinite: true,
  //       speed: 500,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     };

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        {/* <div className="App-body-news">
          {this.state.newsCollection.map((item) => (
            <div className="card-temp">
              <Card
                classname="card-news"
                border="primary"
                className={{
                  display: "flex",
                  flex: 1,
                  width: "20rem",
                }}
              >
                <Card.Header className="news-timestamp">
                  {item.timestamp}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="news-title">{item.name}</Card.Title>
                  <Card.Text className="news-text">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div> */}

        <div>
          {/* <h2>Simple slider</h2> */}
          <Slider className="slider-new" {...settings}>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/1.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/2.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/3.png"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/4.png"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/5.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/6.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/7.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/8.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/9.jpg"} />
            </div>
            <div className="slider-div">
              <img className="slider-img" src={"./CovidPosters/10.jpg"} />
            </div>
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      </div>
    );
  }
}
