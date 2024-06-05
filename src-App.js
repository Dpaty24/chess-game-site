import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Game from './components/Game';

const App = () => {
    const user = { username: 'User', coins: 100 };

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to Chess Game</h1>
                </Route>
                <Route path="/profile">
                    <Profile user={user} />
                </Route>
                <Route path="/game">
                    <Game user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
