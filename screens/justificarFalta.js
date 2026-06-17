import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function JustificarFalta() {
  const route = useRoute();
  const dataFalta = route.params?.data || ''; 
  
  const [motivo, setMotivo] = useState('');
  const [justificativas, setJustificativas] = useState([]);

  const enviarJustificativa = () => {
    if (motivo.trim()) {
      setJustificativas([ ...justificativas, motivo ])
      setMotivo('');
    }
  }

  return (
    <View style={estilos.container}> 
      <View style={estilos.conteudo}> 
        
        <View style={estilos.containerTitulo}>
          <Text style={estilos.textoTitulo}>Justificar Falta</Text>
          <Text style={estilos.textoSubtitulo}>
            {dataFalta ? `Referente ao ${dataFalta}. ` : ''}Preencha os dados abaixo para enviar sua justificativa.
          </Text>
        </View>

        <View style={estilos.containerInput}>
          <Text style={estilos.rotulo}>Motivo da ausência</Text>
          <TextInput 
            style={estilos.input} 
            placeholder='Digite os detalhes aqui...'
            placeholderTextColor="#999"
            value={motivo} 
            onChangeText={setMotivo}
            multiline={true}
          />
        </View>

        <TouchableOpacity style={estilos.caixaAnexo}>
          <Text style={estilos.iconeAnexo}>📄</Text>
          <Text style={estilos.textoAnexo}>Toque para anexar um documento</Text>
          <Text style={estilos.subtextoAnexo}>(Atestados, fotos, etc.)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoEnviar} onPress={enviarJustificativa}>
          <Text style={estilos.textoBotaoEnviar}>Enviar Justificativa</Text>
        </TouchableOpacity>

        <FlatList 
          data={justificativas} 
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={estilos.cartaoSalvo}>
              <Text style={estilos.tituloCartao}>Justificativa enviada:</Text>
              <Text style={estilos.textoCartao}>{item}</Text>
            </View>
          )} 
          style={estilos.containerLista}
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
    paddingHorizontal: 24,
    marginTop: 50, 
  },
  containerTitulo: {
    marginBottom: 30,
  },
  textoTitulo: {
    fontSize: 28,
    color: '#1A1A1A',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textoSubtitulo: {
    fontSize: 15,
    color: '#666',
  },
  containerInput: {
    marginBottom: 20,
  },
  rotulo: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 120, 
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  caixaAnexo: {
    backgroundColor: '#EBF4FF',
    height: 140, 
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#A3C8FF',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconeAnexo: {
    fontSize: 32,
    marginBottom: 8,
  },
  textoAnexo: {
    fontSize: 16,
    color: '#0056D2',
    fontWeight: '600',
  },
  subtextoAnexo: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  botaoEnviar: {
    backgroundColor: '#0056D2',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#0056D2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  textoBotaoEnviar: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  containerLista: {
    width: '100%',
  },
  cartaoSalvo: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tituloCartao: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textoCartao: {
    fontSize: 16,
    color: '#333',
  }
});