import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../screens/Chat";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{cardStyle: {backgroundColor: 'transparent'}, headerShown: false}}
        >
            <Screen
                name="Chat"
                component={Chat}
            />
        </Navigator>
    );
}