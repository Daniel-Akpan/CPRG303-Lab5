import React from "react";
import { SafeAreaView, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const appName = "ToDo App";
  const authorName = "Akpan Daniel";
  const currentDate = new Date().toDateString();

  const handleNamePress = () => {
    alert("My Full name is actually Akpan Daniel Inioluwa Anietie Utiebiabasi! Now you know!!");
  };

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text style={styles.author}>{authorName}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{currentDate}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
    color: 'blue', // Add color to make it clickable
    textDecorationLine: 'underline', // Add underline to indicate it's clickable
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});

export default AboutScreen;
