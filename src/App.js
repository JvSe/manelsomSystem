import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './todos';
import TodoList from './TodoList';

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
    
  );
}

export default App;
