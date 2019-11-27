import React from 'react';
import styled from 'styled-components';
import { MagicListItem } from '../components/MagicListItem';
import { Subheader } from '../Landing';

const Container = styled.div`
  margin-bottom: 4em;
`;

export default class Music extends React.Component {
  state: {
    displayItem1: Boolean,
    displayItem2: Boolean,
    displayItem3: Boolean,
    displayItem4: Boolean,
    displayItem5: Boolean,
    displayItem6: Boolean,
  };

  state = {
    displayItem1: false,
    displayItem2: false,
    displayItem3: false,
    displayItem4: false,
    displayItem5: false,
    displayItem6: false,
  };

  render = () => {
    if (!this.props.isLanding) {
      return (
        <Container>
          <Subheader>Music</Subheader>
          <ul>
            <MagicListItem
              link="https://open.spotify.com/album/0sbxn9qTMpw6kWriqDyqif"
              title="For You – Clay Vega"
              description="Made with Irwan Poerba and Kyle Nethersole."
              headers="production, writing | 2019"
              toggle={() => {
                this.setState({ displayItem1: !this.state.displayItem1 });
              }}
              isDroppedDown={this.state.displayItem1}
            />
            <MagicListItem
              link="https://soundcloud.com/thisisriamusic/some-days"
              title="Some Days – Ria"
              description="Made with Kyle Nethersole and Ria Prakash."
              headers="production, writing | 2018"
              toggle={() => {
                this.setState({ displayItem2: !this.state.displayItem2 });
              }}
              isDroppedDown={this.state.displayItem2}
            />
            <MagicListItem
              link="https://soundcloud.com/thisisriamusic/planes"
              title="Planes – Ria"
              description="Made with Kyle Nethersole and Ria Prakash."
              headers="production, writing | 2018"
              toggle={() => {
                this.setState({ displayItem3: !this.state.displayItem3 });
              }}
              isDroppedDown={this.state.displayItem3}
            />
            <MagicListItem
              link="https://www.youtube.com/watch?v=aQk-j1IbGhw"
              title="Roses – Loose Ends"
              description="Made with Irwan Poerba."
              headers="production, writing | 2014"
              toggle={() => {
                this.setState({ displayItem4: !this.state.displayItem4 });
              }}
              isDroppedDown={this.state.displayItem4}
            />

            <li>
              <a
                href="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                ...
              </a>
            </li>
          </ul>
        </Container>
      );
    }
    return (
      <Container>
        <Subheader>Music</Subheader>
        <ul>
          <MagicListItem
            link="https://open.spotify.com/album/0sbxn9qTMpw6kWriqDyqif"
            title="For You – Clay Vega"
            description="Made with Irwan Poerba and Kyle Nethersole."
            headers="production, writing | 2019"
            toggle={() => {
              this.setState({ displayItem1: !this.state.displayItem1 });
            }}
            isDroppedDown={this.state.displayItem1}
          />
          <MagicListItem
            link="https://soundcloud.com/thisisriamusic/some-days"
            title="Some Days – Ria"
            description="Made with Kyle Nethersole and Ria Prakash."
            headers="production, writing | 2018"
            toggle={() => {
              this.setState({ displayItem2: !this.state.displayItem2 });
            }}
            isDroppedDown={this.state.displayItem2}
          />
          <MagicListItem
            link="https://soundcloud.com/thisisriamusic/planes"
            title="Planes – Ria"
            description="Made with Kyle Nethersole and Ria Prakash."
            headers="production, writing | 2018"
            toggle={() => {
              this.setState({ displayItem3: !this.state.displayItem3 });
            }}
            isDroppedDown={this.state.displayItem3}
          />

          <li>
            <a
              href="/music"
              style={{
                textDecoration: 'none',
              }}
            >
              ...
            </a>
          </li>
        </ul>
      </Container>
    );
  };
}
