import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            amount: 0,
            type: ''
        };  
    }

    calcRate = e => {
        e.preventDefault();

        const elements = e.target.elements;
        const amount = elements['amount'].value;
        const type = elements['type'].value;

        this.setState({ 
            result: ( amount / this.props.rates[type] ).toFixed(2),
            amount,
            type
        });
    }

    render() {
        const options = Object.keys(this.props.rates).map(item => {
            return <option key={item} value={item}>{item}</option>
        });

        let result;
        if (this.state.result) {
            result = <p>
                        You Can Buy <span className="calc__result">
                        {this.state.result} EUR
                        </span> for {this.state.amount} {this.state.type}
                     </p>;
        }

        return (
            <section className="calc">
                <h2>Exchange calculator</h2>
                <p>Buy Euros For:</p>

                <form className="calc__form" onSubmit={this.calcRate}>
                    <input className="calc__number" type="number" defaultValue="150" name="amount" />
                    <select name="type">
                        {options}
                    </select>
                    <input className="calc__submit" type="submit" value="Calculate" />
                </form>

                <h3>Result</h3>
                {result}
            </section>
        );
    };
}

export default Calc;


