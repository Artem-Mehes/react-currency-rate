import React from 'react';
import './App.css';
import Rate from './Rate/Rate';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1 className="header__heading">Currency Rate</h1>
                </header>

                <main>
                    <Rate />
                </main>
            </div>
        );
    };
}

export default App;
