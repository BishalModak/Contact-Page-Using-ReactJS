import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactForm = () => {

  const onSubmit=(event)=>{
    event.preventDefault();
    console.log("Name", event.target[0].value)
    console.log("Email", event.target[1].value)
    console.log("Text", event.target[2].value)
  }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
        <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text=" VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text=" VIA EMAIL FORM" icon={<MdEmail  fontSize="24px"/>}/>

        <form onSubmit={onSubmit}>
           <div className={styles.form_control}>
           <label htmlFor="name">Name</label>
           <input type="text" name='name' />
           </div>
           <div className={styles.form_control}>
           <label htmlFor="email">Email</label>
           <input type="email" name='email' />
           </div>
           <div className={styles.form_control}>
           <label htmlFor="text">Text</label>
           <textarea name='name' rows="8"/>
           </div>
           <div style={{
            display: 'flex',
            justifyContent:'end',
        }}>
           <Button text="SUBMIT"/>
           </div>
           
        </form>
        </div>
        <div className={styles.contact_image}><img src="/img/contact.jpg" alt="error" /></div>
    </section>
  )
}

export default ContactForm