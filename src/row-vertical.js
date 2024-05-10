import SyntaxTemplate from "./syntax-template";
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

export default RowVertical;
