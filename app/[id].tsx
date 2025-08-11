import { Task } from '@/src/models/Task';
import { useObject } from '@realm/react';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BSON } from 'realm';
const TaskDetails = () => {
    const {id} = useLocalSearchParams();
    const task = useObject<Task>(Task,new BSON.ObjectID(id as string));

    if(!task){
        return <Text>Not found</Text>
    }
    return (
        <View>
            <Stack.Screen  options={{title:'Task Details'}}/>
            <Text style={{color:'white',fontSize:20}}> {task.description}</Text>
        </View >
    )
}

export default TaskDetails

const styles = StyleSheet.create({})