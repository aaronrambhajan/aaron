import React from 'react';
import ProjectCard from '../components/ProjectCard';
import procPhoneFull from '../images/ADHD/phone.png';

export default class WorkPage extends React.Component {
  render = () => {
    return (
      <div class="work">
        <ProjectCard
          href="/projects/ADHD"
          text={{
            title: (
              <h1
                class="intro-hed"
                style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
              >
                ADHD <code>&</code> Time Management
              </h1>
            ),
            description: (
              <p>
                Being a student with ADHD is hard, but not in the way we
                expect—most people think it’s about getting things done. We
                learned that it’s really about{' '}
                <code>
                  helping them live their lives, how{' '}
                  <span style={{ fontWeight: 600 }}>they</span> want to
                </code>
                .
              </p>
            ),
          }}
          image={{
            img: procPhoneFull,
            alt: 'full-app',
            caption: (
              <div>
                <strong>
                  We created <code>10Four </code> to help them do that.
                </strong>
              </div>
            ),
          }}
          labels={['User Research', 'UX/UI Design']}
        />

        <hr />

        <p>
          You can download my resume{' '}
          <a href="https://www.dropbox.com/s/600rbuu5ydpo8lk/Aaron-Rambhajan-Resume.pdf?dl=0">
            here
          </a>
          .
        </p>
      </div>
    );
  };
}
