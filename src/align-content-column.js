import SyntaxTemplate from "./syntax-template";

function AlignContentColumn(props) {
  const flexDirection = props.isReverse ? "column-reverse" : "column";
  return (
    <>
      <SyntaxTemplate
        onCopy={props.onCopySyntax}
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
        onCopy={props.onCopySyntax}
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
        onCopy={props.onCopySyntax}
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
        onCopy={props.onCopySyntax}
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
        onCopy={props.onCopySyntax}
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
        onCopy={props.onCopySyntax}
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

export default AlignContentColumn;
