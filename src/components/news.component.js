import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import banner from './maxresdefault.jpg';
import regions from './Lviv_regions.svg';


export default class News extends Component {

  render() {
    return (
      
      <div className="App">
        <div className="App-body-news">
        {/* <div className="sidebar">
        <div className="sidetext">
          <p className="sidetext-title"> Всього заражень:</p>
          <p className="sidetext-number"> 302.339 <sup className='color-bad'>(+557)</sup></p>
          <p className="sidetext-title"> Всього вилікувалось:</p>
          <p className="sidetext-number"> 239.016 <sup className='color-good'>(+2 049)</sup></p>
          <p className="sidetext-title"> Всього померло:</p>
          <p className="sidetext-number"> 6.560 <sup className='color-bad'>(+15)</sup></p>
          <p className="sidetext-title"> Всього вакциновано:</p>
          <p className="sidetext-number"> 1.041.068 <sup className='color-good'>(+1 334)</sup></p>
        </div>

        </div>
        <div className="App-city">

        <img src={regions} className="App-logo" alt="logo" />

        </div>
        <div></div> */}
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>
            <div className="card-temp">
            <Card border="primary" style={{ width: '20rem', fontsize: '1.5rem'}}>
                <Card.Header>Останні новини</Card.Header>
                <Card.Body>
                <Card.Title>На Львівщині продовжується вакцинальна кампанія проти Covid-19.</Card.Title>
                <Card.Text>
                Центри масової вакцинації населення зараз не працюють,
                проте провакцинуватися можна у пунктах щеплення,
                </Card.Text>
                <Button variant="primary">Більше про новину</Button>
                </Card.Body>
            </Card>         
            </div>

        </div>
        </div>
  );
  }
}