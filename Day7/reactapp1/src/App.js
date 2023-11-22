import './App.css';
import AxiosDelete from './components/AxiosDelete';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import AxiosPut from './components/AxiosPut';

function App() {
  return (
    <div className="App">
     <AxiosGet/>
     <AxiosPost/>
     <AxiosPut/>
     <AxiosDelete/>
    </div>
  );
}

export default App;
