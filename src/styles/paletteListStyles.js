import sizes from "./sizes";
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
      [sizes.down("xl")]: {
        width: "70%",
      },
      [sizes.down("lg")]: {
        width: "60%",
      },
      [sizes.down("md")]: {
        width: "50%",
      },
      [sizes.down("sm")]: {
        width: "75%",
      }
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
    margin:"10px",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
    }
  }