import ReactDOM from "react-dom/client";
import "./index.css";

import ResumeHeader from "./Resume_header";
import ResumePersonInfo from "./Resume_Person_Info";
import Education from "./education";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ResumeHeader />
    <ResumePersonInfo />
    <Education />
  </>,
);
