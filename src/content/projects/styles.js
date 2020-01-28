import styled from 'styled-components';

const Container = styled.div``;

const Link = styled.a`
  text-decoration: underline;
`;

const Header = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const HeroImage = styled.img`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Subheader = styled.h3`
  font-weight: bold;
  font-size: 1.25em;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const Content = styled.p`
  font-size: 0.75em;
`;

const FooterLine = styled.hr`
  margin-top: 2em;
`;

const FooterList = styled.ul`
  margin-bottom: 1em;
  font-size: 0.75em;
`;

const FooterItem = styled.li``;

export {
  Container,
  Link,
  Header,
  HeroImage,
  Subheader,
  Content,
  FooterLine,
  FooterList,
  FooterItem,
};
