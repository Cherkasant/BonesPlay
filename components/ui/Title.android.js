import { StyleSheet, Text } from 'react-native'

const TitleIos = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
}

export default TitleIos

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Rem',
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eae9f0',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#eae9f0',
        maxWidth: '80%',
        width: 300,
    },
})