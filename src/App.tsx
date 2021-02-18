import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';

interface AppProps {}

// const style = css`
//   color: hotpink;
// `;

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }: { children: any }) => (
  <div css={style}>{children}</div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

function App({}: AppProps) {
  const [counter, setcounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{counter}</p>
        <button onClick={() => setcounter(counter + 1)}>
          increase counter
        </button>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin-top: 20px;
          `}
        >
          <SomeComponent>Some hotpink text.</SomeComponent>
          <AnotherComponent></AnotherComponent>
        </div>
        <a
          className="App-link"
          css={css`
            margin-top: 20px;
          `}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
