import React, { useCallback, useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable,
    FlatList,
    SafeAreaView,
    TextInput,
    Alert,
    ScrollView
} from 'react-native';

import { adicionarCliente, listarClientes } from './banco';

export default function Lista({ navigation }) {
    const [clientesLista, setClientesLista] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [modalAberto, setModalAberto] = useState(false);

    const [nome, setNome] = useState('');
    const [servico, setServico] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [desde, setDesde] = useState('');
    const [valorMensal, setValorMensal] = useState('');

    const [busca, setBusca] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('Todos');

    const carregarClientes = useCallback(async () => {
        try {
            setCarregando(true);
            const dados = await listarClientes(busca, filtroStatus);
            setClientesLista(dados);
        } catch (error) {
            console.error('Erro ao carregar clientes do SQLite:', error);
            Alert.alert('Erro', 'Não foi possível carregar os clientes do banco de dados.');
        } finally {
            setCarregando(false);
        }
    }, [busca, filtroStatus]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', carregarClientes);
        carregarClientes();
        return unsubscribe;
    }, [navigation, carregarClientes]);

    async function salvarCliente() {
        if (!nome.trim()) {
            Alert.alert('Campo obrigatório', 'Digite o nome do cliente.');
            return;
        }

        if (nome.trim().length < 2) {
            Alert.alert('Nome inválido', 'O nome deve ter pelo menos 2 caracteres.');
            return;
        }

        const novoCliente = {
            id: Date.now().toString(),
            nome: nome.trim(),
            servico: servico.trim(),
            status: 'Em dia',
            email: email.trim(),
            telefone: telefone.trim(),
            desde: desde.trim(),
            valorMensal: valorMensal.trim()
        };

        try {
            await adicionarCliente(novoCliente);
            limparFormulario();
            await carregarClientes();
            Alert.alert('Sucesso', 'Cliente cadastrado no banco de dados.');
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            Alert.alert('Erro', 'Não foi possível salvar o cliente.');
        }
    }

    function limparFormulario() {
        setNome('');
        setServico('');
        setEmail('');
        setTelefone('');
        setDesde('');
        setValorMensal('');
        setModalAberto(false);
    }

    function abrirDetalhe(cliente) {
        navigation.navigate('Detalhe', { clienteId: cliente.id });
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>MEIHub</Text>
            <Text style={{ fontSize: 18, marginBottom: 12 }}>Meus clientes</Text>

            <TextInput
                style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}
                placeholder="Buscar cliente pelo nome"
                value={busca}
                onChangeText={setBusca}
            />

            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 12 }}>
                {['Todos', 'Em dia', 'Pendente'].map(status => (
                    <Pressable
                        key={status}
                        onPress={() => setFiltroStatus(status)}
                        style={{ padding: 10, borderRadius: 8, backgroundColor: filtroStatus === status ? '#dbeafe' : '#eee' }}
                    >
                        <Text>{filtroStatus === status ? '✓ ' : ''}{status}</Text>
                    </Pressable>
                ))}
            </View>

            <Pressable
                onPress={() => setModalAberto(!modalAberto)}
                style={{ backgroundColor: '#2563eb', padding: 12, borderRadius: 8, marginBottom: 12 }}
            >
                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
                    {modalAberto ? 'Fechar formulário' : '+ Adicionar cliente'}
                </Text>
            </Pressable>

            {modalAberto && (
                <ScrollView style={{ maxHeight: 300, marginBottom: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Cadastrar cliente</Text>
                    {[
                        ['Nome do cliente *', nome, setNome],
                        ['Serviço', servico, setServico],
                        ['E-mail', email, setEmail],
                        ['Telefone', telefone, setTelefone],
                        ['Cliente desde', desde, setDesde],
                        ['Valor mensal', valorMensal, setValorMensal]
                    ].map(([placeholder, valor, alterar]) => (
                        <TextInput
                            key={placeholder}
                            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 8 }}
                            placeholder={placeholder}
                            value={valor}
                            onChangeText={alterar}
                        />
                    ))}
                    <Pressable onPress={salvarCliente} style={{ backgroundColor: '#16a34a', padding: 12, borderRadius: 8 }}>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar cliente</Text>
                    </Pressable>
                    <Pressable onPress={limparFormulario} style={{ padding: 12 }}>
                        <Text style={{ textAlign: 'center' }}>Cancelar</Text>
                    </Pressable>
                </ScrollView>
            )}

            {carregando ? <Text>Carregando clientes...</Text> : null}

            <FlatList
                data={clientesLista}
                keyExtractor={item => String(item.id)}
                onRefresh={carregarClientes}
                refreshing={carregando}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => abrirDetalhe(item)}
                        style={{ padding: 14, marginBottom: 8, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}
                    >
                        <Text style={{ fontSize: 12, color: '#555' }}>{(item.nome || '').split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase()}</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.nome}</Text>
                        <Text>{item.servico || 'Serviço não informado'}</Text>
                        <Text>Status: {item.status}</Text>
                    </Pressable>
                )}
                ListEmptyComponent={!carregando ? <Text>Nenhum cliente encontrado.</Text> : null}
            />
        </SafeAreaView>
    );
}
