import { StyleSheet, Text } from 'react-native'

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eae9f0',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#eae9f0',
    },
})