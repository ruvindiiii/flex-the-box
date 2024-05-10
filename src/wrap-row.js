import SyntaxTemplate from "./syntax-template";
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

export default WrapRow;
