import React, { useState, useEffect }  from 'react';
import './add-person-form.scss';
import { useParams,Link, withRouter } from 'react-router-dom';
const AddPersonForm = (props) => {
    return(
        <div>
            <header class = "header-content header">
                <div class = "logo-content">
                    <img src = "../Assets/logo/Address Book logo.jpeg" alt = ""/>
                    <div>
                        <span class = "address-text">ADDRESS</span><br />
                        <span class = "address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div class = "form-content">
                <form class = "form" action="#" onsubmit="save(event)">
                    <div class = "form-head-content">
                        <div class = "form-head">PERSON ADDRESS FORM</div>
                        <div class = "form-logo-header"><a href = "./AddressBookHomePage.html">
                            <img src = "../Assets/logo/Delete contact logo.jpeg" /></a>
                        </div>
                    </div>
                    <div class = "row-content">
                        <label class = "label text" for = "fullName">Full Name</label>
                        <input class = "input" type = "text" id="name" name="name" placeholder="Enter Your Name" required />
                        <error-output class = "text-error" for = "text"></error-output>
                    </div>
                    <div class = "row-content">
                        <textarea class = "input" id = "address" name = "address" type = "text"
                        placeholder="Address" required></textarea>
                        <error-output class = "address-error" for = "address"></error-output>
                    </div>
                    <div class = "row-content">
                        <div class = "select-data">
                            <select id = "city" name = "city">
                                <option value="" selected hidden>Select City</option>
                                <option value = "Prayagraj" >Prayagraj</option>
                                <option value = "Jaipur" >Jaipur</option>
                                <option value = "Guhawati" >Guhawati</option>
                                <option value = "Mumbai" >Mumbai</option>
                                <option value = "Ahmedabad" >Ahmedabad</option>
                            </select>
                            <select id = "state" name = "state">
                                <option value ="" selected hidden>Select State</option>
                                <option value = "Uttar Pradesh">Uttar Pradesh</option>
                                <option value = "Gujrat">Gujrat</option>
                                <option value = "Rajasthan">Rajasthan</option>
                                <option value = "Assam">Assam</option>
                                <option value = "Maharashtra">Maharashtra</option>
                            </select>
                            <input class = "input" type = "number" id = "zipcode" name = "zipcode" placeholder="Zipcode" required />
                        </div>
                    </div>
                    <div class = "row-content">
                        <input class = "input" type = "number" id = "phoneNumber" name = "phoneNumber" 
                            placeholder="Phone Number" required />
                        <error-output class = "phone-error" for = "phone"></error-output>
                    </div>
                    <div class = "buttonParent">
                        <a href = "./AddressBooMainPage.html" class ="resetButton button cancelButton">Cancel</a>
                        <div class = "submit-reset">
                            <button type = "submit" class = "button submitButton" id="submitButton">Submit</button>
                            <button type ="reset" class = "button resetButton" id ="resetButton">Reset</button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>    
    );
}
export default withRouter(AddPersonForm);