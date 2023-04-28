import React, { useState, useEffect } from 'react';

const volunteerForm = (props) => {
    return (
        <form id="volunteer">
            <h1>Volunteering With Your Community!</h1>
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

            <label>Date and Time: (1 hour shifts)
                <input 
                type="datetime-local" 
                id="date" 
                name="date"/>
            </label>

            <label>May choose max of 3 different shifts a day.
            <input type="checkbox" id="1" name="Garden" value="Community Garden"/>
            <input type="checkbox" id="2" name="Cleaning" value="Cleaning the Masjid"/>
            <input type="checkbox" id="3" name="Daycare" value="Daycare Helper"/>
            <input type="checkbox" id="4" name="Fundraising" value="Fundraising"/>
            <input type="checkbox" id="5" name="Speaker" value="Speaker/Nasheed"/>
            </label>

            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default volunteerForm;