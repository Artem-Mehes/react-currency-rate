import React from 'react';
import './Rate.css';
import Slider from 'react-slick';
import Select from 'react-select';

class Rate extends React.Component {
    handleSubmit = e => {
        e.preventDefault();

        this.props.changeBase(e.target.elements['type'].value);
    }

    handleChange = selectValue => {
        this.props.changeSelectValue(selectValue);
    }

    render() {
        const rateBlocks = Object.keys(this.props.rates).map(name => {
            return (
                <article className="rate__slider-item" key={name}>
                    <p>{name}</p>
                    <p className="rate__cost">{this.props.rates[name].toFixed(2)}*</p>
                    <p>* can be bought for 1 {this.props.base}</p>
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
            autoplaySpeed: 5000,
            pauseOnHover: true
        };

        return (
            <section className="rate">
                <div className="rate__inner">
                    <h2 className="rate__heading">Exchange Rate on {this.props.date}</h2>
                    <p>Current Base Currency: <span>{this.props.base}</span></p>
                    <p>Change Base Currency:</p>
                    <form className="rate__form" onSubmit={this.handleSubmit}>
                        <Select 
                            options={this.props.selectOptions}
                            defaultValue={{ label: 'EUR', value: 'EUR' }}
                            value={this.props.selectValue}
                            onChange={ selectValue => this.handleChange(selectValue) }
                            name='type'
                            maxMenuHeight={250}
                        />

                        <input type="submit" value="Change" />
                    </form>
                </div>
    
                <Slider {...sliderSettings}>
                    {rateBlocks}
                </Slider>
            </section>
        );
    };
}

export default Rate;


