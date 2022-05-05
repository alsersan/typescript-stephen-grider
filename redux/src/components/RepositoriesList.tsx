import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useAppSelector((state) => state.repositories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch<any>(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!error && !loading && <ul>{data.length > 0 && data.map((el) => <li key={el}>{el}</li>)}</ul>}
    </div>
  );
};

export default RepositoriesList;
