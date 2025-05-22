import { Link } from 'react-router-dom';
import styles from './CreateTest.module.css';
export default function CreateTest() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Create New Test</h2>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="text">Text (use ___ for blanks)</label>
        <textarea name="text" id="text"></textarea>
        <label htmlFor="odpowiedzi">Odpowiedzi (oddzielone przecinkami)</label>
        <input id="odpowiedzi" type="text" placeholder="mają, chce, kosztuje" />
        <label htmlFor="file">Audio File</label>
        <input id="file" type="file" accept="audio/*" />
        <Link className={styles.button} to="/">
          Create Test
        </Link>
      </div>
    </div>
  );
}
