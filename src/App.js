import logo from "./logo.svg";
import "./App.css";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AlignContentRow from "./align-content-row";
import AlignContentColumn from "./align-content-column";
import WrapRow from "./wrap-row";
import WrapColumn from "./wrap-column";
import SyntaxTemplate from "./syntax-template";
import RowHorizontal from "./row-horizontal";
import RowVertical from "./row-vertical";
import ColumnHorizontal from "./column-horisontal";
import ColumnVertical from "./column-vertical";

function App() {
  const [currentView, setCurrentView] = useState("row");

  useEffect(() => {
    window.VANTA.NET({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: document.body.scrollHeight,
      minWidth: window.innerWidth,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "#488a87",
      backgroundColor: 0x0,
      points: 7.0,
      maxDistance: 19.0,
      spacing: 20.0,
    });
  }, []);

  const handleRowClick = () => {
    setCurrentView("row");
  };

  const handleColumnClick = () => {
    setCurrentView("column");
  };

  const handleRowReverseClick = () => {
    setCurrentView("row-reverse");
  };

  const handleColumnReverseClick = () => {
    setCurrentView("column-reverse");
  };
  return (
    <div className="main-div">
      <div>
        <Toaster />
      </div>
      <h1 className="main-heading">Flex cheat sheet</h1>
      <span>Click to copy any style</span>
      <h2>Flex your container</h2>
      <div className="display-flex-container">
        <SyntaxTemplate syntax={"display:flex"} hideGraphic={true} />
      </div>
      <h2>Choose your direction</h2>

      <div className="row-and-col-container">
        <div className="row">
          <SyntaxTemplate
            className={currentView === "row" ? "button-glow" : ""}
            syntax={"flex-direction: row;"}
            hideGraphic={true}
            onClick={handleRowClick}
          />
          <SyntaxTemplate
            className={currentView === "row-reverse" ? "button-glow" : ""}
            syntax={"flex-direction: row-reverse;"}
            hideGraphic={true}
            onClick={handleRowReverseClick}
          />
        </div>
        <div className="col">
          <SyntaxTemplate
            className={currentView === "column" ? "button-glow" : ""}
            syntax={"flex-direction: column;"}
            hideGraphic={true}
            onClick={handleColumnClick}
          />
          <SyntaxTemplate
            className={currentView === "column-reverse" ? "button-glow" : ""}
            syntax={"flex-direction: column-reverse;"}
            hideGraphic={true}
            onClick={handleColumnReverseClick}
          />
        </div>
      </div>

      <div className="alignment-container-row">
        <div className="vertical-alignment-container">
          <h2>Vertical Alignment</h2>
          <div className="vertical">
            {currentView === "row" && <RowVertical />}
            {currentView === "row-reverse" && <RowVertical isReverse={true} />}
            {currentView === "column" && <ColumnVertical />}
            {currentView === "column-reverse" && (
              <ColumnVertical isReverse={true} />
            )}
          </div>
        </div>

        <div className="horizontal-alignment-container">
          <h2>Horizontal Alignment</h2>
          <div className="horizontal">
            {currentView === "row" && <RowHorizontal />}
            {currentView === "row-reverse" && (
              <RowHorizontal isReverse={true} />
            )}
            {currentView === "column" && <ColumnHorizontal />}
            {currentView === "column-reverse" && (
              <ColumnHorizontal isReverse={true} />
            )}
          </div>
        </div>
      </div>

      <div className="wrap-align">
        <div className="flex-wrap-container">
          <h2>Wrap to multiple lines</h2>
          {currentView === "row" && <WrapRow />}
          {currentView === "row-reverse" && <WrapRow isReverse={true} />}
          {currentView === "column" && <WrapColumn />}
          {currentView === "column-reverse" && <WrapColumn isReverse={true} />}
        </div>

        <div className="align-content-container">
          <h2>Align multiple lines</h2>
          {currentView === "row" && <AlignContentRow />}
          {currentView === "row-reverse" && (
            <AlignContentRow isReverse={true} />
          )}
          {currentView === "column" && <AlignContentColumn />}
          {currentView === "column-reverse" && (
            <AlignContentColumn isReverse={true} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
