import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render(){
        return (
                <div className="footer-control">
                    <div className="footer-filter">
                        <div>Dashboard</div>
                        <div>Affiliates</div>
                        <div>Stats</div>
                        <div>Exchange</div>
                        <div>Contact</div>
                        <div>Logout</div>
                        <div>Referral Code</div>
                    </div>
                </div>
            
        );
    }
}
export default Footer;
