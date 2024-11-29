import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, ScrollView, Button, Text, View } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import MainLayout from "./layout/MainLayout";

// AboutScreen Component
function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About This App</Text>
      <Text>This is a simple To-Do app built with React Native!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const [tasks, setTasks] = useState([
    { text: "Do laundry", completed: true },
    { text: "Go to gym", completed: false },
    { text: "Walk dog", completed: true },
  ]);

  const addTask = (taskText) => {
    if (tasks.some((task) => task.text === taskText)) {
      alert("Task already exists!");
      return;
    }
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <MainLayout>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {({ navigation }) => (
              <SafeAreaView>
                <ScrollView>
                  <ToDoList tasks={tasks} />
                </ScrollView>
                <ToDoForm onAddTask={addTask} />
                <Button
                  title="Go to About"
                  onPress={() => navigation.navigate("About")}
                />
              </SafeAreaView>
            )}
          </Stack.Screen>
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainLayout>
  );
}

export default App;
