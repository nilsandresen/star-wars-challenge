import { useState, useEffect } from "react";
import { type Person } from "../App";
import { Character } from "./Character";

type Props = {
  input: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SearchResult({ input, isLoading, setIsLoading }: Props) {
  const api = "https://swapi.dev/api/people/?search=";

  const [characters, setCharacters] = useState<Person[]>([]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (input !== "") {
        setIsLoading(true);
        fetch(api + input)
          .then((res) => res.json())
          .then((data) => {
            setCharacters(data.results);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        setCharacters([]);
        setIsLoading(false);
      }
    }, 300);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [input, setIsLoading]);

  return (
    <div className="grid">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        characters.map((character) => {
          return <Character key={character.name} data={character} />;
        })
      )}
    </div>
  );
}
