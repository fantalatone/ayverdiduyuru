import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FeedAll from "../screens/feedAll";
import FeedCustom from "../screens/feedCustom";

const screens = {
    FeedAll: {
        screen: FeedAll
    },
    FeedCustom: {
        screen: FeedCustom
    }
}

const FeedStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(FeedStack);