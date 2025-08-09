import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import TaskBoard from './src/components/TaskBoard'

const App = () => {
  return (
    <View style={styles.container}>
   
      <StatusBar style='auto'/>
    <TaskBoard/>
      
     
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        
    }
})