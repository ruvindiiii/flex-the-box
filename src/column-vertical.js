import SyntaxTemplate from "./syntax-template";
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

export default ColumnVertical;
