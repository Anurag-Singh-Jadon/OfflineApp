
import TaskBoard from "@/src/components/TaskBoard";
import { Stack } from "expo-router";
export default function HomeScreen(){
  return (
    <>
    <Stack.Screen  options={{title:'Project Board'}}/>
     <TaskBoard />
    </>
   
  );
}
