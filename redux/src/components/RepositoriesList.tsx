import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
// import { actionCreators } from '../state';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  // const dispatch = useDispatch();
  const { data, error, loading } = useAppSelector((state) => state.repositories);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(actionCreators.searchRepositories(term));
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
