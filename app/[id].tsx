import { Task } from '@/src/models/Task';
import { useObject, useRealm } from '@realm/react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { BSON } from 'realm';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  
  // State to hold the description from the task object initially
  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description || '' // Ensure it's not null to avoid issues
  );

  // State to track the save status for user feedback
  const [saveStatus, setSaveStatus] = useState('');

  const realm = useRealm();

  const updateDescription = () => {
    if (!task) {
      setSaveStatus('Error: Task not found.');
      return;
    }
    
    // Start a write transaction to update the Realm object
    realm.write(() => {
      task.description = updatedDescription;
      console.log('Task updated:', task.description);
      setSaveStatus('Saved!'); // Set status to 'Saved!' on success
    });

    // Clear the saved status message after a few seconds
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Task Details' }} />

      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDescription} // Correctly update the state on text change
        style={styles.textInput}
        placeholder="Update task description"
        placeholderTextColor="grey"
        autoFocus
        multiline
      />

      <View style={styles.buttonContainer}>
        {/* The dedicated 'Save' button to trigger the update */}
        <Button title="Save" onPress={updateDescription} />
      </View>

      {/* Display the save status */}
      {saveStatus ? <Text style={styles.statusText}>{saveStatus}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#000', // Assuming a dark background from the text color
  },
  textInput: {
    color: 'white',
    fontSize: 20,
    minHeight: 100,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlignVertical: 'top', // For multiline on Android
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  statusText: {
    color: 'lightgreen',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default TaskDetails;
