import React from "react";
import OverViewCard from "./Card/OverViewCard";

const OverView = ({ selectDifficulty, selectQuarter }) => {
  const readModules = [
    {
      head: "1st Quarter Modules",
      details:
        "Pre-colonial Philippine literature, various reading styles, ways of determining word meaning, the sounds of English and the prosodic features of speech, and correct subject-verb agreement.",
      routeHeader: "Proceed to First Quarter",
      pic: "green",
    },
    {
      head: "2nd Quarter Modules",
      details:
        "Philippine literature during the Period of Apprenticeship, listening and viewing strategies, difference between literal and figurative language, ways to extract and condense information, and oral communication.",
      routeHeader: "Proceed to Second Quarter",
      pic: "blue",
    },
    {
      head: "3rd Quarter Modules",
      details:
        "Philippine literature in the Period of Emergence, strategies in listening to and viewing of texts, word relationships, informative speech forms, passive/active voice, simple, past and past perfect tenses, and sentence connectors.",
      routeHeader: "Proceed to Third Quarter",
      pic: "yellow",
    },
    {
      head: "4th Quarter Modules",
      details:
        "Contemporary Philippine literature, various text types, contextual cues, appropriate and polite oral language, stance, and behavior, and use of imperatives, prepositions, verbs, and wh-questions.",
      routeHeader: "Proceed to Fourth Quarter",
      pic: "violet",
    },
  ];

  const readAssessments = [
    {
      head: "1st Quarter Assessments",
      details:
        "This assessment covers the following: pre-colonial Philippine literature, reading styles, ways of determining word meaning, sounds of English and speech, and subject-verb agreement.",
      routeHeader: "Start 1st Quarter Assessment",
      pic: "1qbg",
    },
    {
      head: "2nd Quarter Assessments",
      details:
        "This assessment covers the following: Philippine literature during the Period of Apprenticeship, listening and viewing strategies, literal and figurative language, ways to extract andcondense information, and oral communication.",
      routeHeader: "Start 2nd Quarter Assessment",
      pic: "2qbg",
    },
    {
      head: "3rd Quarter Assessments",
      details:
        "This assessment covers the following: Philippine literature in the Period of Emergence, strategies in listening to and viewing of texts, word relationships, informative speech forms, passive/active voice, tenses, and sentence connectors.",
      routeHeader: "Start 3rd Quarter Assessment",
      pic: "3qbg",
    },
    {
      head: "4th Quarter Assessments",
      details:
        "This assessment covers the following: Contemporary Philippine literature, extended text types, lexical and contextual cues, appropriate and polite oral language, stance, and behavior, and use of imperatives, prepositions, verbs, and wh-questions.",
      routeHeader: "Start 4th Quarter Assessment",
      pic: "4qbg",
    },
  ];
  const selectedView =
    window.location.pathname === "/modules" ? readModules : readAssessments;

  const selectedRoute =
    window.location.pathname === "/modules" ? "./categories" : "./test";

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <OverViewCard
          text={selectedView}
          selectedRoute={selectedRoute}
          selectDifficulty={selectDifficulty}
          selectQuarter={selectQuarter}
        />
      </div>
    </div>
  );
};

export default OverView;
