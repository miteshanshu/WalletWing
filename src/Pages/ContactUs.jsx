/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import contactImg from "../assets/contactImg.png";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper  py-10 dark:bg-gray-900 mt-6 flex flex-col">
        <div className="flex flex-wrap items-center justify-between mb-[40px]  w-[85%] mx-auto">
          <div className="w-[30%] mb-[12px] mr-3">
            <h4 className="mb-5 text-[#3BB77E] text-[24px] font-bold leading-5">
              How can we assist you?
            </h4>
            <h1 className="mb-8 text-5xl font-bold text-[#253D4E] dark:text-white">
              Let us know how we can support you
            </h1>
            <p className="text-base font-normal leading-6 mb-5 text-[#7E7E7E] dark:text-white">
              We're here to help! Please tell us what you need assistance with.
            </p>
            <p className="text-base font-normal leading-6 mb-5 text-[#7E7E7E] dark:text-white">
              We're committed to providing the best support possible. Let us
              know how we can make your experience better.
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex flex-wrap">
              <div className="w-1/2 mb-4 px-4">
                <h5 className="mb-5 text-xl font-bold text-[#253D4E]">
                  <span className="bg-yellow-200 px-2 py-1 rounded">
                    01. Leave Feedback
                  </span>
                </h5>
                <p className="dark:text-white">
                  Share your thoughts and feedback with us. Your input helps us
                  improve our services.
                </p>
              </div>
              <div className="w-1/2 mb-4 px-4">
                <h5 className="mb-5 text-xl font-bold text-[#253D4E]">
                  <span className="bg-blue-200 px-2 py-1 rounded">
                    02. Employer Services
                  </span>
                </h5>
                <p className="dark:text-white">
                  Explore our range of services designed to meet the needs of
                  employers like you.
                </p>
              </div>
              <div className="w-1/2 mb-4 px-4">
                <h5 className="mb-5 text-xl font-bold text-[#29A56C]">
                  <span className="bg-green-200 px-2 py-1 rounded">
                    03. Billing Inquiries
                  </span>
                </h5>
                <p className="dark:text-white">
                  Have questions about billing? We're here to help clarify any
                  concerns you may have.
                </p>
              </div>
              <div className="w-1/2 px-4">
                <h5 className="mb-5 text-xl font-bold text-[#253D4E]">
                  <span className="bg-orange-200 px-2 py-1 rounded">
                    04. General Questions
                  </span>
                </h5>
                <p className="dark:text-white">
                  Ask us anything! Our team is ready to answer your general
                  inquiries and provide assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13834.385833169594!2d77.84789801767802!3d29.904726281264118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3872d4ee97f%3A0x95ad9a09ddc53e3f!2sRoorkee%20Institute%20of%20Technology%20(RIT)!5e0!3m2!1sen!2sin!4v1729151236892!5m2!1sen!2sin"
            width="98%"
            height="450"
            style={{ border: 0, margin: "0 auto" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md overflow-hidden shadow-xl dark:bg-gray-900"
          />
        </div>
        <div className="contact-details  w-[85%] mx-auto flex items-center justify-between my-20 ">
          <div className="w-[33%]">
            <h4 className="mb-[15px] text-brand text-[24px] font-bold leading-4  dark:text-white">
              Office
            </h4>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              Roorkee, Uttrakhand
            </span>
            <br />
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              247667
            </span>
            <br />
            <abbr title="Phone" className="cursor-help text-[#7e7e7e]">
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Phone
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              +91 7667499479
            </span>
            <br />
            <abbr title="Email" className="cursor-help text-[#7e7e7e]">
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Email:
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
              miteshanshu1@gmail.com
            </span>
            <br />
            <Link
              to= {`https://www.google.com/maps/place/Roorkee,+Uttarakhand+247667/@29.8594,77.8959,12z`}
              className="btn btn-sm font-bold text-white mt-[20px] rounded-md btn-shadow-brand hover-up custom-inline-flex"
            >
              <MdPlace className="mr-1" />
              View map
            </Link>
          </div>
          <div className="w-[33%]">
            <h4 className="mb-[15px] text-brand text-[24px] font-bold leading-4">
              Studio
            </h4>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              Roorkee, Uttrakhand
            </span>
            <br />
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              247667
            </span>{" "}
            <br />
            <abbr title="Phone" className="cursor-help text-[#7e7e7e]">
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Phone
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              +91 9507852706
            </span>
            <br />
            <abbr
              title="Email"
              className="cursor-help text-[#7e7e7e] dark:text-white"
            >
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Email:
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
              miteshanshu1@gmail.com
            </span>
            <br />
            <Link
  to={`https://www.google.com/maps/place/Roorkee,+Uttarakhand+247667/@29.8594,77.8959,12z`}
  target="_blank"
  className="btn btn-sm font-bold text-white mt-[20px] rounded-md btn-shadow-brand hover-up custom-inline-flex"
>
  <MdPlace className="mr-1" />
  View map
</Link>
          </div>
          <div className="w-[33%]">
            <h4 className="mb-[15px] text-brand text-[24px] font-bold leading-4">
              Shop
            </h4>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              Roorkee, Uttrakhand
            </span>
            <br />
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              247667
            </span>
            <br />
            <abbr title="Phone" className="cursor-help text-[#7e7e7e]">
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Phone
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] dark:text-white">
              +91 7667499479
            </span>
            <br />
            <abbr
              title="Email"
              className="cursor-help text-[#7e7e7e] dark:text-white"
            >
              <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
                Email:
              </span>
            </abbr>
            <span className="text-[0.9rem] font-normal leading-6 text-[#7E7E7E] mr-1 dark:text-white">
              miteshanshu1@gmail.com
            </span>
            <br />
            <Link
              to={`https://www.google.com/maps/place/Roorkee,+Uttarakhand+247667/@29.8594,77.8959,12z`}
              className="btn btn-sm font-bold text-white mt-[20px] rounded-md btn-shadow-brand hover-up custom-inline-flex"
            >
              <MdPlace className="mr-1" />
              View map
            </Link>
          </div>
        </div>
        <div className="w-[85%] mx-auto mt-20 flex items-center justify-between">
          <div className="left-form w-[55%]">
            <h5 className="text-brand mb-[10px] text-xl font-bold">
              Contact form
            </h5>
            <h2 className="mb-[10px] text-[#253D4E] font-bold  text-[40px] dark:text-white">
              Drop Us a Line
            </h2>
            <p className="text-muted mb-[30px] font-[14px] ">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form
              className="contact-form-style mt-30"
              id="contact-form"
              action="#"
              method="post"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="input-style mb-[5px]">
                    <input
                      name="name"
                      placeholder="First Name"
                      type="text"
                      className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <div className="input-style mb-[5px]">
                    <input
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <div className="input-style mb-[5px]">
                    <input
                      name="telephone"
                      placeholder="Your Phone"
                      type="tel"
                      className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <div className="input-style mb-[5px]">
                    <input
                      name="subject"
                      placeholder="Subject"
                      type="text"
                      className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="textarea-style mb-[30px] mt-5">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-white"
                  ></textarea>
                </div>
                <button
                  className="submit submit-auto-width bg-indigo-500 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline contact-from-button"
                  type="submit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="right w-[40%]">
            <img src={contactImg} alt="contact-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
