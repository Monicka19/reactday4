// src/App.js
import React from 'react';
import CharacterList from './Components/CharacterList';
import './Components/CharacterList.css';

const App = () => {
    return (
        <div className="App">
            <h1>Rick and Morty Characters</h1>
            <CharacterList />
        </div>
    );
};

export default App;