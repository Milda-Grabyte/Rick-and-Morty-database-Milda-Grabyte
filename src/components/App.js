import '../styles/App.scss';
import api from '../services/api';

api.getDataFromApi().then(data => {
  console.log(data);
});

function App() {
  return (
   <p>hola</p>
  );
}

export default App;