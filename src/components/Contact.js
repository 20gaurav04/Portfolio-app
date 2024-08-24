import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import linkedinSVG from '../asset/linkedin.svg';
import linkedinPNG from '../asset/linkedin.png';
import githubSVG from '../asset/github.svg';
import gitPNG from '../asset/git.png';
import igSVG from '../asset/ig.svg';
import igPNG from '../asset/ig.png';
import ytSVG from '../asset/yt.svg';
import ytPNG from '../asset/yt.png';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_r53ljz2', 'template_ulqwpn3', form.current, {
                publicKey: 'U-GvooYT-GlJPjcoK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="Contact" id="social">
            <div
                className='socials'
                id='socials'
                style={{
                    '--linkedin-svg': `url(${linkedinSVG})`,
                    '--linkedin-png': `url(${linkedinPNG})`,
                    '--github-svg': `url(${githubSVG})`,
                    '--git-png': `url(${gitPNG})`,
                    '--ig-svg': `url(${igSVG})`,
                    '--ig-png': `url(${igPNG})`,
                    '--yt-svg': `url(${ytSVG})`,
                    '--yt-png': `url(${ytPNG})`,
                }}
            >
                <a href="https://www.linkedin.com/in/gaurav-sharma-51515725a/" alt="LinkedIn" className="logoname logo1 sociallogo"></a>
                <a href="https://github.com/20gaurav04" alt="GitHub" className="logoname logo2 sociallogo"></a>
                <a href="https://www.instagram.com/ig_myto/?hl=en" alt="Insta" className="logoname logo3 sociallogo"></a>
                <a href="https://youtu.be/9tao4E3C8O0?si=d4KsyYnnMzb4ue3U" alt="YouTube" className="logoname logo4 sociallogo"></a>
            </div>
            <div className="form-container" id="reach">
                <h3 className="header">Contact Me</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" id="name" name='from_name' placeholder='Enter Your Name' required className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="email" id="email" name='your_email' placeholder='Enter Your Email Address' required className="input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea id="message" name='message' placeholder='Feel free to ask any queries.' required className="textarea"></textarea>
                    </div>
                    <button type="submit" className="send-button" onClick={() => { alert("your form is submitted") }}>Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
