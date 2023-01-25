import React from "react";
import { jsPDF } from "jspdf";
const Resume = () => {
  function SaveResume() {
    const doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/j561BpS/Maged-CV-C-1-1.png",
      "PNG",
      0,
      0,
      417,
      653
    );
    doc.save("magedResume.pdf");
  }

  return (
    <div>
      <button
        className="p-2 mx-auto flex justify-center items-center my-6 duration-300 hover:scale-105"
        onClick={SaveResume}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
