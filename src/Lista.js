import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    Pressable,
    FlatList,
    SafeAreaView,
    TextInput,
    ActivityIndicator,
    ScrollView
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './ListaStyles';

// Lista inicial de clientes.
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

    const [carregando, setCarregando] = useState(true);

    const [clientesLista, setClientesLista] = useState(clientes);

    const [modalAberto, setModalAberto] = useState(false);

    // Estados dos campos do formulário.
    const [nome, setNome] = useState('');
    const [servico, setServico] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [desde, setDesde] = useState('');
    const [valorMensal, setValorMensal] = useState('');

    // Estados da busca e do filtro.
    const [busca, setBusca] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('Todos');

    useEffect(() => {
        carregarClientes();
    }, []);

    // Carrega os clientes salvos.
    async function carregarClientes() {
        try {
            setCarregando(true);
        
            const dados = await AsyncStorage.getItem('@meihub_clientes');
        
            if (dados) {
                setClientesLista(JSON.parse(dados));
            }
        } catch (error) {
            console.log('Erro ao carregar clientes:', error);
            alert('Não foi possível carregar os clientes.');
        } finally {
            setCarregando(false);
        }
    }

    // Salva um novo cliente.
    async function salvarCliente() {

        if (!nome.trim()) {
            alert('Digite o nome do cliente');
            return;
        }

        const novoCliente = {
            id: Date.now().toString(),

            iniciais: nome
                .trim()
                .split(/\s+/)
                .map(palavra => palavra[0])
                .join('')
                .substring(0, 2)
                .toUpperCase(),

            nome: nome.trim(),
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

            // Limpa os campos do formulário.
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

    // Abre a tela de detalhes do cliente.
    function abrirDetalhe(cliente) {
        navigation.navigate('Detalhe', {
            cliente: cliente
        });
    }

    // Aplica a busca por nome e o filtro de status.
    const clientesFiltrados = clientesLista.filter(cliente => {

        const nomeCorresponde = cliente.nome
            .toLowerCase()
            .includes(busca.trim().toLowerCase());

        const statusCorresponde =
            filtroStatus === 'Todos' ||
            cliente.status === filtroStatus;

        return nomeCorresponde && statusCorresponde;
    });

    const totalEmDia = clientesLista.filter(
        cliente => cliente.status === 'Em dia'
    ).length;

    return (
        <SafeAreaView style={styles.safe}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <View style={styles.marcaLinha}>
                    <View style={styles.marcaLogo}>
                        <Text style={styles.marcaLogoTexto}>M</Text>
                    </View>
                    <Text style={styles.marcaNome}>MEIHub</Text>
                </View>
                <Text style={styles.titulo}>Meus clientes</Text>
            </View>

            {/* Resumo */}
            <View style={styles.resumo}>
                <View style={styles.resumoBloco}>
                    <View style={styles.resumoItem}>
                        <Text style={styles.resumoRotulo}>Clientes</Text>
                        <Text style={styles.resumoValor}>
                            {clientesLista.length}
                        </Text>
                    </View>
                    <View style={styles.resumoItem}>
                        <Text style={styles.resumoRotulo}>Em dia</Text>
                        <Text style={styles.resumoValor}>{totalEmDia}</Text>
                    </View>
                </View>
                <View style={styles.resumoIcone}>
                    <Text style={styles.resumoIconeTexto}>✓</Text>
                </View>
            </View>

            {/* Campo de busca */}
            <TextInput
                style={styles.busca}
                placeholder="Buscar cliente pelo nome"
                value={busca}
                onChangeText={setBusca}
            />

            {/* Filtros por status */}
            <View style={styles.filtros}>
                {['Todos', 'Em dia', 'Pendente'].map(status => (
                    <Pressable
                        key={status}
                        onPress={() => setFiltroStatus(status)}
                        style={[
                            styles.filtro,
                            filtroStatus === status && styles.filtroAtivo
                        ]}
                    >
                        <Text
                            style={[
                                styles.filtroTexto,
                                filtroStatus === status && styles.filtroTextoAtivo
                            ]}
                        >
                            {filtroStatus === status ? '✓ ' : ''}
                            {status}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Cabeçalho da lista */}
            <View style={styles.listaCabecalho}>
                <Text style={styles.listaTitulo}>Clientes cadastrados</Text>
                <Text style={styles.listaContagem}>
                    {clientesFiltrados.length}{' '}
                    {clientesFiltrados.length === 1 ? 'cliente' : 'clientes'}
                </Text>
            </View>

            {/* Lista de clientes filtrados */}
            {carregando ? (
                <View style={styles.carregando}>
                    <ActivityIndicator size="large" />
                    <Text style={styles.carregandoTexto}>
                        Carregando clientes...
                    </Text>
                </View>
            ) : (
                <FlatList
                    style={styles.listaCard}
                    contentContainerStyle={styles.listaConteudo}
                    data={clientesFiltrados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.item}
                            onPress={() => abrirDetalhe(item)}
                        >
                            <View style={styles.avatar}>
                                <Text style={styles.avatarTexto}>
                                    {item.iniciais ||
                                        (item.nome || '')
                                            .split(' ')
                                            .map(palavra => palavra[0])
                                            .join('')
                                            .substring(0, 2)
                                            .toUpperCase()}
                                </Text>
                            </View>

                            <View style={styles.itemInfo}>
                                <Text style={styles.itemNome} numberOfLines={1}>
                                    {item.nome}
                                </Text>
                                <Text
                                    style={styles.itemServico}
                                    numberOfLines={1}
                                >
                                    {item.servico || 'Serviço não informado'}
                                </Text>
                            </View>

                            <View
                                style={[
                                    styles.badge,
                                    item.status === 'Pendente' &&
                                        styles.badgePendente
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.badgeTexto,
                                        item.status === 'Pendente' &&
                                            styles.badgeTextoPendente
                                    ]}
                                >
                                    {item.status}
                                </Text>
                            </View>

                            <View style={styles.itemInfoBotao}>
                                <Text style={styles.itemInfoTexto}>i</Text>
                            </View>
                        </Pressable>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.vazio}>
                            Nenhum cliente encontrado.
                        </Text>
                    }
                />
            )}

            {/* Botão para abrir o formulário */}
            <Pressable
                style={styles.fab}
                onPress={() => setModalAberto(true)}
            >
                <Text style={styles.fabTexto}>+</Text>
            </Pressable>

            {/* Formulário de cadastro */}
            {modalAberto && (
                <View style={styles.overlay}>
                    <ScrollView
                        style={styles.formulario}
                        keyboardShouldPersistTaps="handled"
                    >
                        <Text style={styles.formularioTitulo}>
                            Adicionar cliente
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome do cliente *"
                            value={nome}
                            onChangeText={setNome}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Serviço"
                            value={servico}
                            onChangeText={setServico}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Cliente desde"
                            value={desde}
                            onChangeText={setDesde}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Valor mensal"
                            value={valorMensal}
                            onChangeText={setValorMensal}
                        />

                        <Pressable
                            style={styles.botaoPrimario}
                            onPress={salvarCliente}
                        >
                            <Text style={styles.botaoPrimarioTexto}>
                                Salvar
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.botaoSecundario}
                            onPress={() => setModalAberto(false)}
                        >
                            <Text style={styles.botaoSecundarioTexto}>
                                Cancelar
                            </Text>
                        </Pressable>
                    </ScrollView>
                </View>
            )}

        </SafeAreaView>
    );
}
