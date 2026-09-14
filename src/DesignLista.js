import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },

    // Header
    header: {
        backgroundColor: '#1E3A5F',
        paddingTop: 16,
        paddingBottom: 28,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#3B82F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    logoText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
    appName: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
    notificacaoBtn: {
        position: 'relative',
    },
    notificacaoIcon: {
        fontSize: 22,
    },
    notificacaoBadge: {
        position: 'absolute',
        top: -4,
        right: -6,
        backgroundColor: '#EF4444',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#FFF',
        fontSize: 9,
        fontWeight: '700',
    },
    saudacao: {
        color: '#94B8DB',
        fontSize: 14,
        marginBottom: 4,
    },
    titulo: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: '700',
    },

    // Indicadores
    indicadoresCard: {
        flexDirection: 'row',
        backgroundColor: '#DBEAFE',
        marginHorizontal: 20,
        marginTop: -14,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    indicador: {
        alignItems: 'center',
    },
    indicadorNumero: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E3A5F',
    },
    indicadorLabel: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
    },
    indicadorDivider: {
        width: 1,
        height: 36,
        backgroundColor: '#93C5FD',
    },

    // Busca
    buscaContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        gap: 10,
    },
    buscaInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 14,
        paddingHorizontal: 14,
        height: 48,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    buscaIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    buscaTexto: {
        flex: 1,
        fontSize: 15,
        color: '#1E293B',
    },
    filtroBtn: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    filtroIcon: {
        fontSize: 18,
    },

    // Lista
    listaCard: {
        flex: 1,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    listaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    listaTitulo: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1E293B',
    },
    listaContador: {
        fontSize: 13,
        color: '#94A3B8',
    },

    // Item do cliente
    listaVazia: {
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 24,
    },
    listaVaziaIcon: {
        fontSize: 40,
        marginBottom: 12,
    },
    listaVaziaTitulo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 4,
    },
    listaVaziaTexto: {
        fontSize: 13,
        color: '#94A3B8',
        textAlign: 'center',
    },
    clienteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    clienteAvatar: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#EFF6FF',
        borderWidth: 1.5,
        borderColor: '#BFDBFE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    clienteIniciais: {
        fontSize: 16,
        fontWeight: '700',
        color: '#3B82F6',
    },
    clienteInfo: {
        flex: 1,
    },
    clienteNome: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 2,
    },
    clienteServico: {
        fontSize: 13,
        color: '#64748B',
    },
    clienteLado: {
        alignItems: 'flex-end',
        gap: 6,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        gap: 4,
    },
    statusDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '600',
    },
    infoBtn: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBtnText: {
        fontSize: 14,
    },
    separador: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginLeft: 60,
    },

    // Botão adicionar
    addBtn: {
        position: 'absolute',
        bottom: 28,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3B82F6',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 8,
    },
    addBtnText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: '300',
        marginTop: -2,
    },

    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 20,
        paddingBottom: 36,
        maxHeight: '90%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B',
    },
    modalClose: {
        fontSize: 20,
        color: '#94A3B8',
        padding: 4,
    },
    modalForm: {
        paddingHorizontal: 20,
    },
    inputLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: '#1E293B',
    },
    modalBotoes: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 24,
        gap: 12,
    },
    btnCancelar: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 14,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
    },
    btnCancelarText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#64748B',
    },
    btnSalvar: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 14,
        backgroundColor: '#3B82F6',
        alignItems: 'center',
    },
    btnSalvarText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFF',
    },
});