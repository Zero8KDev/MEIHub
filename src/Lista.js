import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList,
    SafeAreaView,
    StatusBar,
    TextInput
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './DesignLista';

// Lista de clientes utilizada nesta primeira versão.
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

    const [clientesLista, setClientesLista] = useState(clientes);

    const [modalAberto, setModalAberto] = useState(false);

    const [nome, setNome] = useState('');
    const [servico, setServico] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [desde, setDesde] = useState('');
    const [valorMensal, setValorMensal] = useState('');

    useEffect(() => {
        carregarClientes();
    }, []);

    async function carregarClientes() {
        try {
            const dados = await AsyncStorage.getItem('@meihub_clientes');

            if (dados) {
                setClientesLista(JSON.parse(dados));
            }
        } catch (error) {
            console.log('Erro ao carregar clientes:', error);
        }
    }

    async function salvarCliente() {

        if (!nome.trim()) {
            alert('Digite o nome do cliente');
            return;
        }

        const novoCliente = {
            id: Date.now().toString(),

            iniciais: nome
                .split(' ')
                .map(palavra => palavra[0])
                .join('')
                .substring(0, 2)
                .toUpperCase(),

            nome: nome,
            servico: servico,
            status: 'Em dia',
            email: email,
            telefone: telefone,
            desde: desde,
            valorMensal: valorMensal
        };

        try {
            const novaLista = [...clientesLista, novoCliente];

            await AsyncStorage.setItem(
                '@meihub_clientes',
                JSON.stringify(novaLista)
            );

            setClientesLista(novaLista);

            setNome('');
            setServico('');
            setEmail('');
            setTelefone('');
            setDesde('');
            setValorMensal('');

            setModalAberto(false);

        } catch (error) {
            console.log('Erro ao salvar cliente:', error);
        }
    }

    function abrirDetalhe(cliente) {
        navigation.navigate('Detalhe', {
            cliente: cliente
        });
    }

    return (
        <SafeAreaView>

            <Text>Clientes</Text>

            {/* Botão Adicionar */}
            <Pressable
                onPress={() => setModalAberto(true)}
            >
                <Text>Adicionar</Text>
            </Pressable>

            {/* Lista de clientes */}
            <FlatList
                data={clientesLista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => abrirDetalhe(item)}
                    >
                        <Text>{item.iniciais}</Text>
                        <Text>{item.nome}</Text>
                        <Text>{item.servico}</Text>
                        <Text>{item.status}</Text>
                    </Pressable>
                )}
            />

            {/* Formulário */}
            {modalAberto && (
                <View>

                    <Text>Adicionar Cliente</Text>

                    <TextInput
                        placeholder="Nome do cliente *"
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TextInput
                        placeholder="Serviço"
                        value={servico}
                        onChangeText={setServico}
                    />

                    <TextInput
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        placeholder="Telefone"
                        value={telefone}
                        onChangeText={setTelefone}
                    />

                    <TextInput
                        placeholder="Cliente desde"
                        value={desde}
                        onChangeText={setDesde}
                    />

                    <TextInput
                        placeholder="Valor mensal"
                        value={valorMensal}
                        onChangeText={setValorMensal}
                    />

                    <Pressable onPress={salvarCliente}>
                        <Text>Salvar</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setModalAberto(false)}
                    >
                        <Text>Cancelar</Text>
                    </Pressable>

                </View>
            )}

        </SafeAreaView>
    );
}
