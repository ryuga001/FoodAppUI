import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/welcomescreen';
import RecipeListScreen from './screens/recipelistscreen';
import RecipeDetailsScreen from './screens/recipedetail';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name='RecipeList' component={RecipeListScreen} />
                <Stack.Screen name='RecipeDetail' component={RecipeDetailsScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})