import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import needsAccountability from '../images/ADHD/needs-accountability.svg';
import needsAwareness from '../images/ADHD/needs-awareness.svg';
import needsFocus from '../images/ADHD/needs-focus.svg';
import needsGuilt from '../images/ADHD/needs-guilt.svg';

const items = [
  {
    src: needsAccountability,
    altText: 'needs-accountability',
    caption: (
      <h3>
        Someone who can <strong>empathize </strong>
        with her and hold her accountable.
      </h3>
    ),
  },
  {
    src: needsAwareness,
    altText: 'needs-awareness',
    caption: (
      <h3>
        <strong>Notification systems</strong> built for her symptoms that keep
        her self-aware.
      </h3>
    ),
  },
];

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'purple',
              padding: 35,
              paddingRight: 70,
              paddingLeft: 70,
              borderRadius: 15,
              overflow: 'scroll',
            }}
          >
            <div>
              <img
                src={item.src}
                alt={item.altText}
                style={{ maxHeight: 200, width: 'auto' }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginLeft: 20,
                maxWidth: '50%',
                minWidth: '50%,',
              }}
            >
              <p style={{ color: 'white', fontSize: '0.9em' }}>
                {item.caption}
              </p>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        {/* <h1
          style={{
            fontSize: '1.2em',
            textAlign: 'center',
            color: 'purple',
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Natalia needs...
        </h1> */}
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}
