import React from 'react';
import 'antd/dist/reset.css';
import TodoPage from './app/pages/TodoPage';
import { Provider } from 'react-redux';
import { store } from './app/boot';

function App() {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}

export default App;
