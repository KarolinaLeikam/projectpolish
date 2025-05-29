import styles from '../Register/Register.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !username || !password;

  async function handleRegister(e) {
    e.preventDefault();
    if (isDisabled) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Регистрация успешна! Теперь вы можете войти.');
      } else {
        alert(`Ошибка: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Произошла ошибка при регистрации');
    }
  }

  return (
    <div className={styles.container}>
      {' '}
      <div className={styles.containerContent}>
        <div className={styles.containerUsername}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.input}
            id="username"
            type="text"
            value={username}
            placeholder="Введите логин"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.containerPassword}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            id="password"
            type="password"
            value={password}
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.containerBtn}>
          <button className={styles.button} onClick={handleRegister}>
            Регистрация
          </button>
        </div>
      </div>
      <div className={styles.containerRegister}>
        <span> Вы уже зарегистрированы?</span>
        <Link to="/login" className={styles.text}>
          Войти
        </Link>
      </div>
    </div>
  );
}
