import { AntDesign } from '@expo/vector-icons'
import { useRealm } from '@realm/react'
import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Task } from '../models/Task'
const TaskListItem = ({ task }:{task: Task}) => {
    const realm = useRealm()
    const deleteTask = () =>{
        console.log('Delete',)
        realm.write(()=>{
            realm.delete(task)
        })
    }
    return (
        <Link href={`/${task._id}`} asChild>
            <Pressable style={styles.container}>
                <Text style={styles.text}>{task.description}</Text>
                <AntDesign onPress={deleteTask} name="close" size={16} color="white" />
            </Pressable>
        </Link>
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