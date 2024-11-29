import React, { useState } from "react";
import { View, Button } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
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
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

export default HomeScreen;
