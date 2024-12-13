/* eslint-disable react/prop-types */
import aboutImg1 from "../assets/about-2.png";
import aboutImg2 from "../assets/about-3.png";
import aboutImg3 from "../assets/about-4.png";
import aboutImg from "../assets/about-1.png";
import "react-multi-carousel/lib/styles.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon-4.svg";
import icon5 from "../assets/icon-5.svg";
import icon6 from "../assets/icon-6.svg";
import about5 from "../assets/about-5.png";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import clinet1 from "../assets/clinet1.png";
import clinet2 from "../assets/client2.jpg";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const cardData = [
  {
    id: 1,
    icon: icon1,
    title: "Best Prices & Offers",
    description:
      "We offer competitive prices and exclusive deals, ensuring you get the best value for your money.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Wide Assortment",
    description:
      "Our wide range of products caters to every need and preference, making it easy to find what you're looking for.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Free Delivery",
    description:
      "We provide free shipping on all orders, making your online shopping experience more cost-effective.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Easy Returns",
    description:
      "Our hassle-free return policy ensures a smooth and convenient return process for our customers.",
  },
  {
    id: 5,
    icon: icon5,
    title: "100% Satisfaction",
    description:
      "We strive to deliver excellent service and ensure 100% satisfaction for all our customers.",
  },
  {
    id: 6,
    icon: icon6,
    title: "Great Daily Deals",
    description:
      "Our daily deals offer significant savings on a wide variety of products, giving you great value every day.",
  },
];
const aboutCount = [
  {
    count: 4,
    title: "Years of Learning and Discovery",
  },
  {
    count: 25,
    title: "Team Contributions Made",
  },
  {
    count: 10,
    title: "Valuable Skills Gained",
  },
  {
    count: 8280,
    title: "Hours of Development",
  },
  {
    count: 100,
    title: "Opportunities to Explore",
  },
];

