import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Contact = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.userText}>@its.avrilicious</Text>

      
      <View style={styles.buttonRow}>
        <View style={styles.followContainer}>
          <AntDesign name="user" size={20} color="white" style={styles.icon} />
          <Text style={styles.followText}>Follow</Text>
        </View>

        <View style={styles.messageContainer}>
        <FontAwesome6 name="message" size={20} color="white" />
          <Text style={styles.messageText}> Message</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',  
  },
  buttonRow: {
    flexDirection: 'row',    
    justifyContent: 'space-evenly', 
    width: '100%',           
  },
  followContainer: {
    backgroundColor: 'grey',   
    borderRadius: 10,             
    paddingVertical: 10,          
    paddingHorizontal: 20,       
    marginHorizontal: 5,         
    flexDirection: 'row',        
    alignItems: 'center',        
  },
  messageContainer: {
    backgroundColor: 'grey',   
    borderRadius: 10,             
    paddingVertical: 10,          
    paddingHorizontal: 20,       
    marginHorizontal: 5,         
    flexDirection: 'row',        
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    color: 'white',               
    textAlign: 'center',
  },
  userText: {
    fontSize: 15,
    marginBottom: 20,           
  },
  followText: {
    fontSize: 18,
    color: 'white',               
    textAlign: 'center',         
  },
});

export default Contact;
