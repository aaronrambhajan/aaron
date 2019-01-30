import React from 'react';
import Youtube from 'react-youtube';
import Divider from '../components/Divider';

export default class MusicPage extends React.Component {
  render = () => {
    return (
      <div>
        <p style={{ fontSize: '1.35em', color: 'black' }}>
          <strong>Making music</strong> is the foundation of everything I do.
          Being a producer taught me that empathy is about understanding people{' '}
          <u>as they understand themselves</u>. I learned to understand design
          through music—that the best design connects us with the world around
          us.
        </p>
        <Divider />
        {/* <iframe
          title="ria-1-aaron"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480132246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div style={{ marginBottom: 20 }} /> */}
        <iframe
          title="ria-2-aaron"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415582593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <Divider />
        <iframe
          title="clay-vega-paula"
          width="100%"
          height="150"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556467972%3Fsecret_token%3Ds-2n1rK&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <Divider />
        <Youtube
          videoId="aQk-j1IbGhw"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
        <Divider />
        <Youtube
          videoId="_LGncJZwKuU"
          opts={{
            height: '200',
            width: '100%',
          }}
        />
      </div>
    );
  };
}
