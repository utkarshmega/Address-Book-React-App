import React, { useState, useEffect }  from 'react';
import { useParams,Link, withRouter } from 'react-router-dom';
import './homePage.scss'
import bookLogo from '../../Assets/logo/AddressBookLogo.jpeg';
const homePage = (props) => {
    return (

        <div>
            <header class = "header-content header">
                <div class = "logo-content">
                    <img src = {bookLogo} alt = "" />
                    <div>
                        <span class = "address-text">ADDRESS</span><br/>
                        <span class = "address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div class = "main-content">
                <div class = "header-content">
                    <div class = "person-detail-text">
                        Person Details <div class = "person-count">5</div> 
                    </div>
                    <a href = "./AddressBookHomePage.html" class = "add-button">
                    <img src = "../Assets/icons/add-24px.svg" alt = "" />Add Person</a> 
                </div>
            </div>
            <div class = "table-main">
                <table id = "table-display" class = "table"></table>
            </div>
        </div>
    );
}

export default withRouter(homePage);