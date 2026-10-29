import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";
export default function Contact() {
  const compose = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = data.get("subject").trim();
    const body = `${data.get("message").trim()}\n\nFrom: ${data.get("name").trim()}\nEmail: ${data.get("email").trim()}`;
    window.location.href = `mailto:miteshanshu1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">We’re a message away</p>
          <h1>Let’s talk.</h1>
          <p className="ww-muted">
            A question, an idea, or feedback on Wallet Wing?
          </p>
        </div>
      </div>
      <div className="ww-contact-layout">
        <section className="ww-contact-details">
          <h2>Get in touch</h2>
          <a href="mailto:miteshanshu1@gmail.com">
            <FiMail />
            miteshanshu1@gmail.com
          </a>
          <a href="tel:+917667499479">
            <FiPhone />
            +91 76674 99479
          </a>
          <p>
            Monday–Friday
            <br />
            9:30 AM–6:30 PM
          </p>
          <p className="ww-small ww-muted">
            Wallet Wing is a demo storefront by Mitesh Anshu. Checkout does not
            place real orders.
          </p>
        </section>
        <form className="ww-checkout-form" onSubmit={compose}>
          <h2>Write a message</h2>
          <div className="ww-form-grid">
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="ww-form-span">
              Subject
              <input name="subject" required maxLength={150} />
            </label>
            <label className="ww-form-span">
              Message
              <textarea name="message" rows={6} required maxLength={5000} />
            </label>
          </div>
          <button className="ww-button" type="submit">
            Open email draft <FiArrowUpRight />
          </button>
          <p className="ww-small ww-muted">
            Opens your email app. Nothing is sent until you choose Send.
          </p>
        </form>
      </div>
    </div>
  );
}
