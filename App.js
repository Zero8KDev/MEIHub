import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from './src/Lista';
import Detalhe from './src/Detalhe';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ title: 'MEIHub' }}
        />

        <Stack.Screen
            name="Detalhe"
            component={Detalhe}
            options={{ title: 'Detalhes' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
}