import { useState } from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.scss';

const Header = () => {
  const { favorites } = useFavorites();
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <h1 id={styles.appName}>Recipe Book</h1>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={styles.iconWrapper}
      >
        <BsFillBookmarkHeartFill className={styles.icon} />
        <div id={styles.favCount}>{favorites.length}</div>
        <div
          className={
            show ? `${styles.favRecipes} ${styles._active}` : styles.favRecipes
          }
        >
          {favorites.length ? (
            favorites.map((fvrts) => (
              <div className={styles.fav} key={fvrts.id}>
                <span>
                  {fvrts.id}. {fvrts.name}
                </span>
                <img src={fvrts.image} alt={fvrts.name} />
              </div>
            ))
          ) : show ? (
            <p>There are no favorites yet</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
