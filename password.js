import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const Password = () => {
    const [selectedOption, setSelectedOption] = useState('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handlePasswordRecovery = () => {
        if (selectedOption === 'email') {
            if (!email.trim()) {
                Alert.alert('Error', 'Please enter your email');
                return;
            }
         
            Alert.alert('Success', 'Password reset link sent to your email!');
        } else {
            if (!phone.trim()) {
                Alert.alert('Error', 'Please enter your phone number');
                return;
            }

            Alert.alert('Success', 'Verification code sent to your phone!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Password Recovery</Text>
        
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[styles.optionButton, selectedOption === 'email' && styles.selectedOption]}
                    onPress={() => setSelectedOption('email')}
                >
                    <Text style={styles.optionText}>Use Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.optionButton, selectedOption === 'phone' && styles.selectedOption]}
                    onPress={() => setSelectedOption('phone')}
                >
                    <Text style={styles.optionText}>Use Phone Number</Text>
                </TouchableOpacity>
            </View>

            {selectedOption === 'email' ? (
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
            )}
            
            <Button title="Send Code" onPress={handlePasswordRecovery} color="#4CAF50" />
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
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
    },
    optionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4CAF50',
    },
    selectedOption: {
        backgroundColor: '#4CAF50',
    },
    optionText: {
        color: '#4CAF50',
        fontWeight: 'bold',
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
