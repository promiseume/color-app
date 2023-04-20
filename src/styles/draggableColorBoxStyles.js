const styles = {
    root: {
      height: "25%",
      width: "25%",
      margin: "0 auto",
      display: "inline-block",
      cursor: "pointer",
      marginBottom: "-3.5px",
      position: "relative",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.1)",
      },
    },
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0",
      bottom: "0",
      padding: "10px",
      color: "rgba(0,0,0,0.5)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between",
    },
    deleteIcon: {
      transition: "all 0.3s ease-in-out",
      color: "rgba(0,0,0,0.5)",
      "&:hover": {
        color: "white",
      },
    },
  };
  export default styles;