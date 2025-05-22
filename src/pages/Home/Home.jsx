import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';

import styles from './Home.module.css';
const data = [
  { id: 1, title: 2, description: 3 },
  { id: 4, title: 5, description: 6 },
  { id: 7, title: 8, description: 9 },
  { id: 1, title: 2, description: 3 },
  { id: 4, title: 5, description: 6 },
  { id: 7, title: 8, description: 9 },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.layoutCarts}>
          {data.map((cart, i) => (
            <Cart key={i} />
          ))}
        </div>
      </div>
      </div>
    
  );
}
