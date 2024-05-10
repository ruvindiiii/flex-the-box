import SyntaxTemplate from "./syntax-template";
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

export default RowHorizontal;
