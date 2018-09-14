import React, { Component } from 'react';
import './App.scss';
import { Container, Row, Col } from './my-grid/my-grid';

class App extends Component {
  render() {
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
      <div className='App'>
        <h4 className='title'>An example of my grid</h4>
        <Container fluid>
          <Row gutters='none'>
            {items.map(item => (
              <Col xs={6} sm={4} md={3} lg={2} xl={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
          </Row>
          <Row gutters='none'>
            <Col xsHidden mdShown md={24}>
              <div className={'item item-4'}></div>
            </Col>
          </Row>
          <Row gutters='none' >
            <Col xsOffset={3} xs={3}>
              <div className={'item item-1'}></div>
            </Col>
            <Col xs={12} gutterSelf='md'>
              <div className={'item item-2'}></div>
            </Col>
            <Col xs={3}>
              <div className={'item item-3'}></div>
            </Col>
          </Row>
          <Row gutters='none'>
            {items.slice(0,8).map(item => (
              <Col xs={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
            {items.slice(0,8).map(item => (
              <Col xs={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
            {items.slice(0,8).map(item => (
              <Col xs={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
          </Row>
          <Row gutters='sm' mdGutters='md'>
            {items.map(item => (
              <Col xs={6} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
          </Row>
          <Row gutters='none'>
            <Col xs={1}>
              <div className={`item item-1`}></div>
            </Col>
            {items.slice(1,12).map(item => (
              <Col xsOffset={1} xs={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
            {items.slice(0,12).map(item => (
              <Col xsOffset={1} xs={1} key={item}>
                <div className={`item item-${item}`}></div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
