import React from 'react';
import './Calc.css';
import Select from 'react-select'

class Calc extends React.Component {
    handleSubmit = e => {
        e.preventDefault();

        const elements = e.target.elements;
        const amount = elements['amount'].value;
        const type = elements['type'].value;

        this.props.calcRate(amount, type);
    }

    render() {
        let result;
        if (this.props.result) {
            result = <p>
                        You Can Buy <span className="calc__result">
                        {this.props.result} {this.props.base}
                        </span> for {this.props.amount} {this.props.type}
                        </p>;
        }
    
        return (
            <section className="calc">
                <h2>Exchange calculator</h2>
                <p>Buy {this.props.base} For:</p>
    
                <form className="calc__form" onSubmit={this.handleSubmit}>
                    <input className="calc__number" type="number" defaultValue="150" name="amount" />
                    <Select 
                        options={this.props.selectOptions}
                        name='type'
                        defaultValue={{ label: 'USD', value: 'USD' }}
                        maxMenuHeight={250}
                    />
                    <input className="calc__submit" type="submit" value="Calculate" />
                </form>
    
                <h3>Result</h3>
                {result}
            </section>
        );
    };
}

export default Calc;


