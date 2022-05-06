import { Provider } from 'react-redux';
import { store } from '../state';
import { storeToolkit } from '../state-toolkit/store';
import RepositoriesList from './RepositoriesList';

function App() {
  return (
    <Provider store={storeToolkit}>
      <div>
        <h1>Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
