import { Button } from '@react-navigation/elements'
import { useQuery, useRealm } from '@realm/react'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { Task } from '../models/Task'
import TaskListItem from './TaskListItem'

const TaskList = () => {
    const realm = useRealm()
    const tasks = useQuery(Task)
    const [newTask, setNewTask] = useState("")

    const createTask = () => {
        console.log('Create 2',newTask)
        // setTasks([...tasks,{ description: newTask}])
        realm.write(() =>{
          realm.create(Task,{description: newTask,user_id:'123'})
        })
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
            <Button
                title="Create Task"
                onPress={createTask}
                color="#841584"
                disabled={!newTask.trim()}
            />

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