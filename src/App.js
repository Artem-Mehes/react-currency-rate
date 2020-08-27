import React from 'react';
import './App.css';
import Rate from './Components/Rate/Rate';
import Calc from './Components/Calc/Calc';

const URL = 'https://api.exchangeratesapi.io/latest';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            rates: {},
            result: 0,
            amount: 0,
            type: '',
            base: '',
            selectBaseValue: ''
        }
    }

    componentDidMount = () => {
        this.getData(URL);
    }

    getData = url => {
        fetch(url)
            .then(data => data.json())
            .then(data => {
                this.setState({ 
                    date: data.date,
                    rates: data.rates,
                    base: data.base
                });
            });
    }

    changeSelectBaseValue = selectBaseValue => {
        this.setState({ selectBaseValue });
    }

    changeBase = base => {
        this.getData(`${URL}?base=${base}`);
    }

    calcRate = (amount, type) => {
        this.setState({ 
            result: ( amount / this.state.rates[type] ).toFixed(2),
            amount,
            type
        });
    }

    render() {
        const selectOptions = [];
        Object.keys(this.state.rates).forEach(item => {
            selectOptions.push({ value: item, label: item })
        });

        return (
            <div className="container">
                <header>
                    <h1 className="header__heading">Currency Rate</h1>
                </header>

                <main>
                    <Rate 
                        date={this.state.date} 
                        rates={this.state.rates} 
                        selectOptions={selectOptions}
                        base={this.state.base}
                        changeBase={this.changeBase}
                        changeSelectValue={this.changeSelectBaseValue}
                    />

                    <Calc 
                        rates={this.state.rates} 
                        result={this.state.result}
                        type={this.state.type}
                        amount={this.state.amount}
                        calcRate={this.calcRate}
                        selectOptions={selectOptions}
                        base={this.state.base}
                    />
                </main>
            </div>
        );
    };
}

export default App;
