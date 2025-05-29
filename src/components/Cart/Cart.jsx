import RecycleBin from './RecycleBin.png';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

export default function Cart({ title, id, test, getTests }) {
  const token = localStorage.getItem('authToken');

  async function deleteTest() {
    try {
      const response = await fetch(`http://localhost:3000/api/tests/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        alert('Тест успешно удален');
        getTests();
      } else {
        alert(`Ошибка: ${result.error}`);
      }
    } catch (error) {
      console.error('Ошибка при удалении теста:', error);
      alert('Произошла ошибка при удалении теста');
    }
  }

  return (
    <div className={styles.border}>
      <div className={styles.containerText}>
        <p className={styles.title}>{title}</p>
        {token && (
          <img className={styles.img} src={RecycleBin} alt="RecycleBin" onClick={deleteTest} />
        )}
      </div>
      <div className={styles.containerBtn}>
        <Link className={styles.button} to={`/test/${id}`} state={{ test }}>
          Take Tast
        </Link>
      </div>
    </div>
  );
}
