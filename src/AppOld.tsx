import "./App.css";
import scribble from "./assets/scribble.png";

export default function AppOld() {
  return (
    <div className="App">
      <h1>Star Wars Character Search</h1>
      <h2 style={{ marginBottom: "80px" }}>
        Search for any character from Star Wars
      </h2>
      <i>
        Delete the following challenge description before submitting your
        solution.
      </i>
      <h1>Coding Challenge</h1>
      <p>
        Your task is to enable the user of your app to query for any character
        from the Star Wars movies by name.
      </p>
      <p>
        You should query the open Star Wars API depending on the user input,
        store the data in a state variable and display it. Please, use React
        function components and hooks for your implementation. You should refer
        to the recent{" "}
        <a href="https://beta.reactjs.org/" target="_blank" rel="noreferrer">
          React documentation
        </a>
        .
      </p>
      <p>
        Check out the
        <a
          href="https://swapi.dev/documentation"
          target="_blank"
          rel="noreferrer"
        >
          API documentation
        </a>{" "}
        to find out how to fetch the data, especially regarding{" "}
        <a
          href="https://swapi.dev/documentation#search"
          target="_blank"
          rel="noreferrer"
        >
          searching for characters
        </a>
        .
      </p>
      <p>
        Your page should look something like the following. The emphasis of this
        task is on data fetching and state management. But feel free to style
        your app in any way you like.
      </p>
      <img alt="scribble" src={scribble} />
    </div>
  );
}
