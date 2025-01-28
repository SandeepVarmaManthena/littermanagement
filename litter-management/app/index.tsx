import { Text, View } from "react-native";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Penalty from "./pages/Penalty";
import Addpenalty from "./components/Addpenalty";
import CCTVMonitoring from "./pages/CCTVMonitoring";
import CCTVLiveFootage from "./components/cctv/CCTVLiveFootage";

export default function Index() {
  return (
    <Dashboard/>
  );
}
