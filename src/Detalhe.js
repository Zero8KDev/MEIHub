import React from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native';

export default function Detalhe({ route, navigation }) {

    const { agendamento } = route.params;

    return (
    <View>

        <Text>Detalhes do agendamento</Text>

        <Text>Cliente:</Text>
        <Text>{agendamento.cliente}</Text>

        <Text>Serviço:</Text>
        <Text>{agendamento.servico}</Text>

        <Text>Data:</Text>
        <Text>{agendamento.data}</Text>

        <Text>Horário:</Text>
        <Text>{agendamento.horario}</Text>

        <Text>Status:</Text>
        <Text>{agendamento.status}</Text>

        <Pressable
        onPress={() => navigation.goBack()}
        >
        <Text>Voltar</Text>
        </Pressable>

    </View>
    );
}