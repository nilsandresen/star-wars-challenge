import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { SearchResult } from "./components/SearchResult";

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export default function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Search input={input} setInput={setInput} />

      <SearchResult
        input={input}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
