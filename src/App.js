import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BoardList from './BoardList';
import Write from './Write';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="container">
     <h1>React Board</h1>
     <BoardList></BoardList>
     <Write></Write>
    </div>
  );
}

export default App;
