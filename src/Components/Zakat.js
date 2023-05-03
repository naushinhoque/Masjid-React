import React, { useState, useEffect } from 'react';

const ZakatForm = (props) => {
    return (
        <form id="zakat">
            <h2>Allah says: Zakat in the very early Makkan surah Al-Muzzammil:
                "Yet you shall duly establish the Prayer. And you shall give the 
                Zakât-Charity, and therewith lend God a most goodly loan. For whatever 
                good you advance for your souls, you shall find its reward with God in the 
                Hereafter; yet it shall be far better and much greater in reward" (Sûrat Al-Muzzammil, 73:20).
            </h2>

            <h3>As one of the pillars of Islam, Zakat is a form of obligatory 
                charity that has the potential to ease the suffering of millions.
            </h3>

            <label>First Name
                <input 
                type="text" 
                id="fname" 
                name="fname"/>
            </label>

            <label>Last Name
                <input 
                type="text" 
                id="lname" 
                name="lname"/>
            </label>

            <label>Donation Amount
                <input 
                type="number" 
                id="dollars" 
                name="dollars" 
                min="100" 
                max="1000"/>
            </label>

            <label>Charity
                <select id="charity">
                    <option value='1'>Masjid Renovation</option>
                    <option value='2'>Masjid School</option>
                    <option value='3'>Give Localy</option>
                    <option value='4'>Give Internationaly</option>
                </select>
            </label>

            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default ZakatForm;