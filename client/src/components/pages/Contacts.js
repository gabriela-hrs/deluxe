import '../../index.scss';
import React, {useState} from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../Footer';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Contacts() {

    const [reservationInfo, setReservationInfo] = useState({
        username: '',
        date: '',
        hour: '',
        service:''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        axios.post('http://localhost:3001/scheduleAppointment', reservationInfo)
            .then(res => {
                if(res.data.Status === "Successfully scheduled appointment!") {
                    navigate('/contacts')
                } else {
                    alert("Couldn't schedule appointment!...")
                }
            })
            .then(error => console.log(error))
    }
    return (
    <>
        <Navbar />

        {/* CONTACTS SECTION */}
        <section className="contacts-page">
            <div className="section-title">
                <div className="title-line">&nbsp;</div>
                <h3 className='title'>CONTACT US</h3>
                <div className="title-line">&nbsp;</div>
            </div>
            <div className="contacts-page-container">
                <div className="contacts-page-info">
                  <div className="addresses">
                    <h4>ADDRESSES:</h4>
                    <p className='address'>▷ Fredrikinkatu 54, 00120 Helsinki, Finland</p>
                    <p className='address'>▷ Henrikinkatu 20, 20500 Turku, Finland</p>
                  </div>
                  <div className="phone-numbers">
                    <h4>PHONE NUMBERS:</h4>
                    <p className="phone-number">✆ 090 597 2370 </p>
                    <p className="phone-number">✆ 092 603 7874</p>
                    <p className="phone-number">✆ 096 115 7005</p>
                  </div>
                  <div className="emails">
                    <h4>EMAIL:</h4>
                    <p className="email">✉ support@deluxe.beauty</p>
                  </div>
                </div>
                <div className="location-map-container">
                  <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254500.69274032104!2d24.689054603440347!3d60.109754137726206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sbg!4v1682672876564!5m2!1sen!2sbg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
                </div>
            </div>
        </section>

        {/* CONTACTS FORM */}
        <section className="contacts-form">
          <div className="section-title">
              <div className="form-title-line">&nbsp;</div>
              <h3 className='title'>SEND US AN EMAIL</h3>
              <div className="form-title-line">&nbsp;</div>
          </div>
          <form className="reservations-form" onSubmit={handleSubmit}>
                <label htmlFor="messageName">USERNAME:</label>
                <input required type="text" id='messageName' name='messageName' placeholder='Type here...' onChange={e => setReservationInfo({...reservationInfo, username: e.target.value})}  />
                <label htmlFor="messageDate">DATE:</label>
                <input required type="date" id='messageDate' name='messageDate' placeholder='Type here...' onChange={e => setReservationInfo({...reservationInfo, date: e.target.value})} />
                <label htmlFor="messageHour">HOUR:</label>
                <input required type="time" id='messageHour' name='messageHour' placeholder='Type here...' onChange={e => setReservationInfo({...reservationInfo, hour: e.target.value})} />
                <label htmlFor="messageServices">SERVICE:</label>
                <select id="messageServices" name="messageServices" onChange={e => setReservationInfo({...reservationInfo, service: e.target.value})} >
                    <option value="empty">SELECT SERVICE</option>
                    <option value="aroma-therapy">AROMA THERAPY</option>
                    <option value="hair-styling">HAIR STYLING</option>
                    <option value="manicure">MANICURE</option>
                    <option value="massage">MASSAGE</option>
                    <option value="hair-removal">HAIR REMOVAL</option>
                    <option value="eyelash-extensions">EYELASH EXTENSIONS</option>
                </select>
            <button type='submit' className="btn">SCHEDULE NOW</button>
          </form>
        </section>

        <Footer />
    </>
  )
}