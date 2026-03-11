import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  return <div className="App">
    <Header />
    <TodoEditor />
    <TodoList />
  </div>
}

export default App;