const About = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewPortEntered(true);
        } else {
          setViewPortEntered(false);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="about-top pt-16 mb-[50px] dark:text-white">
        <div className="w-[85%] mx-auto flex items-center">
          <div className="flex-none w-1/2">
            <img src={aboutImg} alt="about" className="rounded-2xl w-[80%] h-[85%]" />
          </div>
          <div className="w-1/2">
            <div className="">
              <h2 className="text-[#253D4E] font-semibold leading-[1.2] text-[40px] mb-4 dark:text-white">
                Welcome to Wallet Wing!
              </h2>
              <p className="mb-4 dark:text-white">
                We’re thrilled to have you here! Wallet Wing is your go-to
                e-commerce platform, designed to make shopping easier, more
                enjoyable, and tailored to what you need. Our goal? To create an
                experience that’s as innovative as it is effortless.
              </p>
              <p className="mb-4 dark:text-white">
                Our mission is simple: to keep upgrading your shopping
                experience with fresh ideas and the latest technology. We’re
                always exploring new ways to make Wallet Wing better, so you can
                count on us to stay ahead in the e-commerce world.
              </p>
              <p className="mb-4 dark:text-white">
                At the heart of Wallet Wing, it’s all about you. We’re here to
                build lasting relationships with our customers and ensure you’re
                fully satisfied every time you shop with us.
              </p>
              <p className="mb-[50px] dark:text-white">
                After all, our success is directly linked to the trust and
                happiness of our community. Let’s make shopping meaningful
                together!
              </p>
              <div className="relative">
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  infinite
                  autoPlay
                  draggable={false}
                  autoPlaySpeed={2500}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  <div className="p-2">
                    <img src={aboutImg1} alt="" />
                  </div>
                  <div className="p-2">
                    <img src={aboutImg2} alt="" />
                  </div>
                  <div className="p-2">
                    <img src={aboutImg3} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center about-card mb-[90px] mt-[90px] w-[85%] mx-auto dark:text-white">
        <h2 className="title style-3 mb-[40px] dark:text-white">
          What We Provide?
        </h2>
        <div className="flex justify-between flex-wrap">
          {cardData.map((card, index) => (
            <div key={index} className="w-[30%] mb-[24px]">
              <div className="featured-card dark:bg-[#111827]  flex flex-col justify-center items-center">
                <img src={card.icon} alt="" />
                <h4 className="dark:text-white">{card.title}</h4>
                <p className="dark:text-white">{card.description}</p>
                <Link to={"#"}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-[85%] flex items-center mb-[60px] dark:text-white">
        <div style={{ "width": "730px", "paddingRight": "10rem"}}>
          <img src={about5} alt="girl" style={{ "width": "100%" , "borderRadius":"15px" }} />
        </div>

        <div className="partner-details w-[33%]">
          <h4 className="mb-[15px] text-muted text-[24px] dark:text-white">
            Our performance
          </h4>
          <h1 className="heading-1 mb-[30px] dark:text-white">
            Wallet Wing - Unlock Easy Shopping!
          </h1>
          <p className="dark:text-white">
            Our project aims to make online shopping a breeze for everyone.
            We’re all about creating a fun and user-friendly e-commerce platform
            that simplifies the shopping experience for both businesses and
            customers.
          </p>
          <p className="dark:text-white">
            Imagine a world where shopping is easy, efficient, and enjoyable!
            With Wallet Wing, we’re dedicated to delivering top-notch service
            and support, helping you effortlessly manage your online store no
            matter the industry. Our goal is to empower you to thrive in the
            exciting world of e-commerce while providing a seamless experience
            that keeps your customers coming back for more!
          </p>
          <p className="dark:text-white">
            Join us on this journey to revolutionize online shopping!
          </p>
        </div>
      </div>

      <div className="mx-auto w-[85%] flex items-center justify-around mt-[20px] mb-[20px] dark:text-white">
        <div className="w-[30%] dark:text-white">
          <h3 className="text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white">
            About Me
          </h3>
          <p className="dark:text-white">
            I’m a final-year B.Tech CSE student at the Roorkee Institute of
            Technology, interested in technology and innovation. I’m working on
            a project aimed at improving the e-commerce experience for users.
          </p>
        </div>
        <div className="w-[30%] dark:text-white">
          <h3 className="text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white">
            Project Overview
          </h3>
          <p className="dark:text-white">
            This project has allowed me to explore the unique needs and
            challenges various industries face. With this understanding, I hope
            to develop a platform that addresses these challenges and supports
            users effectively.
          </p>
        </div>
        <div className="w-[30%] dark:text-white">
          <h3 className="text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white">
            Vision
          </h3>
          <p className="dark:text-white">
            The goal is to create a smoother online shopping experience for
            everyone. I want to help businesses thrive in the digital age while
            making shopping easier and more enjoyable for consumers. Let’s work
            together to simplify online shopping!
          </p>
        </div>
      </div>

      <div
        className="about-count flex items-center justify-between my-[30px] dark:text-white"
        ref={countUpRef}
      >
        {aboutCount.map((count, index) => (
          <div
            key={index}
            className="w-[20%] text-center text-index dark:text-white"
          >
            <h1 className="heading-1 dark:text-white">
              <CountUp
                end={viewPortEntered ? count.count : 0}
                start={0}
                suffix={count.plus ? "+" : "+"}
                duration={5}
                redraw={true}
              >
                {({ countUpRef, start }) => {
                  if (viewPortEntered) {
                    start();
                  }
                  return <span ref={countUpRef} />;
                }}
              </CountUp>
            </h1>
            <h4>{count.title}</h4>
          </div>
        ))}
      </div>

      <div className="mx-auto w-[85%] mt-[60px] dark:text-white">
        <h2 className="title style-3 mb-[40px]  text-center dark:text-white">
          Acknowledgments
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="left w-[35%] dark:text-white">
            <h6 className="mb-[5px] text-brand font-bold dark:text-white">
              Our Team
            </h6>
            <h1 className="mb-[30px] text-[#253D4E] font-bold leading-snug text-[48px] dark:text-white">
              Meet My Support Crew
            </h1>
            <p className="text-base font-normal leading-6 mb-[30px] text-[#7E7E7E] dark:text-white">
              This project wouldn’t be what it is without the awesome support
              I’ve received. A huge thanks to Aanandita for coming up with the
              name Wallet Wing—it’s perfect! I also appreciate Rishabh for
              stepping in to help whenever needed.
            </p>
            <p className="text-base font-normal leading-6 mb-[30px] text-[#7E7E7E] dark:text-white">
              I’m excited about creating practical solutions for the e-commerce
              space. I believe that collaboration and creativity can make a real
              difference, and I’m always eager to enhance the experience for
              everyone involved.
            </p>
          </div>
          <div className="right w-[60%] flex">
            <div className="w-1/2 p-2">
              <div className="team-card">
                <img src={clinet1} alt="" className="w-full rounded-2xl" />
                <div className="content text-center">
                  <h4 className="mb-5 ">Aanandita</h4>
                  <span className="text-[16px] "></span>
                  <div className="social-network mt-5 flex justify-center space-x-2 gap-3">
                    <Link to="#">
                      <FaTwitter size={20} color="#29A56C" />
                    </Link>
                    <Link to="#">
                      <FaInstagram size={20} color="#29A56C" />
                    </Link>
                    <Link to="#">
                      <FaYoutube size={20} color="#29A56C" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="team-card">
                <img src={clinet2} alt="" className="w-full rounded-2xl" />
                <div className="content text-center">
                  <h4 className="mb-5 ">Rishabh</h4>
                  <span className="text-[18px] "></span>
                  <div className="social-network mt-5 flex justify-center space-x-2 gap-3">
                    <Link to="#">
                      <FaTwitter size={20} color="#29A56C" />
                    </Link>
                    <Link to="#">
                      <FaInstagram size={20} color="#29A56C" />
                    </Link>
                    <Link to="#">
                      <FaYoutube size={20} color="#29A56C" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CustomLeftArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white"
  >
    <FiArrowLeft />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white"
  >
    <FiArrowRight />
  </button>
);

export default About;
