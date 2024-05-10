import toast from "react-hot-toast";

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

export default SyntaxTemplate;
