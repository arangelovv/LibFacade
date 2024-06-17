import { useState, SyntheticEvent } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { TabsOrganismConfig } from "../models/tabs.config";

export default function TabsOrganism({ tabsConfig }: TabsOrganismConfig) {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        typography: "body1",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="fullWidth">
            {tabsConfig?.map((tab) => (
              <Tab
                label={tab.label}
                value={tab.index}
                icon={tab.icon}
                iconPosition={tab.iconPosition}
                sx={{
                  textTransform: "none",
                  minHeight: "48px",
                }}
              />
            ))}
          </TabList>
        </Box>

        {tabsConfig.map((tab) => (
          <TabPanel
            key={tab.index}
            value={tab.index}
            sx={{
              width: "100%",
              padding: "0px",
            }}
          >
            {tab.children}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
