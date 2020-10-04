// import React from "react"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import * as keys from "../components/keys"
import * as movie from "../components/movie"
import Theme, { theme } from "../components/theme"
import bkg from "../images/bkg.jpg"

const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.color.white};
    font: ${props => props.theme.font.font};
    text-size-adjust: 100%;
    font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    overflow: hidden;
  }
`

const Link = styled.a`
  color: ${props => props.theme.color.white};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.gray200};
  }
`

const LinkExStyled = styled(Link)`
  /* */
`

class LinkEx extends Component {
  render() {
    return (
      <LinkExStyled
        href={this.props.href}
        target="_blank"
        rel="noopener noreferrer"
        {...this.props}
      >
        {this.props.children}
      </LinkExStyled>
    )
  }
}

const StoryTitle = styled.div`
  white-space: nowrap;
`

const StoryDash = styled.div`
  width: ${props => props.theme.size.tile};
  height: 2px;
  margin-left: -2px;
  background: ${props => props.theme.color.gray800};
`

const StorylineStyled = styled.div`
  /* */
`

const StoryStyled = styled.div`
  line-height: 1;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${props => props.offset};
  transform-origin: left;
  transform: rotate3d(0, 0, 1, -30deg);
  ${movie.animateStoryTitle(StoryTitle)}
  ${movie.animateStoryDash(StoryDash)}
`

const Story = ({ children, href, offset }) => {
  return (
    <StoryStyled offset={offset}>
      <StoryDash />
      <StoryTitle>
        <StoryLink href={href}>{children}</StoryLink>
      </StoryTitle>
    </StoryStyled>
  )
}

const StoryLink = styled(LinkEx)`
  padding: ${props => props.theme.size.tileXXS}
    ${props => props.theme.size.tileXS};
  border: ${props => `2px solid ${props.theme.color.gray800}`};
  border-radius: ${props => props.theme.size.tile};
  &:hover {
    border-color: ${props => props.theme.color.white};
  }
`

const Storyline = () => {
  return (
    <StorylineStyled>
      <Story offset="5%" href="https://circleci.com/" date="aug 2013">
        Product Designer at CircleCI
      </Story>
      <Story
        offset="15%"
        href="https://circleci.com/blog/adaptive-placeholders/"
        date="apr 2014"
      >
        Invented Adaptive Placeholders
      </Story>
      <Story offset="26%" href="https://precursorapp.com/" date="jan 2015">
        Founded Precursor
      </Story>
      <Story offset="33.5%" href="https://design.google/sumux" date="oct 2015 ">
        UX Engineer at Google
      </Story>
      <Story
        offset="43.5%"
        href="https://www.google.com/search?q=flowers"
        date="jul 2016"
      >
        Shipped product to 2 billion users
      </Story>
      <Story offset="53.5%" href="https://www.paygarden.com/" date="may 2017">
        Head of Product at PayGarden
      </Story>
      <Story offset="59%" href="https://twitch.paygarden.com/" date="nov 2017">
        Created Twitch donation product
      </Story>
      <Story
        offset="71%"
        href="https://secure.paygarden.com/pay/site/ltm/privateinternet?uid=1"
        date="sep 2018"
      >
        Redefined anonymous gift card payments
      </Story>
    </StorylineStyled>
  )
}

const App = styled.div`
  background-color: black;
  min-height: 100vh;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  animation: ${keys.image} 0.75s ${props => props.theme.time.fadein} 0ms both;
`

const Storytime = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1));
`

const StorytimeWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: ${props => props.theme.size.tile} 0;
`

const Timeline = styled.div`
  display: flex;
  align-items: center;
  animation: ${keys.slipUp} 0.5s ${props => props.theme.time.fadein} 0ms
    backwards;
`

const FlexLine = styled.div`
  flex: 1;
  height: 2px;
  background: ${props => props.theme.color.gray800};
`

const Time = styled.div`
  color: ${props => props.theme.color.gray800};
  font: normal 13px/20px "Roboto Mono", monospace;
  margin: 0 ${props => props.theme.size.tileXXS};
`

const Section = styled.section`
  display: flex;
  position: relative;
`

const Article = styled.article`
  font-size: 20px;
  line-height: 30px;
  display: block;
  flex: 0 1 25em;
  margin: 15vw 15vw 0 15vw;
  ${Link} {
    margin-left: -2px;
    padding: 0 2px;
    background-image: linear-gradient(180deg, #069bfa, #069bfa);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
    transition: background 0.1s ${props => props.theme.time.fadein};
    &:hover {
      color: ${props => props.theme.color.white};
      background-size: 100% 100%;
      border-radius: ${props => props.theme.border.radius};
    }
    &:active {
      transition-duration: 0ms;
      background-image: linear-gradient(
        180deg,
        rgba(6, 155, 250, 0.75),
        rgba(6, 155, 250, 0.75)
      );
      border-radius: ${props => props.theme.border.radius};
    }
  }
  h1 {
    font-size: 3em;
    line-height: 1;
    font-weight: 300;
    margin: 0 0 0.5rem;
    margin-left: -0.08em;
    animation: ${keys.snippet} 0.5s ${props => props.theme.time.fadein} 0.25s
      both;
  }
  p {
    margin: 0 0 0.5em;
    animation: ${keys.snippet} 0.5s ${props => props.theme.time.fadein} 275ms
      both;
  }
`

const IndexPage = () => (
  <App>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle theme={theme} />
    <Theme>
      <Background img={bkg} />
      <Storytime>
        <StorytimeWrapper>
          <Timeline>
            <FlexLine />
            <Time>2014</Time>
            <FlexLine />
            <Time>2015</Time>
            <FlexLine />
            <Time>2016</Time>
            <FlexLine />
            <Time>2017</Time>
            <FlexLine />
            <Time>2018</Time>
            <FlexLine />
            <Time>2019</Time>
            <FlexLine />
            <Time>2020</Time>
            <FlexLine />
          </Timeline>
          <Storyline />
        </StorytimeWrapper>
      </Storytime>
      <Section>
        <Article>
          <h1>I'm Danny King.</h1>
          <p>
            <span>I build products for designers and developers. </span>
            <span>I used to write a lot on my </span>
            <LinkEx href="https://precursorapp.com/blog">blog</LinkEx>
            <span> but not so much anymore. Here's my </span>
            <LinkEx href="https://twitter.com/dannykingme">Twitter</LinkEx>
            <span>, </span>
            <LinkEx href="https://dribbble.com/dannykingme">dribbble</LinkEx>
            <span>, and </span>
            <LinkEx href="https://github.com/dannykingme">GitHub</LinkEx>
            <span>. </span>
            {/*<PressLink />*/}
          </p>
        </Article>
      </Section>
    </Theme>
  </App>
)

export default IndexPage
