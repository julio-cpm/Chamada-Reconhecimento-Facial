import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { PieChart } from "react-native-gifted-charts";

export default function PaginaInicial() {
    const java = [
        { value: 90, color: '#005CA9' },
        { value: 1, color: '#E30613' }
    ];

    const pdm = [
        { value: 1, color: '#005CA9' },
        { value: 32, color: '#E30613' }
    ];

    const projetos = [
        { value: 42, color: '#005CA9' },
        { value: 5, color: '#E30613' }
    ];

    const front = [
        { value: 50, color: '#005CA9' },
        { value: 3, color: '#E30613' }
    ];

    const totalFalta = java[1].value + pdm[1].value + projetos[1].value + front[1].value;
    const totalPresenca = java[0].value + pdm[0].value + projetos[0].value + front[0].value;
    const aulasTotais = totalPresenca + totalFalta;
    const frequenciaGeral = ((totalPresenca / aulasTotais) * 100).toFixed(1);

    return (
        <ScrollView contentContainerStyle={estilos.container}>
            <View style={estilos.caixaNome}>
                <Text style={estilos.textoNome}>NOME DO ALUNO</Text>
            </View>

            <View style={estilos.containerLegenda}>
                <View style={estilos.itemLegenda}>
                    <View style={[estilos.bolinhaCor, { backgroundColor: '#005CA9' }]} />
                    <Text style={estilos.textoLegenda}>Presença</Text>
                </View>
                <View style={estilos.itemLegenda}>
                    <View style={[estilos.bolinhaCor, { backgroundColor: '#E30613' }]} />
                    <Text style={estilos.textoLegenda}>Falta</Text>
                </View>
            </View>

            <View style={estilos.linha}>
                <View style={estilos.caixaGraficoPequena}>
                    <Text style={estilos.tituloGrafico}>Java</Text>
                    <PieChart
                        data={java}
                        radius={35}
                        donut
                        innerRadius={22}
                        innerCircleColor="#FFF"
                    />
                </View>

                <View style={estilos.caixaGraficoPequena}>
                    <Text style={estilos.tituloGrafico}>PDM</Text>
                    <PieChart
                        data={pdm}
                        radius={35}
                        donut
                        innerRadius={22}
                        innerCircleColor="#FFF"
                    />
                </View>
            </View>

            <View style={estilos.linha}>
                <View style={estilos.caixaGraficoPequena}>
                    <Text style={estilos.tituloGrafico}>Projetos</Text>
                    <PieChart
                        data={projetos}
                        radius={35}
                        donut
                        innerRadius={22}
                        innerCircleColor="#FFF"
                    />
                </View>

                <View style={estilos.caixaGraficoPequena}>
                    <Text style={estilos.tituloGrafico}>Front-End</Text>
                    <PieChart
                        data={front}
                        radius={35}
                        donut
                        innerRadius={22}
                        innerCircleColor="#FFF"
                    />
                </View>
            </View>

            <View style={estilos.caixaGraficoGrande}>
                <View style={estilos.barraIndicadoraVermelha} />
                <View style={estilos.conteudoCaixaGrande}>
                    <Text style={estilos.rotuloGrande}>Quantidade de Faltas</Text>
                    <Text style={estilos.valorGrandeFalta}>{totalFalta}</Text>
                </View>
            </View>

            <View style={estilos.caixaGraficoGrande}>
                <View style={estilos.barraIndicadoraAzul} />
                <View style={estilos.conteudoCaixaGrande}>
                    <Text style={estilos.rotuloGrande}>Frequência Geral</Text>
                    <Text style={estilos.valorGrandePresenca}>{frequenciaGeral}%</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: '#F8FAFC',
        alignItems: 'center',
        gap: 20,
    },
    caixaNome: {
        width: '100%',
        height: 60,
        backgroundColor: '#005CA9',
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 12,
        shadowColor: '#005CA9',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    textoNome: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    containerLegenda: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        width: '100%',
        marginVertical: 4,
    },
    itemLegenda: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    bolinhaCor: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    textoLegenda: {
        fontSize: 13,
        color: '#64748B',
        fontWeight: '500',
    },
    linha: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        gap: 16,
    },
    caixaGraficoPequena: {
        flex: 1,
        height: 135,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    caixaGraficoGrande: {
        width: '100%',
        height: 75,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    barraIndicadoraVermelha: {
        width: 6,
        height: '100%',
        backgroundColor: '#E30613',
    },
    barraIndicadoraAzul: {
        width: 6,
        height: '100%',
        backgroundColor: '#005CA9',
    },
    conteudoCaixaGrande: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    rotuloGrande: {
        color: '#1E293B',
        fontSize: 15,
        fontWeight: '600',
    },
    valorGrandeFalta: {
        color: '#E30613',
        fontSize: 20,
        fontWeight: '700',
    },
    valorGrandePresenca: {
        color: '#005CA9',
        fontSize: 20,
        fontWeight: '700',
    },
    tituloGrafico: {
        color: '#1E293B',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 12,
        textAlign: 'center',
    },
});