import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon-sun {
    margin: auto 0;
  }

  .icon-moon {
    margin: auto 0;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.875rem;
    width: 0.875rem;
    left: 5px;
    bottom: 5px;
    background-color: var(--violet);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px white;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 0.75rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(prefersDark);
    document.documentElement.setAttribute(
      "color-theme",
      prefersDark ? "dark" : "light"
    );

    console.log("initial load");

    console.log(darkMode ? "dark" : "light");
  }, []);

  const handleChange = () => {
    // React doesn't update state until after, so we need to invert darkMode
    document.documentElement.setAttribute(
      "color-theme",
      !darkMode ? "dark" : "light"
    );

    setDarkMode(!darkMode);
  };

  return (
    <StyledDiv className="theme-toggle">
      <img className="icon-sun" src="/assets/desktop/icon-sun.svg" />
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
        <span className="slider round" />
      </label>
      <img className="icon-moon" src="/assets/desktop/icon-moon.svg" />
    </StyledDiv>
  );
}
