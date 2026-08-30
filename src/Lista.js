import React from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList
} from 'react-native';

// Lista de clientes utilizada nesta primeira versão.
// Os dados são fixos e futuramente serão substituídos
// pelos dados armazenados no SQLite.
const clientes = [
    {
        id: '1',
        iniciais: 'AC',
        nome: 'Ana Costa',
        servico: 'Consultoria mensal',
        status: 'Em dia',
        email: 'ana.costa@email.com',
        telefone: '(11) 98765-4321',
        desde: 'Março 2024',
        valorMensal: 'R$ 1.200,00'
    },
    {
        id: '2',
        iniciais: 'BM',
        nome: 'Bruno Martins',
        servico: 'Identidade visual',
        status: 'Em dia',
        email: 'bruno.martins@email.com',
        telefone: '(11) 97654-3210',
        desde: 'Janeiro 2025',
        valorMensal: 'R$ 850,00'
    },
    {
        id: '3',
        iniciais: 'CL',
        nome: 'Clara Lima',
        servico: 'Gestão de conteúdo',
        status: 'Em dia',
        email: 'clara.lima@email.com',
        telefone: '(11) 96543-2109',
        desde: 'Junho 2024',
        valorMensal: 'R$ 950,00'
    },
    {
        id: '4',
        iniciais: 'DS',
        nome: 'Diego Santos',
        servico: 'Manutenção do site',
        status: 'Em dia',
        email: 'diego.santos@email.com',
        telefone: '(11) 95432-1098',
        desde: 'Agosto 2024',
        valorMensal: 'R$ 700,00'
    },
    {
        id: '5',
        iniciais: 'EF',
        nome: 'Estúdio Flora',
        servico: 'Projeto avulso',
        status: 'Em dia',
        email: 'contato@estudioflora.com',
        telefone: '(11) 94321-0987',
        desde: 'Fevereiro 2025',
        valorMensal: 'R$ 1.500,00'
    }
];

export default function Lista({ navigation }) {

    // Função executada quando um cliente é selecionado.
    // Envia o objeto completo do cliente para a tela Detalhe.
    function abrirDetalhe(cliente) {
        navigation.navigate('Detalhe', {
            cliente: cliente
        });
    }

    return (
        <View>

            {/* Cabeçalho do aplicativo */}
            <View>
                <Text>m.</Text>
                <Text>Meu Negócio</Text>

                {/* Botão de notificações */}
                <Pressable
                    onPress={() => alert('Notificações')}
                >
                    <Text>🔔</Text>
                </Pressable>
            </View>


            {/* Saudação */}
            <View>
                <Text>Olá, XXX</Text>

                <Text>
                    Seus clientes, sempre
                </Text>

                <Text>
                    por perto.
                </Text>
            </View>


            {/* Resumo dos clientes */}
            <View>

                <View>
                    <Text>Clientes ativos</Text>
                    <Text>24</Text>
                </View>

                <View>
                    <Text>Este mês</Text>
                    <Text>+3</Text>
                </View>

                <Pressable
                    onPress={() => alert('Clientes')}
                >
                    <Text>♧</Text>
                </Pressable>

            </View>


            {/* Campo de busca */}
            <View>
                <Text>⌕</Text>

                <Text>
                    Buscar por nome ou serviço
                </Text>

                <Pressable
                    onPress={() => alert('Filtros')}
                >
                    <Text>☷</Text>
                </Pressable>
            </View>


            {/* Título da lista */}
            <View>
                <Text>Clientes</Text>
                <Text>24 cadastrados</Text>
            </View>


            {/* Lista de clientes */}
            <FlatList
                data={clientes}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (

                    <Pressable
                        onPress={() => abrirDetalhe(item)}
                    >

                        {/* Iniciais do cliente */}
                        <View>
                            <Text>{item.iniciais}</Text>
                        </View>


                        {/* Informações principais */}
                        <View>
                            <Text>{item.nome}</Text>
                            <Text>{item.servico}</Text>
                        </View>


                        {/* Status */}
                        <View>
                            <Text>{item.status}</Text>
                        </View>


                        {/* Botão de informações */}
                        <Pressable
                            onPress={() => abrirDetalhe(item)}
                        >
                            <Text>i</Text>
                        </Pressable>

                    </Pressable>
                )}
            />


            {/* Botão Adicionar */}
            <Pressable
                onPress={() => alert('Em breve!')}
            >
                <Text>+</Text>
            </Pressable>

        </View>
    );
}