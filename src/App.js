
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Josias', email: 'josias@gmail.com', bio: 'Sou um advogado', role: 'adm'}}/>
    </div>
  );
}

export default App;
