import React from 'react';
import Youtube from 'react-youtube';

export default class MusicPage extends React.Component {
  render = () => {
    return (
      <div>
        <iframe
          title="ria-1-aaron"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480132246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div style={{ marginBottom: 20 }} />
        <iframe
          title="ria-2-aaron"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415582593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div style={{ marginBottom: 20 }} />
        <iframe
          title="clay-vega-paula"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556467972%3Fsecret_token%3Ds-2n1rK&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div style={{ marginBottom: 20 }} />
        <Youtube
          videoId="aQk-j1IbGhw"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
        <div style={{ marginBottom: 20 }} />
        <Youtube
          videoId="xRcd1gHttiM"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
        <div style={{ marginBottom: 20 }} />
        <Youtube
          videoId="_LGncJZwKuU"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
        <div style={{ marginBottom: 20 }} />
        <Youtube
          videoId="oN6lyzFzi0E"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
      </div>
    );
  };
}
