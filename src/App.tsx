import React from 'react';
import './App.sass';
import {Navigation} from "./components/Navigation";
import {store} from "./store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navigation/>
            </div>
        </Provider>
    );
}

export default App;
