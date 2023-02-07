import React, { Component } from 'react';
import { Gallery } from './Gallery';
import { Button } from './Button/Button';

export class App extends Component {

  state = {
    pixs: [{name:1, id:1}, {name:2, id:2}],
    isOpen: false,
  };
  
  cars = [
    {
      id: 1,
      name: 'audi'
    },
    {
      id: 2,
      name: 'bmw'
    },
    {
      id: 3,
      name: 'ford'
    },
  ]

  toggleGallery = () => {
    this.setState(({isOpen}) => ({isOpen: !isOpen}));
  };

  showActiveCar = (id) => {
    console.log(`Active car is ${id}`);
  }

  render() 
  {
    const {pixs, isOpen } = this.state;
    return(
      <>
        <Button onClick={this.toggleGallery}>Toggle Gallery</Button>
        {isOpen && <Gallery pixs={pixs} />}
        {this.cars.map((car, id) => <Button key={id} id={car.id} onClick={this.showActiveCar} children={car.name}/>)}
      </>
    )
  };
};


