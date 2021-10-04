import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FaqPanel.css";

function FaqPanel(props) {
  const { handleChange, expanded, index, title, content } = props;
  return (
    <Accordion
      index={index}
      expanded={expanded === index}
      onChange={handleChange(index)}
      className="accordionTitleContainer"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id={`panel-${index}`}
      >
        <Typography sx={{ width: "100%", flexShrink: 0 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqPanel;
