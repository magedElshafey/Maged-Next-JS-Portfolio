import React from "react";

const ContactForm = () => {
  return (
    <div className="p-4 rounded-xl shadow-lg shadow-gray-400 h-auto">
      <div className="flex items-center gap-4 mb-6 w-full">
        <div>
          <label htmlFor="name" className="block uppercase mb-2">
            name
          </label>
          <input
            id="name"
            type="text"
            className=" h-8 rounded-lg focus:outline-none  border-2 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="name" className="block uppercase mb-2">
            phone
          </label>
          <input
            id="phone"
            type="number"
            className="h-8 rounded-lg focus:outline-none border-2 border-gray-200"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block uppercase mb-2">
          email
        </label>
        <input
          id="phone"
          type="text"
          className="h-8 rounded-lg focus:outline-none w-full border-2 border-gray-200"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block uppercase mb-2">
          subject
        </label>
        <input
          id="phone"
          type="text"
          className="h-8 rounded-lg focus:outline-none w-full border-2 border-gray-200"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block uppercase mb-2">
          message
        </label>
        <textarea
          id="phone"
          type="text"
          className=" h-56 rounded-lg focus:outline-none w-full border-2 border-gray-200"
        />
      </div>
      <button className="uppercase text-white rounded-xl p-4 flex items-center justify-center w-full mx-auto">
        send message
      </button>
    </div>
  );
};

export default ContactForm;
