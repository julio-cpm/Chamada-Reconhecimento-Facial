import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Frequencia() {
  const navigation = useNavigation();

  const dadosFrequencia = [
    { id: '1', data: 'DIA 19/02', status: 'falta' },
    { id: '2', data: 'DIA 18/02', status: 'presente' },
    { id: '3', data: 'DIA 17/02', status: 'presente' },
    { id: '4', data: 'DIA 14/02', status: 'falta' },
    { id: '5', data: 'DIA 13/02', status: 'presente' },
    { id: '6', data: 'DIA 12/02', status: 'presente' },
    { id: '7', data: 'DIA 11/02', status: 'presente' },
    { id: '8', data: 'DIA 10/02', status: 'presente' },
  ];

  const renderizarItem = ({ item }) => {
    const isPresente = item.status === 'presente';

    const ConteudoItem = (
      <View style={estilos.containerItem}>
        <Text style={estilos.textoData}>{item.data}</Text>
        
        <View style={[estilos.caixaIcone, isPresente ? estilos.iconePresente : estilos.iconeFalta]}>
          <Text style={estilos.textoIcone}>{isPresente ? '✓' : '✕'}</Text>
        </View>
      </View>
    );

    if (isPresente) {
      return ConteudoItem;
    }

    return (
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('JustificarFalta', { data: item.data })}
      >
        {ConteudoItem}
      </TouchableOpacity>
    );
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.conteudo}>
        <FlatList
          data={dadosFrequencia}
          keyExtractor={(item) => item.id}
          renderItem={renderizarItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  containerItem: {
    backgroundColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  textoData: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
  },
  caixaIcone: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconePresente: {
    backgroundColor: '#4CAF50',
  },
  iconeFalta: {
    backgroundColor: '#F44336',
  },
  textoIcone: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});