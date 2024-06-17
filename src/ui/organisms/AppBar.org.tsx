import { AppBar, Toolbar } from "@mui/material";
import { AppBarOrganismConfig } from "../models/app-bar.config";
import TypographyAtom from "../atoms/TypographyAtom";

export default function AppBarOrganism({
  color,
  position,
  paddingLeft,
  paddingRight,
  borderStyle,
  children,
  elevation,
}: AppBarOrganismConfig & { children?: React.ReactNode }) {
  const getBorderStyleValue = (
    borderRadius: "sharp" | "rounded" | "extra-rounded"
  ) => {
    switch (borderRadius) {
      case "sharp":
        return 0;
      case "rounded":
        return "5px";
      case "extra-rounded":
        return "10px";
      default:
        return 0;
    }
  };

  const getElevationValue = (
    elevation: "none" | "low-elev" | "medium-elev" | "high-elev"
  ) => {
    switch (elevation) {
      case "none":
        return "none";
      case "low-elev":
        return "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)";
      case "medium-elev":
        return "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)";
      case "high-elev":
        return "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)";
      default:
        return 0;
    }
  };
  return (
    <AppBar
      position={(position = "static")}
      sx={{
        backgroundColor: `${color}`,
        paddingLeft: `${paddingLeft}`,
        paddingRight: `${paddingRight}`,
        boxShadow: getElevationValue(elevation),
        borderRadius: getBorderStyleValue(borderStyle),
      }}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
