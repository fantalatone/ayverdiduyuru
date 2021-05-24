import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FeedScreen from "../screens/feed";
import FeedDetailsScreen from "../screens/feedDetails";
import AskQuestionScreen from "../screens/askquestion";
import ProfileScreen from "../screens/profile";
import Header from "../shared/header";
import variables from "../styles/variables"
import React from "react";
import QuestionsDetailsScreen from "../screens/questionDetails";

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
    FeedDetails: {
        screen: FeedDetailsScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="FeedDetails" />,
            }
        }
    },
    QuestionDetails: {
        screen: QuestionsDetailsScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: props => <Header navigation={ navigation } title="QuestionDetails" />,
            }
        }
    }
}

const MainStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerLeft: () => null,
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
        },
    }
})

export default createAppContainer(MainStack);