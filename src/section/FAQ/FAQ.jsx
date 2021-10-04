import React from "react";
import "./FAQ.css";
import FaqPanel from "components/FaqPanel/FaqPanel";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);
  const faqs = useSelector((state) => state.faqs);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqsMarkup = faqs.map((faq, index) => {
    return (
      <FaqPanel
        key={index}
        index={index}
        title={faq.title}
        content={faq.content}
        expanded={expanded}
        handleChange={handleChange}
      />
    );
  });

  return (
    <div className="faqContainer">
      <div className="container faqContentContainer">
        <div className="faqTitle">FAQs</div>
        {faqsMarkup}
      </div>
    </div>
  );
};

export default FAQ;
