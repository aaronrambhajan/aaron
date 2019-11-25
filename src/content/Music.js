import React from 'react';
import { MagicListItem } from '../components/MagicListItem';
import { Subheader } from '../Landing';

export default class Music extends React.Component {
  state: {
    songOneDrop: boolean,
    songTwoDrop: boolean,
    songThreeDrop: boolean,
    songFourDrop: boolean,
  };

  state = {
    songOneDrop: false,
    songTwoDrop: false,
    songThreeDrop: false,
    songFourDrop: false,
  };

  render = () => {
    if (!this.props.isLanding) {
      return (
        <div style={{ marginBottom: '4em' }}>
          <Subheader>Music</Subheader>
          <ul>
            <MagicListItem
              link="https://open.spotify.com/album/0sbxn9qTMpw6kWriqDyqif"
              title="For You – Clay Vega (2019)"
              description="Made with Irwan Poerba and Kyle Nethersole."
              headers="production, writing | 2019"
              toggle={() => {
                this.setState({ songOneDrop: !this.state.songOneDrop });
              }}
              isDroppedDown={this.state.songOneDrop}
            />
            <MagicListItem
              link="https://soundcloud.com/thisisriamusic/some-days"
              title="Some Days – Ria (2018)"
              description="Made with Kyle Nethersole and Ria Prakash."
              headers="production, writing | 2018"
              toggle={() => {
                this.setState({ songTwoDrop: !this.state.songTwoDrop });
              }}
              isDroppedDown={this.state.songTwoDrop}
            />
            <MagicListItem
              link="https://soundcloud.com/thisisriamusic/planes"
              title="Planes – Ria (2018)"
              description="Made with Kyle Nethersole and Ria Prakash."
              headers="production, writing | 2018"
              toggle={() => {
                this.setState({ songThreeDrop: !this.state.songThreeDrop });
              }}
              isDroppedDown={this.state.songThreeDrop}
            />
            <MagicListItem
              link="https://www.youtube.com/watch?v=aQk-j1IbGhw"
              title="Roses – Loose Ends (2014)"
              description="Made with Irwan Poerba."
              headers="production, writing | 2014"
              toggle={() => {
                this.setState({ songFourDrop: !this.state.songFourDrop });
              }}
              isDroppedDown={this.state.songFourDrop}
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
        </div>
      );
    }
    return (
      <div style={{ marginBottom: '4em' }}>
        <Subheader>Music</Subheader>
        <ul>
          <MagicListItem
            link="https://open.spotify.com/album/0sbxn9qTMpw6kWriqDyqif"
            title="For You – Clay Vega"
            description="Made with Irwan Poerba and Kyle Nethersole."
            headers="production, writing | 2019"
            toggle={() => {
              this.setState({ songOneDrop: !this.state.songOneDrop });
            }}
            isDroppedDown={this.state.songOneDrop}
          />
          <MagicListItem
            link="https://soundcloud.com/thisisriamusic/some-days"
            title="Some Days – Ria"
            description="Made with Kyle Nethersole and Ria Prakash."
            headers="production, writing | 2018"
            toggle={() => {
              this.setState({ songTwoDrop: !this.state.songTwoDrop });
            }}
            isDroppedDown={this.state.songTwoDrop}
          />
          <MagicListItem
            link="https://soundcloud.com/thisisriamusic/planes"
            title="Planes – Ria"
            description="Made with Kyle Nethersole and Ria Prakash."
            headers="production, writing | 2018"
            toggle={() => {
              this.setState({ songThreeDrop: !this.state.songThreeDrop });
            }}
            isDroppedDown={this.state.songThreeDrop}
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
      </div>
    );
  };
}
