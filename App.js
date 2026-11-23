import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';
import Lista from './src/Lista';
import Detalhe from './src/Detalhe';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {
    return (
    <NavigationContainer>
        {/* Os cabeçalhos são desenhados nas próprias telas. */}
        <StatusBar barStyle="light-content" backgroundColor="#0B3A6E" />
        <Stack.Navigator>
        <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ title: 'MEIHub', headerShown: false }}
        />

        <Stack.Screen
            name="Detalhe"
            component={Detalhe}
            options={{ title: 'Detalhes', headerShown: false }}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
}