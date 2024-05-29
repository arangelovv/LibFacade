import { Box, Button } from "@mui/material";
import { ButtonConfig } from "../models/button.config";

export default function ButtonAtom({
  variant = "contained",
  textColor,
  buttonText,
  buttonColor = "#8ab6fc",
  buttonColorOnHover,
  outlineColorOnHover = "gray",
  outlineColor = "gray",
  buttonIcon,
  borderStyle = "sharp",
  elevation = "none",
  textAlignment = "center",
  width,
  activeState = false,
  activeStateColor,
  onClick,
}: ButtonConfig) {
  const borderRadiusMap = {
    sharp: "0px",
    rounded: "4px",
    "extra-rounded": "8px",
  };
  const borderRadius = borderRadiusMap[borderStyle] || "0px";

  const elevationMap = {
    none: "none",
    "low-elev":
      "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    "medium-elev":
      "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    "high-elev":
      "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
  };
  const hoverElevationMap = {
    none: "none",
    "low-elev":
      "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.14), 0px 4px 1px rgba(0, 0, 0, 0.12)",
    "medium-elev":
      "0px 4px 8px rgba(0, 0, 0, 0.16), 0px 6px 6px rgba(0, 0, 0, 0.23)",
    "high-elev":
      "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 8px 8px rgba(0, 0, 0, 0.23)",
  };
  const buttonElevation = elevationMap[elevation] || "0px";
  const buttonElevationOnHover = hoverElevationMap[elevation] || "0px";

  return (
    <Button
      onChangeCapture={onClick}
      variant={variant}
      startIcon={buttonIcon}
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: borderRadius,
        boxShadow: buttonElevation,
        border: variant === "outlined" ? `1px solid ${outlineColor}` : "0px",
        backgroundColor:
          variant !== "outlined" && variant !== "text" ? buttonColor : "",
        color: textColor,
        width: width,
        "&:hover": {
          backgroundColor: buttonColorOnHover || buttonColor,
          boxShadow: buttonElevationOnHover,
          border:
            variant === "outlined" ? `1px solid ${outlineColorOnHover}` : "0px",
        },
        ...(activeState && {
          backgroundColor: activeStateColor || buttonColor,
          boxShadow: buttonElevationOnHover,
          border:
            variant === "outlined" ? `1px solid ${outlineColorOnHover}` : "0px",
        }),
      }}
    >
      <Box sx={{ textAlign: textAlignment, width: "100px" }}>{buttonText}</Box>
    </Button>
  );
}
