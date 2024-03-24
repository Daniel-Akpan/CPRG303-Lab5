import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ToDo App</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024. All rights reserved.</Text>
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    paddingBottom: 70, 
    backgroundColor: '#f1f1f1', 
  },
  header: {
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    height: 70, 
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 14, 
    color: 'gray',
    fontStyle: 'italic',
  },
});

export default MainLayout;
