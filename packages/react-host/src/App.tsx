import React from "react";
import logo from "./logo.svg";
import "./App.scss";

// @ts-ignore
const ReactChild = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Я родитель!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <React.Suspense fallback="Loading Counter...">
          <ReactChild />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
