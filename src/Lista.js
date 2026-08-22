import React from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList
} from 'react-native';

const agendamentos = [
    {
    id: '1',
    cliente: 'João da Silva',
    servico: 'Instalação elétrica',
    data: 'Hoje',
    horario: '14:00',
    status: 'Agendado'
    },
    {
    id: '2',
    cliente: 'Maria Oliveira',
    servico: 'Manutenção de computador',
    data: 'Amanhã',
    horario: '09:30',
    status: 'Agendado'
    },
    {
    id: '3',
    cliente: 'Carlos Santos',
    servico: 'Pintura residencial',
    data: '25/08/2026',
    horario: '15:00',
    status: 'Agendado'
    }
];

export default function Lista({ navigation }) {
    return (
    <View>

        <Text>Próximos agendamentos</Text>

        <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

            <Pressable
            onPress={() =>
                navigation.navigate('Detalhe', {
                agendamento: item
                })
            }
            >

            <Text>{item.cliente}</Text>

            <Text>{item.servico}</Text>

            <Text>
                {item.data} - {item.horario}
            </Text>

            <Text>{item.status}</Text>

            </Pressable>

        )}
        />

        <Pressable
        onPress={() => alert('Em breve!')}
        >
        <Text>+ Adicionar agendamento</Text>
        </Pressable>

    </View>
    );
}