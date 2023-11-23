import React from "react";
import './App.css';
import store from "./components/store";
import {Provider} from "react-redux";
import {Counter} from "./components/Counter";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter/>
      </Provider>
    </div>
  );
}
export default App;