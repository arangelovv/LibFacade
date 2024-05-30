import { Box, Drawer } from "@mui/material";
import { sidebarOrganismConfig } from "../models/side-bar.config";
import TypographyAtom from "../atoms/TypographyAtom";

export default function SidebarOrganism({
  position,
  drawerWidht,
  drawerColor,
  children,
  borderStyle,
  title = "",
  titleAlignment = "center",
  titleColor,
}: sidebarOrganismConfig & { children?: React.ReactNode }) {
  const borderRadiusMap = {
    sharp: "0px",
    rounded: "10px",
    "extra-rounded": "20px",
    "rounded-left": "10px 0 0 10px",
    "rounded-right": "0 10px 10px 0",
    "extra-rounded-left": "20px 0 0 20px",
    "extra-rounded-right": "0 20px 20px 0",
  };
  const borderRadius = borderRadiusMap[borderStyle] || "0px";

  const titleAlignmentMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
  };
  const titlePoisition = titleAlignmentMap[titleAlignment] || "center";

  return (
    <Drawer
      variant="permanent"
      anchor={position}
      sx={{
        width: { drawerWidht },
        boxSizing: "border-box",
        height: "100%",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          padding: "10px",
          position: "static",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: drawerWidht,
          backgroundColor: drawerColor,
          borderRadius: borderRadius,
        },
      }}
    >
      {title.trim() !== "" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: titlePoisition,
            width: "100%",
            marginTop: "5%",
            marginBottom: "10%",
          }}
        >
          <TypographyAtom
            variant="h5"
            fontWeight="500"
            text={title}
            color={titleColor}
          />
        </Box>
      )}
      {children}
    </Drawer>
  );
}
