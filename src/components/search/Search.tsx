import { useState } from 'react';
import { useGetRecipesQuery } from '../../store/api/api';
import styles from './Search.module.scss';

// interface searchInTypes {
//   isSearch: string;
//   setIsSearch: (arg0: boolean) => void;
//   searchTerm: string
//   setSearchTerm:
// }
//! PAUSE 20:09
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('');

  const { isLoading, data, error } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <div className={styles.Search}>
      <p>If you want to find: </p>
      <div className={styles.inputWrapper}>
        <input
          type="search"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
