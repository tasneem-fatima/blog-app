import React, { useEffect, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const sendContactData = async (contactDetails) => {
    const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }
};
const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const [requestState, setRequestState] = useState(); //'pending', 'success', 'error'
    const [requestError, setRequestError] = useState(); //'pending', 'success', 'error'
    useEffect(() => {
        if (requestState === 'success' || requestState === 'error') {
            const timer = setTimeout(() => {
                setRequestState(null);
                setRequestError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestState]);

    const sendMessageHandler = async (e) => {
        e.preventDefault();
        setRequestState("pending");
        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            });
            setRequestState("success");
            setEnteredEmail('');
            setEnteredMessage('');
            setEnteredName('');
        } catch (error) {
            setRequestError(error.message);
            setRequestState("error");
        }
    };

    let notification;
    if (requestState === "pending") {
        notification = {
            status: "pending",
            title: "Sending message...",
            message: "Your message is on its way!",
        };
    }
    if (requestState === "success") {
        notification = {
            status: "success",
            title: "Success!",
            message: "Message sent successfully!",
        };
    }
    if (requestState === "error") {
        notification = {
            status: "error",
            title: "Failure!",
            message: requestError,
        };
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={enteredEmail}
                            onChange={(e) => setEnteredEmail(e.target.value)}
                        />
                    </div>

                    {/* 2nd div */}
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={enteredName}
                            onChange={(e) => setEnteredName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={enteredMessage}
                        required
                        onChange={(e) => setEnteredMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification status=
                {notification.status}
                title={notification.title}
                message={notification.message} />}
        </section>
    );
};

export default ContactForm;
