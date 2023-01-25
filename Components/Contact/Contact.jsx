import React from "react";
import Title from "../Utilites/Title";
import SubTitle from "../Utilites/SubTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { RxDoubleArrowUp } from "react-icons/rx";
import Link from "next/link";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1640px] mx-auto px-4 py-20">
      <Title
        title="contact"
        style="text-blue-600 uppercase tracking-widest text-2xl"
      />
      <SubTitle title="get in touch" />
      <div className="grid md:grid-cols-2 gap-12 w-full mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="shadow-gray-400 rounded-full p-3 flex items-center justify-center mt-12 text-blue-400 cur">
        <Link href="/">
          <RxDoubleArrowUp size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
