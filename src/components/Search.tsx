import styles from "./search.module.css";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export function Search({ input, setInput }: Props) {
  return (
    <>
      <label htmlFor="searchInput">Search</label>
      <input
        className={styles.searchInput}
        type="text"
        name="searchInput"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        id="searchInput"
      />
    </>
  );
}
