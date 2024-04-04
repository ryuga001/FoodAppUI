import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/header'
import SearchFilter from '../components/searchfilter'
import CategoriesFilter from '../components/categoriesFilter'
import RecipeCard from '../components/recipecard'

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }
        }>
            <Header headerText={"Hi, John"} headerIcon={"bell-o"} />
            <SearchFilter icon="search" />

            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                <CategoriesFilter />
            </View>

            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Dishes</Text>
                <RecipeCard />
            </View>
        </SafeAreaView >
    )
}

export default RecipeListScreen

const styles = StyleSheet.create({})