import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function criacaoInterface() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Interface criada</Text>
        </View>
    );
}
// === ESTILOS AQUI ===
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        marginBottom: 30,
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5)',
    },
    texto: {
        fontSize: 18,
        color: '#34495E',
        marginBottom: 8,
    },
    areaBotao: {
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden', // Garante que o botão respeite o arredondamento
    }
});