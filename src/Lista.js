import React from 'react';

import {
    View,
    Text,
    Pressable,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet
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
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    // =====================================================
    // TELA
    // =====================================================

    container: {
        flex: 1,
        backgroundColor: '#F5F8FC',
    },

    // =====================================================
    // CABEÇALHO AZUL
    // =====================================================

    header: {
        backgroundColor: '#10477D',
        paddingTop: 26,
        paddingHorizontal: 17,
        paddingBottom: 26,

        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },

    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logoArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',

        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 7,
    },

    logoText: {
        color: '#10477D',
        fontSize: 16,
        fontWeight: '800',
    },

    appName: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },

    notificationButton: {
        width: 35,
        height: 35,
        borderRadius: 18,

        backgroundColor: '#245889',

        alignItems: 'center',
        justifyContent: 'center',
    },

    notificationText: {
        fontSize: 17,
    },

    // =====================================================
    // SAUDAÇÃO
    // =====================================================

    greeting: {
        marginTop: 23,
    },

    greetingSmall: {
        color: '#D9E8F8',
        fontSize: 12,
        marginBottom: 7,
    },

    greetingTitle: {
        color: '#FFFFFF',
        fontSize: 29,
        lineHeight: 34,
        fontWeight: '400',
    },

    // =====================================================
    // RESUMO
    // =====================================================

    summaryCard: {
        marginTop: 20,

        minHeight: 76,

        backgroundColor: '#DCEBFA',
        borderRadius: 14,

        paddingHorizontal: 14,
        paddingVertical: 13,

        flexDirection: 'row',
        alignItems: 'center',
    },

    summaryItem: {
        flex: 1,
    },

    summaryLabel: {
        color: '#71869D',
        fontSize: 10,
        marginBottom: 5,
    },

    summaryNumber: {
        color: '#124A80',
        fontSize: 24,
        fontWeight: '400',
    },

    summaryButton: {
        width: 36,
        height: 36,
        borderRadius: 20,

        backgroundColor: '#0B4179',

        alignItems: 'center',
        justifyContent: 'center',
    },

    summaryButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },

    // =====================================================
    // ÁREA ABAIXO DO CABEÇALHO
    // =====================================================

    content: {
        flex: 1,
    },

    // =====================================================
    // BUSCA
    // =====================================================

    searchContainer: {
        marginTop: 22,
        marginHorizontal: 17,

        height: 43,

        backgroundColor: '#FFFFFF',
        borderRadius: 13,

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 14,

        shadowColor: '#173B61',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,

        elevation: 2,
    },

    searchIcon: {
        color: '#71879F',
        fontSize: 20,
        marginRight: 9,
    },

    searchText: {
        flex: 1,

        color: '#71879F',
        fontSize: 13,
    },

    filterButton: {
        paddingLeft: 10,
    },

    filterText: {
        color: '#10477D',
        fontSize: 18,
    },

    // =====================================================
    // TÍTULO DA LISTA
    // =====================================================

    listHeader: {
        marginTop: 18,
        marginHorizontal: 17,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginBottom: 10,
    },

    listTitle: {
        color: '#152F4A',
        fontSize: 20,
        fontWeight: '400',
    },

    registeredText: {
        color: '#154C82',
        fontSize: 11,
    },

    // =====================================================
    // LISTA
    // =====================================================

    list: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: 17,
        paddingBottom: 85,
    },

    // =====================================================
    // CLIENTE
    // =====================================================

    clientCard: {
        minHeight: 62,

        backgroundColor: '#FFFFFF',

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 9,

        borderBottomWidth: 1,
        borderBottomColor: '#E4ECF4',
    },

    firstClient: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    lastClient: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        borderBottomWidth: 0,
    },

    initials: {
        width: 41,
        height: 41,

        borderRadius: 13,

        backgroundColor: '#DCECFB',

        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 10,
    },

    initialsText: {
        color: '#124A80',
        fontSize: 12,
        fontWeight: '700',
    },

    clientInfo: {
        flex: 1,
        justifyContent: 'center',
    },

    clientName: {
        color: '#17324D',
        fontSize: 14,
        fontWeight: '500',

        marginBottom: 3,
    },

    clientService: {
        color: '#71849A',
        fontSize: 10,
    },

    // =====================================================
    // STATUS
    // =====================================================

    statusContainer: {
        backgroundColor: '#E7F7F0',

        borderRadius: 10,

        paddingHorizontal: 8,
        paddingVertical: 4,

        marginRight: 10,
    },

    statusText: {
        color: '#2DA271',
        fontSize: 9,
    },

    // =====================================================
    // BOTÃO "i"
    // =====================================================

    infoButton: {
        width: 28,
        height: 28,

        borderRadius: 15,

        borderWidth: 1,
        borderColor: '#D3E0EC',

        alignItems: 'center',
        justifyContent: 'center',
    },

    infoText: {
        color: '#124A80',
        fontSize: 14,
        fontWeight: '500',
    },

    // =====================================================
    // BOTÃO FLUTUANTE
    // =====================================================

    addButton: {
        position: 'absolute',

        right: 17,
        bottom: 16,

        width: 52,
        height: 52,

        borderRadius: 27,

        backgroundColor: '#0B4179',

        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#0B4179',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 6,
    },

    addButtonText: {
        color: '#FFFFFF',
        fontSize: 27,
        fontWeight: '200',

        marginTop: -2,
    },

});
