import { Link } from 'react-router-dom'
import React from 'react'


import "././styles/donate.css"
import Footer from './Footer';


const Donate = () => {
  return (
    <div className='donate'>
        <Link to = '/'></Link>
        <h4 className="text-center">Please Make Your Donations here.</h4>
        {/* <form action="" className='form-details'>

        </form> */}

        <div className="col-md-6 offset-md-3">
                    <span className="anchor" id="formPayment"></span>
                    <hr className="my-5"/>
                    <div className="card card-outline-secondary">
                        <div className="card-body">
                            <h4 className="text-center">Credit Card Donation</h4>
                            <hr/>
                            <div className="alert alert-info p-2 pb-3">
                                <a className="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>×</samp></a>
                                CVC code is required.
                            </div>
                            <form className="form" role="form" autocomplete="off">
                                <div className="form-group">
                                    <label for="cc_name">Card Holder's Name</label>
                                    <input type="text" className="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name" placeholder='John Smith' required="required"/>
                                </div>
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" className="form-control" autocomplete="off" maxlength="20" pattern="\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b" placeholder='0000 0000 0000 0000' title="Credit card number" required="True"/>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-12">Card Exp. Date</label>
                                    <div className="col-md-4">
                                        <select className="form-control" name="cc_exp_mo" size="0">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-control" name="cc_exp_yr" size="0">
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>

                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" autocomplete="off" maxLength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-12">Amount</label>
                                </div>
                                <div className="form-inline">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                                        <input type="text" class="form-control text-right" id="exampleInputAmount" placeholder="39"/>
                                        <div className="input-group-append"><span className="input-group-text">.00</span></div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <button type="reset" className="btn btn-default btn-lg btn-block">Cancel</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-success btn-lg btn-block">Donate</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                  </div>

                  <div className='payment'>
                    <h4 className='payment-h4'>Donate via M-Pesa</h4>
                    <h4 className='payment-h4'>Paybill Number 522522</h4>
                    <h4 className='payment-h4'>Account Number</h4>
                  </div>

                  <Footer />
    </div>
  )
}

export default Donate;