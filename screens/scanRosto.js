import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScanRosto() {
  return (
    <View style={estilos.container}>
      <View style={estilos.conteudo}>
        <View style={estilos.formaOval} />
        <View style={estilos.caixaAviso}>
          <Text style={estilos.textoAviso}>Por favor, aproxime o rosto da tela</Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formaOval: {
    width: 220,
    height: 220,
    backgroundColor: '#808080',
    borderRadius: 110,
    transform: [{ scaleY: 1.6 }],
    marginBottom: 120,
  },
  caixaAviso: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  textoAviso: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
});