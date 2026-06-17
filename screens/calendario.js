import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Calendario() {
  const diasSemana = ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'];
  const gradeDias = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <ScrollView style={estilos.principal}>
      <View style={estilos.conteudo}>
        
        <View style={estilos.caixaCabecalho}>
          <Text style={estilos.textoCabecalho}>CALENDÁRIO</Text>
        </View>

        <View style={estilos.cabecalhoSemana}>
          {diasSemana.map((dia, index) => (
            <Text key={index} style={estilos.textoSemana}>{dia}</Text>
          ))}
        </View>

        <View style={estilos.gradeCalendario}>
          {gradeDias.map((item, index) => (
            <View key={index} style={estilos.celulaGrade}>
              <Text style={estilos.textoDia}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={estilos.caixaSubtitulo}>
          <Text style={estilos.textoSubtitulo}>Agenda do mês</Text>
        </View>

        <View style={estilos.itemEvento}>
          <Text style={estilos.textoEvento}>DIA 08/02 - Feriado</Text>
        </View>
        
        <View style={estilos.itemEvento}>
          <Text style={estilos.textoEvento}>DIA 23/02 - Feriado</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  conteudo: {
    padding: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  caixaCabecalho: {
    backgroundColor: '#808080',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  textoCabecalho: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
  cabecalhoSemana: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
  },
  textoSemana: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555',
  },
  gradeCalendario: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#333',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  celulaGrade: {
    width: '14.28%',
    aspectRatio: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoDia: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  caixaSubtitulo: {
    backgroundColor: '#808080',
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  textoSubtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  itemEvento: {
    backgroundColor: '#B0B0B0',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  textoEvento: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});