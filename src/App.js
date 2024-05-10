import logo from "./logo.svg";
import "./App.css";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  });

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

function AlignContentRow(props) {
  const flexDirection = props.isReverse ? "row-reverse" : "row";
  return (
    <>
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: flex-start;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: flex-end;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "flex-end",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: center;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: space-between;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "space-between",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: space-around;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "space-around",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"align-content: stretch;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "stretch",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "50%" }}
      />
    </>
  );
}

function AlignContentColumn(props) {
  const flexDirection = props.isReverse ? "column-reverse" : "column";
  return (
    <>
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: flex-start;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: flex-end;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "flex-end",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: center;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: space-between;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "space-between",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: space-around;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "space-around",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"align-content: stretch;"}
        graphicStyle={{
          flexWrap: "wrap",
          alignContent: "stretch",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px", width: "40%" }}
      />
    </>
  );
}

function WrapRow(props) {
  const flexDirection = props.isReverse ? "row-reverse" : "row";

  return (
    <>
      <SyntaxTemplate
        lines={7}
        syntax={"flex-wrap: nowrap;"}
        graphicStyle={{ flexWrap: "nowrap", flexDirection: flexDirection }}
      />
      <SyntaxTemplate
        lines={12}
        syntax={"flex-wrap: wrap;"}
        graphicStyle={{
          flexWrap: "wrap",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "50%" }}
      />
      <SyntaxTemplate
        syntax={"flex-wrap: wrap-reverse;"}
        lines={12}
        graphicStyle={{
          flexWrap: "wrap-reverse",
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "50%" }}
      />
    </>
  );
}

function WrapColumn(props) {
  const flexDirection = props.isReverse ? "column-reverse" : "column";
  return (
    <>
      <SyntaxTemplate
        lines={7}
        syntax={"flex-wrap: nowrap;"}
        graphicStyle={{ flexWrap: "nowrap", flexDirection: flexDirection }}
        graphicLineStyle={{ width: "100%" }}
      />
      <SyntaxTemplate
        lines={10}
        syntax={"flex-wrap: wrap;"}
        graphicStyle={{
          flexWrap: "wrap",
          flexDirection: flexDirection,
          justifyContent: "flex-start",
        }}
        graphicLineStyle={{
          height: "2px",
          width: "40%",
        }}
      />
      <SyntaxTemplate
        syntax={"flex-wrap: wrap-reverse;"}
        lines={10}
        graphicStyle={{
          justifyContent: "flex-start",
          flexWrap: "wrap-reverse",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{
          height: "2px",
          width: "40%",
        }}
      />
    </>
  );
}

function SyntaxTemplate(props) {
  const onCopyClick = () => {
    navigator.clipboard.writeText(props.syntax);
    toast.success("Style copied to clipboard", {
      duration: 2500,
      position: "top-right",
      id: props.syntax,

      iconTheme: {
        primary: "#acf9fc",
        secondary: "#000",
      },

      style: {
        backgroundColor: "#0094e924",
        color: "white",
        fontSize: "20px",
        fontFamily: "Avenir",
        fontWeight: "bold",
      },
      className: "",
    });
  };

  const lineArray = [];

  const numberOfLines = props.lines ? props.lines : 3;

  for (let i = 0; i < numberOfLines; i++) {
    lineArray.push(
      <div className="graphic-line" style={props.graphicLineStyle}></div>
    );
  }

  return (
    <div className="syntax-info-container" onClick={props.onClick}>
      <div
        onClick={onCopyClick}
        className={"template " + props.className}
        style={props.hideGraphic ? { flexBasis: "100%" } : {}}
      >
        {props.syntax}
      </div>
      {props.hideGraphic ? (
        ""
      ) : (
        <div className="graphic" style={props.graphicStyle}>
          {lineArray}
        </div>
      )}
    </div>
  );
}

function RowHorizontal(props) {
  const flexDirection = props.isReverse ? "row-reverse" : "row";

  return (
    <>
      <SyntaxTemplate
        syntax={"justify-content: flex-start;"}
        graphicStyle={{
          justifyContent: "flex-start",
          flexDirection: flexDirection,
        }}
      />
      <SyntaxTemplate
        syntax={"justify-content: flex-end;"}
        graphicStyle={{
          justifyContent: "flex-end",
          flexDirection: flexDirection,
        }}
      />
      <SyntaxTemplate syntax={"justify-content: center;"} />
      <SyntaxTemplate
        syntax={"justify-content: space-between;"}
        graphicStyle={{
          justifyContent: "space-between",
          flexDirection: flexDirection,
        }}
      />
      <SyntaxTemplate
        syntax={"justify-content: space-around;"}
        graphicStyle={{
          justifyContent: "space-around",
          flexDirection: flexDirection,
        }}
      />
      <SyntaxTemplate
        syntax={"justify-content: space-evenly;"}
        graphicStyle={{
          justifyContent: "space-evenly",
          flexDirection: flexDirection,
        }}
      />
    </>
  );
}

function RowVertical(props) {
  const flexDirection = props.isReverse ? "row-reverse" : "row";

  return (
    <>
      <SyntaxTemplate
        lines={7}
        syntax={"align-items: flex-start;"}
        graphicStyle={{
          alignItems: "flex-start",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={7}
        syntax={"align-items: flex-end;"}
        graphicStyle={{
          alignItems: "flex-end",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={7}
        syntax={"align-items: center;"}
        graphicStyle={{
          alignItems: "center",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={7}
        syntax={"align-items: baseline;"}
        graphicStyle={{
          alignItems: "baseline",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={7}
        syntax={"align-items: stretch;"}
        graphicStyle={{
          alignItems: "stretch",
          flexDirection: flexDirection,
        }}
        graphicLineStyle={{ height: "100%" }}
      />
    </>
  );
}

function ColumnHorizontal(props) {
  const flexDirection = props.isReverse ? "column-reverse" : "column";

  return (
    <>
      <SyntaxTemplate
        lines={5}
        syntax={"align-items: flex-start;"}
        graphicStyle={{
          flexDirection: flexDirection,
          alignItems: "flex-start",
        }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={5}
        syntax={"align-items: flex-end;"}
        graphicStyle={{ flexDirection: flexDirection, alignItems: "flex-end" }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={5}
        syntax={"align-items: center;"}
        graphicStyle={{ flexDirection: flexDirection, alignItems: "center" }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={5}
        syntax={"align-items: baseline;"}
        graphicStyle={{ flexDirection: flexDirection, alignItems: "baseline" }}
        graphicLineStyle={{ height: "2px" }}
      />
      <SyntaxTemplate
        lines={5}
        syntax={"align-items: stretch;"}
        graphicStyle={{ flexDirection: flexDirection, alignItems: "stretch" }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
    </>
  );
}

function ColumnVertical(props) {
  const flexDirection = props.isReverse ? "column-reverse" : "column";

  return (
    <>
      <SyntaxTemplate
        syntax={"justify-content: flex-start;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "flex-start",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
      <SyntaxTemplate
        syntax={"justify-content: flex-end;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "flex-end",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
      <SyntaxTemplate
        syntax={"justify-content: center;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "center",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
      <SyntaxTemplate
        syntax={"justify-content: space-between;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "space-between",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
      <SyntaxTemplate
        syntax={"justify-content: space-around;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "space-around",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
      <SyntaxTemplate
        syntax={"justify-content: space-evenly;"}
        graphicStyle={{
          flexDirection: flexDirection,
          justifyContent: "space-evenly",
        }}
        graphicLineStyle={{ height: "2px", width: "100%" }}
      />
    </>
  );
}

export default App;
