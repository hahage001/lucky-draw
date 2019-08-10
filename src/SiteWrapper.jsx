// @flow

import * as React from "react";
import { Site, Nav, Grid, List, Button } from "tabler-react";

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    useExact: true
  },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards"
      },
      { value: "Charts", to: "/charts" },
      {
        value: "Pricing Cards",
        to: "/pricing-cards"
      }
    ]
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps" },
      { value: "Icons", to: "/icons" },
      { value: "Store", to: "/store" },
      { value: "Blog", to: "/blog" }
    ]
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile" },
      { value: "Login", to: "/login" },
      {
        value: "Register",
        to: "/register"
      },
      {
        value: "Forgot password",
        to: "/forgot-password"
      },
      { value: "400 error", to: "/400" },
      { value: "401 error", to: "/401" },
      { value: "403 error", to: "/403" },
      { value: "404 error", to: "/404" },
      { value: "500 error", to: "/500" },
      { value: "503 error", to: "/503" },
      { value: "Email", to: "/email" },
      {
        value: "Empty page",
        to: "/empty-page"
      },
      { value: "RTL", to: "/rtl" }
    ]
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square"
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image"
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation"
  }
];

class SiteWrapper extends React.Component<Props, State> {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Random Draw",
          imageURL: "../static/images/randomdraw-logo.svg",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/thefiend/random-draw"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Source code
              </Button>
            </Nav.Item>
          )
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eigth Link</a>
          ],
          note:
            "Lucky draw tool created to make drawing for winners much easier.",
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Random Draw</a>. Powered by
              <a
                href="https://jasys.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Jasys Technologies
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          )
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;