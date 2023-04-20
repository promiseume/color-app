import sizes from "./sizes";
export default {
    Palette:{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
  },
  PaletteColor:{
      height: "90%",
  },
  goBack:{
    width: "20%",
    margin:"0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    position: "relative",
    backgroundColor: "black",
    opacity: "1",
    height:"50%",
    [sizes.down("lg")]:{
      width: "25%",
      height: "33.3333%"
    },
    [sizes.down("md")]:{
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]:{
      width: "100%",
      height: "10%"
    }
  } ,
  backButton:{
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    marginBottom: '-3.5px',
  },
  }