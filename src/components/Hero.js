import React from 'react';
import Amount from './Amount';
import UpdateStateButton from './UpdateStateButton';

const Hero = ({ amounts }) =>
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          <div className="column is-half-mobile">
            <UpdateStateButton buttonType="Edit" />
          </div>
          <div className="column is-half-mobile">
            <UpdateStateButton buttonType="Save" />
          </div>
          {amounts.map(amount => <Amount fullName={amount.fullName} name={amount.name} key={amount.name} />)}
        </div>
      </div>
    </div>
  </section>;

export default Hero;
