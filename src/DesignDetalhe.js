import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },

    // Header
    header: {
        backgroundColor: '#1E3A5F',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 18,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    voltarBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
    },
    voltarIcon: {
        fontSize: 28,
        color: '#93C5FD',
        fontWeight: '300',
        marginRight: 2,
    },
    voltarText: {
        fontSize: 14,
        color: '#93C5FD',
        fontWeight: '500',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#FFF',
    },

    // Scroll
    scroll: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },

    // Card de perfil
    perfilCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingVertical: 28,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#BFDBFE',
        borderStyle: 'dashed',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#EFF6FF',
        borderWidth: 2.5,
        borderColor: '#3B82F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarIniciais: {
        fontSize: 26,
        fontWeight: '700',
        color: '#3B82F6',
    },
    nome: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 4,
    },
    servico: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 14,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        gap: 6,
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    statusText: {
        fontSize: 13,
        fontWeight: '600',
    },

    // Card de informações
    infoCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    infoCardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 16,
    },
    infoRow: {
        paddingVertical: 14,
    },
    infoLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    infoIcon: {
        fontSize: 14,
        marginRight: 6,
    },
    infoLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#94A3B8',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    infoValue: {
        fontSize: 15,
        color: '#1E293B',
        fontWeight: '500',
        paddingLeft: 22,
    },
    valorHighlight: {
        color: '#3B82F6',
        fontWeight: '700',
    },
    infoLinha: {
        height: 1,
        backgroundColor: '#F1F5F9',
    },

    // Botões
    botoesContainer: {
        marginTop: 20,
        gap: 12,
    },
    btnMensagem: {
        flexDirection: 'row',
        backgroundColor: '#3B82F6',
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    btnMensagemIcon: {
        fontSize: 18,
    },
    btnMensagemText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
    },
    btnEditar: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
    },
    btnEditarIcon: {
        fontSize: 18,
    },
    btnEditarText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#475569',
    },
});