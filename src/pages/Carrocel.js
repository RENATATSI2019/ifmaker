import React from 'react';
import {Component} from 'react';
import Coverflow from 'react-coverflow';
import down from '../../src/img/download.jpg';
import down1 from '../../src/img/download1.jpg';
import down2 from '../../src/img/download2.jpg';


export default class Carrocel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }
  

  render() {
    const fn = () => {
      console.log('Album one');
    };
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img src={down} alt="slide" />
          </div>
          <img src={down1} alt="slide" />
          <img src={down2} alt="slide" />
          <img src={down} alt="slide" />
          <img src={down1} alt="slide" />
          <img src={down2} alt="slide" />
          <img src={down} alt="slide" />
        </Coverflow>
      </div>
    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};
