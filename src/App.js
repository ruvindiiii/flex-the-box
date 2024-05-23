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
import ColumnHorizontal from "./column-horizontal";
import ColumnVertical from "./column-vertical";
import { FaGithub } from "react-icons/fa6";
import SlotCounter from "react-slot-counter";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBd2kSRzZB1ecj20W9TR8qkUFOA4feQtYY",
  authDomain: "flex-cheat-sheet.firebaseapp.com",
  databaseURL: "https://flex-cheat-sheet-default-rtdb.firebaseio.com",
  projectId: "flex-cheat-sheet",
  storageBucket: "flex-cheat-sheet.appspot.com",
  messagingSenderId: "916234067213",
  appId: "1:916234067213:web:5a25130103f346d746a444",
  measurementId: "G-SDTJYKKZLE",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App(props) {
  const [currentView, setCurrentView] = useState("row");
  const [clickCount, setClickCount] = useState(1);

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

    const clickCountRef = ref(db, "click-count");
    onValue(clickCountRef, (snapshot) => {
      const data = snapshot.val();
      setClickCount(data);
    });
  }, []);

  const handleClickCount = () => {
    setClickCount(clickCount + 1);
    set(ref(db, "click-count"), clickCount + 1);
  };

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
        <SyntaxTemplate
          syntax={"display:flex"}
          hideGraphic={true}
          onCopy={handleClickCount}
        />
      </div>
      <h2>Choose your direction</h2>

      <div className="row-and-col-container">
        <div className="row">
          <SyntaxTemplate
            onCopy={handleClickCount}
            className={currentView === "row" ? "button-glow" : ""}
            syntax={"flex-direction: row;"}
            hideGraphic={true}
            onClick={handleRowClick}
          />
          <SyntaxTemplate
            onCopy={handleClickCount}
            className={currentView === "row-reverse" ? "button-glow" : ""}
            syntax={"flex-direction: row-reverse;"}
            hideGraphic={true}
            onClick={handleRowReverseClick}
          />
        </div>
        <div className="col">
          <SyntaxTemplate
            onCopy={handleClickCount}
            className={currentView === "column" ? "button-glow" : ""}
            syntax={"flex-direction: column;"}
            hideGraphic={true}
            onClick={handleColumnClick}
          />
          <SyntaxTemplate
            onCopy={handleClickCount}
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
            {currentView === "row" && (
              <RowVertical onCopySyntax={handleClickCount} />
            )}
            {currentView === "row-reverse" && (
              <RowVertical isReverse={true} onCopySyntax={handleClickCount} />
            )}
            {currentView === "column" && (
              <ColumnVertical onCopySyntax={handleClickCount} />
            )}
            {currentView === "column-reverse" && (
              <ColumnVertical
                isReverse={true}
                onCopySyntax={handleClickCount}
              />
            )}
          </div>
        </div>

        <div className="horizontal-alignment-container">
          <h2>Horizontal Alignment</h2>
          <div className="horizontal">
            {currentView === "row" && (
              <RowHorizontal onCopySyntax={handleClickCount} />
            )}
            {currentView === "row-reverse" && (
              <RowHorizontal isReverse={true} onCopySyntax={handleClickCount} />
            )}
            {currentView === "column" && (
              <ColumnHorizontal onCopySyntax={handleClickCount} />
            )}
            {currentView === "column-reverse" && (
              <ColumnHorizontal
                isReverse={true}
                onCopySyntax={handleClickCount}
              />
            )}
          </div>
        </div>
      </div>

      <div className="wrap-align">
        <div className="flex-wrap-container">
          <h2>Wrap to multiple lines</h2>
          {currentView === "row" && <WrapRow onCopySyntax={handleClickCount} />}
          {currentView === "row-reverse" && (
            <WrapRow isReverse={true} onCopySyntax={handleClickCount} />
          )}
          {currentView === "column" && (
            <WrapColumn onCopySyntax={handleClickCount} />
          )}
          {currentView === "column-reverse" && (
            <WrapColumn isReverse={true} onCopySyntax={handleClickCount} />
          )}
        </div>

        <div className="align-content-container">
          <h2>Align multiple lines</h2>
          {currentView === "row" && (
            <AlignContentRow onCopySyntax={handleClickCount} />
          )}
          {currentView === "row-reverse" && (
            <AlignContentRow isReverse={true} onCopySyntax={handleClickCount} />
          )}
          {currentView === "column" && (
            <AlignContentColumn onCopySyntax={handleClickCount} />
          )}
          {currentView === "column-reverse" && (
            <AlignContentColumn
              isReverse={true}
              onCopySyntax={handleClickCount}
            />
          )}
        </div>
      </div>
      <div className="footer">
        <hr></hr>
        <SlotCounter
          value={clickCount}
          sequentialAnimationMode
          useMonospaceWidth
        />

        <h3>Made by Ruvi</h3>
        <h3 className="git">
          <a href="https://github.com/ruvindiiii">
            <FaGithub size={"2.3em"} />
          </a>
        </h3>
      </div>
    </div>
  );
}

export default App;

<h3> </h3>;
