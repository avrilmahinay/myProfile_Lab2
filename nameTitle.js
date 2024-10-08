import { View, Text, StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const NameTitle = () => {
    return (
        <View style={styles.container}>
            <EvilIcons name="user" size={150} color="black" />
            <Text style={styles.name}>Avril Mahinay</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginTop: 50, 
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10, 
    },
});

export default NameTitle;
