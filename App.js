import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";

const navigator = createStackNavigator({
  Home: Home
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Pedilo Ya"
  }
});

export default createAppContainer(navigator);

// Client ID

// DYywj3QwGQD3UF1KGpMaJQ
// API Key

// 8Ge_TibWIDRBaTkgqJt0uqBovKgCSr7XzcS1CL7naJX9LihTy7IYeGXaKnlv2P7znca0Z3RRpd80reKGbovCXyeONyx_VyCttF6SnudksCR7IJWY_MMZATd4tljLYXYx
