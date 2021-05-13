import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FeedScreen from "../screens/feed";
import FeedDetailsScreen from "../screens/feedDetails";
import AskQuestionScreen from "../screens/askquestion";
import ProfileScreen from "../screens/profile";
import Header from "../shared/header";
import React from "react";

const screens = {
    Feed: {
        screen: FeedScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="Feed" />,
            }
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="Profile" />,
            }
        }
    },
    AskQuestion: {
        screen: AskQuestionScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="AskQuestion" />,
            }
        }
    },
    Details: {
        screen: FeedDetailsScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="Details" />,
            }
        }
    }
}

const MainStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerLeft: () => null,
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
        },
    }
})

export default createAppContainer(MainStack);