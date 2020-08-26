import React from 'react';
import './Rate.css';
import Slider from 'react-slick';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            rates: {}
        }
    }

    componentDidMount = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => data.json())
            .then(data => {
                this.setState({ 
                    date: data.date,
                    rates: data.rates 
                });
            });
    }

    render() {
        const rateBlocks = Object.keys(this.state.rates).map(name => {
            return (
                <article className="rate__slider-item" key={name}>
                    <p>{name}</p>
                    <p className="rate__cost">{this.state.rates[name].toFixed(2)}*</p>
                    <p>* can be bought for 1 EUR</p>
                </article>
            );
        });

        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 5000
        };

        return (
            <section className="rate">
                <h2>Exchange Rate on {this.state.date}</h2>
                <Slider {...sliderSettings}>
                    {rateBlocks}
                </Slider>
                
                <Calc rates={this.state.rates} />
            </section>
        );
    };
}

export default Rate;


