import { createTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";

const theme = createTheme({
  overrides: {
    MuiTableRow: {
      root: {
        "&$selected": {
          background: "none",
        },
      },
    },
  },
  palette: {
    primary: { main: "#f48943" },
    secondary: { main: "#fff" },
    error: { main: "#801a00" },
    text: {
      primary: "#000",
      secondary: "#000", // HACK FOR material-table hardcoded toolbar!,
      second: "#fff",
      error: "#801a00",
    },
    toggledButton: "#999999",
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Inter", "Roboto","sans-serif"].join(","),
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    title: {
      fontSize: 20,
      fontWeight: 300,
    },
    label: {
      color: "grey",
    },
  },
  jrnlDrawer: {
    open: {
      width: 500,
    },
    close: {
      width: 80,
    },
    itemDetail: {
      marginLeft: 8,
    },
    iconSize: 24,
  },
  menu: {
    variant: "AppBar",
    drawer: {
      width: 300,
      fontSize: 16,
    },
    appBar: {
      fontSize: 16,
    },
  },
  page: {
    padding: 16,
    locked: {
      background: "none",
    },
  },
  paper: {
    paper: {
      margin: 10,
      background: "#fff",
    },
    header: {
      color: "#000",
      background: "none",
    },
    message: {
      background: "none",
    },
    title: {
      padding: 10,
      fontSize: 24,
      color: "#000",
      background: "none",
    },
    action: {
      padding: 5,
    },
    divider: {
      padding: 0,
      margin: 0,
    },
    body: {
      marginBottom: 16,
      background: "#fff",
    },
    item: {
      padding: 10,
    },
  },
  table: {
    title: {
      padding: 10,
      fontWeight: 500,
      color: "#000",
      background: "none",
    },
    header: {
      color: "#000",
    },
    headerAction: {
      padding: 5,
    },
    row: {
      color: "#000",
      align: "center",
      "&:hover": {
        background: "none",
      },
    },
    cell: {
      padding: 5,
    },
    lockedRow: {
      // background: "repeating-linear-gradient(45deg, #D3D3D3 1px, #D3D3D3 1px, #fff 10px, #fff 10px);",
    },
    lockedCell: {},
    highlightedRow: {},
    highlightedCell: {
      fontWeight: 500,
      align: "center",
    },
    highlightedAltRow: {},
    highlightedAltCell: {
      fontStyle: "italic",
      align: "center",
    },
    disabledRow: {},
    disabledCell: {
      // textDecoration: "line-through",
      color: "grey",
      align: "center",
    },
    footer: {
      color: "#000",
    },
    pager: {
      color: "#000",
    },
  },
  form: {
    spacing: 10,
  },
  formTable: {
    table: {
      color: "#000",
    },
    actions: {
      color: "#000",
    },
    header: {
      color: "#000",
      align: "center",
    },
  },
  dialog: {
    title: {
      fontWeight: 500,
      color: "grey",
    },
    content: {
      padding: 0,
    },
    primaryButton: {
      backgroundColor: "#f48943",
      color: "#fff",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: alpha("#f48943", 0.5),
        color: "#000",
      },
    },
    secondaryButton: {},
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 8,
    zIndex: 2000,
  },
  fakeInput: {},
  bigAvatar: {
    width: 160,
    height: 160,
  },
});

export default theme;
