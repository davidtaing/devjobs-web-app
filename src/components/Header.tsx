import Link from "next/link";
import styled from "styled-components";
import { ThemeToggle } from "./ThemeToggle";

const StyledHeader = styled.header`
  background-color: var(--violet);

  .logo {
    margin-right: auto;
    height: 2rem;
  }

  .theme-toggle {
    margin-left: auto;
  }

  @media (max-width: 767px) {
    background-image: url("/assets/mobile/bg-pattern-header.svg");
    height: 136px;
    padding-top: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url("/assets/tablet/bg-pattern-header.svg");
    border-bottom-left-radius: 100px;
    height: 160px;
    padding-top: 2.625rem;
  }

  @media (min-width: 1440px) {
    background-image: url("/assets/desktop/bg-pattern-header.svg");
    border-bottom-left-radius: 100px;
    height: 162px;
    padding-top: 2.8125rem;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <div className="wrapper flex">
        <Link href="/">
          <a className="logo">
            <img src="/assets/desktop/logo.svg" alt="devjobs logo" />
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </StyledHeader>
  );
}
