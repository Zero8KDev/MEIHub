import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    SafeAreaView,
    Alert,
    ActivityIndicator
} from 'react-native';

import {
    buscarClientePorId,
    atualizarCliente,
    excluirCliente
} from './banco';

export default function Detalhe({ route, navigation }) {
    const [cliente, setCliente] = useState(route.params?.cliente || null);
    const [carregando, setCarregando] = useState(true);
    const [editando, setEditando] = useState(false);

    const [nome, setNome] = useState('');
    const [servico, setServico] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [desde, setDesde] = useState('');
    const [valorMensal, setValorMensal] = useState('');
    const [status, setStatus] = useState('Em dia');

    useEffect(() => {
        const carregar = async () => {
            try {
                const id = route.params?.clienteId ?? route.params?.cliente?.id;
                const dados = await buscarClientePorId(id);
                if (!dados) {
                    Alert.alert('Cliente não encontrado', 'Este cliente não existe mais no banco de dados.', [
                        { text: 'Voltar', onPress: () => navigation.goBack() }
                    ]);
                    return;
                }
                preencherCampos(dados);
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
                Alert.alert('Erro', 'Não foi possível consultar o cliente no SQLite.');
            } finally {
                setCarregando(false);
            }
        };
        carregar();
    }, [route.params, navigation]);

    function preencherCampos(dados) {
        setCliente(dados);
        setNome(dados.nome || '');
        setServico(dados.servico || '');
        setEmail(dados.email || '');
        setTelefone(dados.telefone || '');
        setDesde(dados.desde || '');
        setValorMensal(dados.valorMensal || '');
        setStatus(dados.status || 'Em dia');
    }

    async function salvarEdicao() {
        if (!nome.trim()) {
            Alert.alert('Atenção', 'O nome do cliente é obrigatório.');
            return;
        }
        if (nome.trim().length < 2) {
            Alert.alert('Nome inválido', 'O nome deve ter pelo menos 2 caracteres.');
            return;
        }

        const atualizado = {
            ...cliente,
            nome: nome.trim(),
            servico: servico.trim(),
            email: email.trim(),
            telefone: telefone.trim(),
            desde: desde.trim(),
            valorMensal: valorMensal.trim(),
            status
        };

        try {
            await atualizarCliente(atualizado);
            preencherCampos(atualizado);
            setEditando(false);
            Alert.alert('Sucesso', 'Os dados do cliente foram atualizados.');
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            Alert.alert('Erro', 'Não foi possível atualizar o cliente.');
        }
    }

    async function alterarStatus() {
        const atualizado = {
            ...cliente,
            status: status === 'Em dia' ? 'Pendente' : 'Em dia'
        };
        try {
            await atualizarCliente(atualizado);
            preencherCampos(atualizado);
        } catch (error) {
            console.error('Erro ao alterar status:', error);
            Alert.alert('Erro', 'Não foi possível alterar o status.');
        }
    }

    function confirmarExclusao() {
        Alert.alert(
            'Excluir cliente',
            `Deseja realmente excluir ${cliente?.nome}? Esta ação não pode ser desfeita.`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await excluirCliente(cliente.id);
                            Alert.alert('Cliente excluído', 'O cadastro foi removido do banco de dados.', [
                                { text: 'OK', onPress: () => navigation.goBack() }
                            ]);
                        } catch (error) {
                            console.error('Erro ao excluir cliente:', error);
                            Alert.alert('Erro', 'Não foi possível excluir o cliente.');
                        }
                    }
                }
            ]
        );
    }

    if (carregando || !cliente) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <Text>Carregando dados do cliente...</Text>
            </SafeAreaView>
        );
    }

    const campos = [
        ['Nome do cliente *', nome, setNome],
        ['Serviço', servico, setServico],
        ['E-mail', email, setEmail],
        ['Telefone', telefone, setTelefone],
        ['Cliente desde', desde, setDesde],
        ['Valor mensal', valorMensal, setValorMensal]
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginBottom: 12 }}>
                    <Text style={{ color: '#2563eb' }}>‹ Voltar</Text>
                </Pressable>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4 }}>
                    {editando ? 'Editar cliente' : 'Detalhes do cliente'}
                </Text>

                {!editando ? (
                    <View style={{ padding: 14, borderWidth: 1, borderColor: '#ddd', borderRadius: 10, marginVertical: 12 }}>
                        <Text style={{ fontSize: 21, fontWeight: 'bold' }}>{cliente.nome}</Text>
                        <Text style={{ marginTop: 4 }}>{cliente.servico || 'Serviço não informado'}</Text>
                        <Text style={{ marginTop: 4 }}>Status: {status}</Text>
                        <Pressable onPress={alterarStatus} style={{ padding: 10, backgroundColor: '#dbeafe', borderRadius: 8, marginTop: 10 }}>
                            <Text>Alterar para {status === 'Em dia' ? 'Pendente' : 'Em dia'}</Text>
                        </Pressable>
                    </View>
                ) : null}

                {editando ? (
                    <View>
                        {campos.map(([placeholder, valor, alterar]) => (
                            <TextInput
                                key={placeholder}
                                style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginVertical: 5 }}
                                placeholder={placeholder}
                                value={valor}
                                onChangeText={alterar}
                                keyboardType={placeholder === 'E-mail' ? 'email-address' : placeholder === 'Telefone' ? 'phone-pad' : 'default'}
                                autoCapitalize={placeholder === 'E-mail' ? 'none' : 'sentences'}
                            />
                        ))}
                        <Pressable onPress={salvarEdicao} style={{ backgroundColor: '#16a34a', padding: 12, borderRadius: 8, marginTop: 8 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar alterações</Text>
                        </Pressable>
                        <Pressable onPress={() => { preencherCampos(cliente); setEditando(false); }} style={{ padding: 12 }}>
                            <Text style={{ textAlign: 'center' }}>Cancelar edição</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Informações de contato</Text>
                        <Text style={{ marginTop: 8 }}>E-mail: {cliente.email || 'Não informado'}</Text>
                        <Text style={{ marginTop: 8 }}>Telefone: {cliente.telefone || 'Não informado'}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 18 }}>Informações do cadastro</Text>
                        <Text style={{ marginTop: 8 }}>Cliente desde: {cliente.desde || 'Não informado'}</Text>
                        <Text style={{ marginTop: 8 }}>Valor mensal: {cliente.valorMensal || 'Não informado'}</Text>

                        <Pressable onPress={() => setEditando(true)} style={{ backgroundColor: '#2563eb', padding: 12, borderRadius: 8, marginTop: 18 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Editar cliente</Text>
                        </Pressable>
                        <Pressable onPress={confirmarExclusao} style={{ backgroundColor: '#fee2e2', padding: 12, borderRadius: 8, marginTop: 8 }}>
                            <Text style={{ color: '#b91c1c', textAlign: 'center' }}>Excluir cliente</Text>
                        </Pressable>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
