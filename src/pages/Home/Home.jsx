import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';

import styles from './Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTests();
  }, []);

  const getTests = async () => {
    const response = await fetch('http://localhost:3000/api/tests');
    const data = await response.json();

    setData(data.tests);
  };
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.layoutCarts}>
          {data.map((cart, i) => (
            <Cart key={cart.id} title={cart.title} test={data} id={cart.id} getTests={getTests} />
          ))}
        </div>
      </div>
    </div>
  );
}
