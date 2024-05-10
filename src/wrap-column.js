import SyntaxTemplate from "./syntax-template";
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

export default WrapColumn;
