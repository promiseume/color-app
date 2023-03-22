export default {
    root: {
      backgroundColor: "blue",
      margin: "0",
      padding: "0",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    container: {
     width: "80%",
     display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
    },
    nav: {
    display: "flex",
    width: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
    color: "white",
    },
    },
    palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    margin:"10px"
    }
  }