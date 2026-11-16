import { StyleSheet, Platform, StatusBar } from 'react-native';
import { cores, espacos, raios, sombra } from './theme';

const topoSeguro =
    Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 8 : 16;

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: cores.fundo
    },
    conteudo: {
        paddingBottom: espacos.lg + 8
    },

    // ---------- Cabeçalho ----------
    header: {
        backgroundColor: cores.primaria,
        paddingTop: topoSeguro,
        paddingBottom: espacos.md + 6,
        paddingHorizontal: espacos.md,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: espacos.md
    },
    voltar: {
        position: 'absolute',
        left: espacos.md,
        bottom: espacos.md + 6
    },
    voltarTexto: {
        color: cores.branco,
        fontSize: 14,
        fontWeight: '500'
    },
    headerTitulo: {
        color: cores.branco,
        fontSize: 17,
        fontWeight: '700'
    },

    // ---------- Cards ----------
    card: {
        backgroundColor: cores.superficie,
        borderRadius: raios.lg,
        marginHorizontal: espacos.md,
        marginBottom: espacos.md,
        padding: espacos.md + 4,
        ...sombra
    },

    // ---------- Perfil ----------
    perfil: {
        alignItems: 'center',
        paddingVertical: espacos.lg
    },
    avatar: {
        width: 84,
        height: 84,
        borderRadius: raios.pill,
        backgroundColor: cores.primariaClara,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: espacos.md
    },
    avatarTexto: {
        color: cores.primaria,
        fontSize: 28,
        fontWeight: '800'
    },
    nome: {
        color: cores.texto,
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center'
    },
    servico: {
        color: cores.textoSuave,
        fontSize: 14,
        marginTop: 4
    },
    badge: {
        backgroundColor: cores.sucessoFundo,
        borderRadius: raios.pill,
        paddingVertical: 4,
        paddingHorizontal: 14,
        marginTop: espacos.md - 2
    },
    badgeTexto: {
        color: cores.sucesso,
        fontSize: 12,
        fontWeight: '700'
    },
    badgePendente: {
        backgroundColor: cores.alertaFundo
    },
    badgeTextoPendente: {
        color: cores.alerta
    },
    alterarStatus: {
        marginTop: espacos.sm + 4,
        paddingVertical: 4
    },
    alterarStatusTexto: {
        color: cores.primaria,
        fontSize: 13,
        fontWeight: '600',
        textDecorationLine: 'underline'
    },

    // ---------- Informações ----------
    secaoTitulo: {
        color: cores.primaria,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
        marginBottom: espacos.sm
    },
    secaoTituloEspaco: {
        marginTop: espacos.md
    },
    linha: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: cores.borda
    },
    linhaUltima: {
        borderBottomWidth: 0
    },
    rotulo: {
        color: cores.textoSuave,
        fontSize: 12
    },
    valor: {
        color: cores.texto,
        fontSize: 16,
        fontWeight: '500',
        marginTop: 2
    },
    valorDestaque: {
        color: cores.primaria,
        fontWeight: '700'
    },

    // ---------- Ações ----------
    acoes: {
        marginHorizontal: espacos.md
    },
    botaoPrimario: {
        backgroundColor: cores.primaria,
        borderRadius: raios.md,
        paddingVertical: 15,
        alignItems: 'center'
    },
    botaoPrimarioTexto: {
        color: cores.branco,
        fontSize: 15,
        fontWeight: '700'
    },
    botaoSecundario: {
        backgroundColor: cores.superficie,
        borderWidth: 1,
        borderColor: cores.primaria,
        borderRadius: raios.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: espacos.sm + 2
    },
    botaoSecundarioTexto: {
        color: cores.primaria,
        fontSize: 15,
        fontWeight: '600'
    },
    botaoPerigo: {
        borderRadius: raios.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: espacos.sm + 2
    },
    botaoPerigoTexto: {
        color: cores.perigo,
        fontSize: 14,
        fontWeight: '600'
    },

    // ---------- Edição ----------
    editarTitulo: {
        color: cores.texto,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: espacos.md
    },
    input: {
        backgroundColor: cores.fundo,
        borderWidth: 1,
        borderColor: cores.borda,
        borderRadius: raios.md,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 14,
        color: cores.texto,
        marginBottom: espacos.sm + 2
    }
});
