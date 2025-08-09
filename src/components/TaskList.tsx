import { Button } from '@react-navigation/elements'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import TaskListItem from './TaskListItem'

const TaskList = () => {
    const [tasks, setTasks] = useState([{ description: "First task" },

    { description: "Second task" },
    { description: "Third task" }]);
    const [newTask, setNewTask] = useState("")

    const createTask = () => {
        console.log('Create 2',newTask)
        setTasks([...tasks,{ description: newTask}])
        setNewTask('')
    }
    return (
        <View style={styles.container}>

            <Text style={styles?.title}>Todo</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskListItem task={item} />}
                contentContainerStyle={{ gap: 5 }}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput value={newTask} onChangeText={setNewTask} placeholder='New task' placeholderTextColor={'grey'} style={styles.input} />
            <Button title="Add task" onPress={createTask} />
        </View>
    )
}
export default TaskList


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101112',
        padding: 10,
        borderRadius: 5,


    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        color: 'white',
        padding: 15,
        backgroundColor: '#1D2125',
        borderRadius: 5,
    },
});