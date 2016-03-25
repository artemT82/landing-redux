import React, { Component }   from 'react';

import './styles.css';

export default class Home extends Component {

  render() {
    return (
      <div id="Home">
        <div id="hero">
            <div className="container">
                <h1 className="hero-text animated fadeInDown">
                    The best interfaces <br />
asdfasdfas
                </h1>
                <p className="sub-text animated fadeInDown">
                    Get a complete existing website with great design up and running in no time.
                </p>
                <div className="cta animated fadeInDown">
                    <a href="features.html" className="button-outline">See the tour</a>
                    <a href="signup.html" className="button">Sign up free</a>
                </div>
                <div className="img"></div>
            </div>
        </div>

        <div id="features">
            <div className="container">
                <div className="row header">
                    <div className="col-md-12">
                        <h2>Need an easy way to customize your site?</h2>
                        <p>React is perfect for novice developers and experts alike.</p>
                    </div>
                </div>
                <div className="row feature">
                    <div className="col-md-6 info">
                        <h4>You don't need to have great technical experience to use your product.</h4>
                        <p>
                            Whether you want to fill this paragraph with some text like I'm doing right now, this place
                            is perfect to describe some features or anything you want - React has a complete solution for you.
                        </p>
                    </div>
                    <div className="col-md-6 image">
                        <img src="images/feature1.png" className="img-responsive" alt="feature1" />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row feature backwards">
                    <div className="col-md-6 info">
                        <h4>A fully featured well design template that works.</h4>
                        <p>
                            You have complete control over the look & feel of your website, we offer the best quality so you
                            take your site up and running in no time.
                        </p>
                        <p>
                            Write some text here to explain the features of your site or application, it
                            has lots of uses.
                        </p>
                    </div>
                    <div className="col-md-6 image">
                        <img src="images/feature2.png" className="img-responsive" alt="feature2" />
                    </div>
                </div>
            </div>
        </div>

        <div id="pricing">
            <div className="container">
                <div className="row header">
                    <div className="col-md-12">
                        <h3>Free trial. No contract. Cancel when you want.</h3>
                        <p>All plans include a 7-day free trial</p>
                    </div>
                </div>
                <div className="row charts">
                    <div className="col-md-4">
                        <div className="chart first">
                            <div className="quantity">
                                <span className="dollar">$</span>
                                <span className="price">29</span>
                                <span className="period">/month</span>
                            </div>
                            <div className="plan-name">Freelance</div>
                            <div className="specs">
                                <div className="spec">
                                    <span className="variable">5</span>
                                    team members
                                </div>
                                <div className="spec">
                                    <span className="variable">Digital</span>
                                    recurring billing
                                </div>
                                <div className="spec">
                                    <span className="variable">Virtual</span>
                                    online terminal
                                </div>
                                <div className="spec">
                                    <span className="variable">10</span>
                                    total products
                                </div>
                                <div className="spec">
                                    <span className="variable">1.0%</span>
                                    Transaction fee
                                </div>
                            </div>
                            <a className="btn-signup button-clear" href="signup.html">
                                <span>Start free trial</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="chart featured">
                            <div className="popular">Most popular</div>
                            <div className="quantity">
                                <span className="dollar">$</span>
                                <span className="price">79</span>
                                <span className="period">/month</span>
                            </div>
                            <div className="plan-name">Profesional</div>
                            <div className="specs">
                                <div className="spec">
                                    <span className="variable">15</span>
                                    team members
                                </div>
                                <div className="spec">
                                    <span className="variable">Digital</span>
                                    recurring billing
                                </div>
                                <div className="spec">
                                    <span className="variable">Virtual</span>
                                    online terminal
                                </div>
                                <div className="spec">
                                    <span className="variable">15</span>
                                    total products
                                </div>
                                <div className="spec">
                                    <span className="variable">0.5%</span>
                                    Transaction fee
                                </div>
                            </div>
                            <a className="btn-signup button-clear" href="signup.html">
                                <span>Start free trial</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="chart last">
                            <div className="quantity">
                                <span className="dollar">$</span>
                                <span className="price">119</span>
                                <span className="period">/month</span>
                            </div>
                            <div className="plan-name">Premium</div>
                            <div className="specs">
                                <div className="spec">
                                    <span className="variable">Unlimited</span>
                                    team members
                                </div>
                                <div className="spec">
                                    <span className="variable">Digital</span>
                                    recurring billing
                                </div>
                                <div className="spec">
                                    <span className="variable">Virtual</span>
                                    online terminal
                                </div>
                                <div className="spec">
                                    <span className="variable">25</span>
                                    total products
                                </div>
                                <div className="spec">
                                    <span className="variable">No</span>
                                    Transaction fee
                                </div>
                            </div>
                            <a className="btn-signup button-clear" href="signup.html">
                                <span>Start free trial</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    );
  }
}
