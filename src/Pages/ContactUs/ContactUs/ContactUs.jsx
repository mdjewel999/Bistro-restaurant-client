import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import contactImg from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import OurLocation from "../OurLocation/OurLocation";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      {/* main cover */}
      <Cover img={contactImg} title="CONTACT US"></Cover>

      {/*  OurLocation Area*/}
      <SectionTitle
        subhedding={"Visit Us"}
        hedding={"OUR LOCATION"}
      ></SectionTitle>
      <OurLocation></OurLocation>

      {/*  Contact Form*/}
      <SectionTitle
        subhedding={"Send Us a Message"}
        hedding={"CONTACT FORM"}
      ></SectionTitle>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactUs;
