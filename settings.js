import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Settings = () => {
    return (
        <View style={styles.SettingsContainer}>
            <View style={styles.boxContainer}>
                <Text style={styles.infoText}>Information</Text>

                <View style={styles.iconEmailContainer}>
                    <AntDesign name="mail" size={20} color="black" style={styles.icon} />
                    <Text style={styles.emailText}>avrilbunggatmahinay@gmail.com</Text>
                </View>

                <View style={styles.iconPhoneContainer}>
                    <AntDesign name="phone" size={20} color="black" />
                    <Text style={styles.phoneText}>+63 935 655 7633</Text>
                </View>
            </View>

            <View style={styles.boxContainer}>
                <Text style={styles.preferencesText}>Preferences</Text>
                <View style={styles.preferencesContainer}>
                    <View style={styles.notificationContainer}>
                        <Ionicons name="notifications-outline" size={20} color="black" />
                        <Text style={styles.preferenceItem}>Notifications</Text>
                        <AntDesign name="arrowright" size={15} color="black" />
                    </View>

                    <View style={styles.accountContainer}>
                        <MaterialCommunityIcons name="account" size={20} color="black" />
                        <Text style={styles.preferenceItem}>Account Settings</Text>
                        <AntDesign name="arrowright" size={15} color="black" />
                    </View>

                    <View style={styles.logOutContainer}>
                        <Ionicons name="log-out-outline" size={20} color="black" />
                        <Text style={styles.preferenceItem}>Logout</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    SettingsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    boxContainer: {
        backgroundColor: '#a47f6d',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 23,
        marginBottom: 10,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    iconEmailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    emailText: {
        fontStyle: 'italic',
        fontSize: 18,
        marginLeft: 10,
        textAlign: 'left',
    },
    iconPhoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logOutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    phoneText: {
        fontSize: 18,
        marginLeft: 10,
        textAlign: 'left',
    },
    preferencesContainer: {
        marginTop: 10,
    },
    preferencesText: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Added to space items evenly
        marginBottom: 10,
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Added to space items evenly
        marginBottom: 10,
    },
    preferenceItem: {
        fontSize: 18,
        marginLeft: 10,
        textAlign: 'left',
        flex: 1, // This allows the text to take remaining space
    },
});

export default Settings;
