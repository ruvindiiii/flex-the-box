import SyntaxTemplate from "./syntax-template";
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

export default ColumnHorizontal;
