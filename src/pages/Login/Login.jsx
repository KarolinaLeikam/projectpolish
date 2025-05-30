import { useState } from "react";
import styles from "../Login/Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !username || !password;
  async function handleLogin(e) {
    e.preventDefault();
    if (isDisabled) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        alert("Вход выполнен успешно", data);
      } else {
        alert(`Ошибка: ${data.error}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Произошла ошибка при входе");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerUsername}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.input}
            id="username"
            type="text"
            placeholder="Введите логин"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.containerPassword}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className={styles.containerBtn}>
          <button className={styles.button} onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
      <div className={styles.containerRegister}>
        <span> Вы не зарегистрированы?</span>
        <Link to="/register" className={styles.text}>
          Перейти к регистрации
        </Link>
      </div>
    </div>
  );
}
