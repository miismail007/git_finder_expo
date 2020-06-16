import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import User from "./src/screens/User";

const navigator = createStackNavigator(
  {
    "Git Finder": Home,
    Search: Search,
    User: User,
  },
  {
    initialRouteName: "Git Finder",
    // defaultNavigationOptions: {
    //   title: "App",
    // },
  }
);

export default createAppContainer(navigator);
