import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Password = () => {
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
       
        if (!email.trim()) {
            Alert.alert('Error', 'Please enter your email');
            return;
        }

        Alert.alert('Success', 'Password reset link sent to your email!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Password Recovery</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <Button title="Send Reset Link" onPress={handlePasswordRecovery} color="#4CAF50" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FAF7F0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default Password;
