import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { adminDashboardData } from "@/utils/fetchAdminDatas";
import SettingsIcon from '@mui/icons-material/Settings';
import { ProfileSettings } from "@/components/supports/userAdmin/ProfileSettings";
import { MyProfile } from "@/components/supports/userAdmin/MyProfile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full h-full"
    >
      {value === index && (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabPageNumber(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
// {props}: {props: FetchAdminDataProps}

export default function Admin() {
  const [AdminData, setAdminData] = React.useState({});

  // const {dashboardData} = props

  React.useEffect(() => {
    const callData = async () => {
      const adminDashboardDataRes = await adminDashboardData();
      setAdminData(adminDashboardDataRes);
    };
    callData();
  }, []);
  const [value, setValue] = React.useState(0);

  const [toggle, setToggle] = React.useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: toggle ? "20%" : "fit-content",
        }}
      >
        <div
          className={`w-full  items-center p-5 px-14 ${
            toggle ? "flex justify-between" : "flex-col"
          }`}
        >
          <div>LOGO</div>
          <div onClick={() => setToggle(!toggle)}>
            <MenuIcon />
          </div>
        </div>
        <Tab
          icon={<AccountCircleIcon />}
          iconPosition="start"
          label={`${toggle ? "My Profile" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(0)}
        />

        <Tab
          icon={<SettingsIcon />}
          iconPosition="start"
          label={`${toggle ? "Settings" : ""}`}
          sx={{ justifyContent: "flex-start", padding: 3, paddingX: 7 }}
          {...tabPageNumber(1)}
        />
      </Tabs>
      <TabPanel value={value} index={1}>
        <MyProfile/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileSettings/>
      </TabPanel>
    </Box>
  );
}
