import React from "preact-compat";
import { Link } from "preact-router";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "./colors";

const Spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const SpyGlass = styled.span`
  display: inline-block;
  animation: 1.5s ${Spin} ease-in-out infinite;
`;

const Container = styled.header`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavLink hef="/">Petoption</NavLink>
      <NavLink href="/search-params">
        <SpyGlass aria-label="search" role="img">
          🔍
        </SpyGlass>
      </NavLink>
    </Container>
  );
};

export default NavBar;
