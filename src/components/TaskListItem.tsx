import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TaskListItem = ({ task }) => {
    return (
        <View style={styles.container}>
           
            <Text style={styles.text}>{task.description}</Text>
            <AntDesign name="close" size={16} color="white" />
        </View>
    )
}

export default TaskListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    text: {
        color: '#fff'
    }
})