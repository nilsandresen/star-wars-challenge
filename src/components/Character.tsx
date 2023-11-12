import styles from "./character.module.css";
import { type Person } from "../App";

type Props = {
  data: Person;
};

export function Character({ data }: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://picsum.photos/200" alt="" />
      <div className={styles.name}>{data.name}</div>
    </div>
  );
}
