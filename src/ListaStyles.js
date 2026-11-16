import { StyleSheet, Platform, StatusBar } from 'react-native';
import { cores, espacos, raios, sombra } from './theme';

const topoSeguro =
    Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 12 : 20;

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: cores.fundo
    },

    // ---------- Cabeçalho ----------
    header: {
        backgroundColor: cores.primaria,
        paddingTop: topoSeguro,
        paddingHorizontal: espacos.md,
        paddingBottom: espacos.lg + 20,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28
    },
    marcaLinha: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    marcaLogo: {
        width: 32,
        height: 32,
        borderRadius: raios.sm,
        backgroundColor: cores.branco,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: espacos.sm
    },
    marcaLogoTexto: {
        color: cores.primaria,
        fontSize: 16,
        fontWeight: '800'
    },
    marcaNome: {
        color: cores.branco,
        fontSize: 16,
        fontWeight: '700'
    },
    titulo: {
        color: cores.branco,
        fontSize: 30,
        fontWeight: '600',
        lineHeight: 36,
        marginTop: espacos.md
    },

    // ---------- Card de resumo ----------
    resumo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: cores.primariaClara,
        borderRadius: raios.md,
        padding: espacos.md,
        marginHorizontal: espacos.md,
        marginTop: -28
    },
    resumoBloco: {
        flexDirection: 'row'
    },
    resumoItem: {
        marginRight: espacos.lg + 8
    },
    resumoRotulo: {
        color: cores.textoSuave,
        fontSize: 12
    },
    resumoValor: {
        color: cores.primaria,
        fontSize: 22,
        fontWeight: '700',
        marginTop: 2
    },
    resumoIcone: {
        width: 40,
        height: 40,
        borderRadius: raios.pill,
        backgroundColor: cores.primaria,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resumoIconeTexto: {
        color: cores.branco,
        fontSize: 16
    },

    // ---------- Busca e filtros ----------
    busca: {
        backgroundColor: cores.superficie,
        borderRadius: raios.md,
        borderWidth: 1,
        borderColor: cores.borda,
        paddingHorizontal: espacos.md,
        paddingVertical: 12,
        marginHorizontal: espacos.md,
        marginTop: espacos.md,
        fontSize: 14,
        color: cores.texto
    },
    filtros: {
        flexDirection: 'row',
        paddingHorizontal: espacos.md,
        marginTop: espacos.sm + 4
    },
    filtro: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: raios.pill,
        backgroundColor: cores.superficie,
        borderWidth: 1,
        borderColor: cores.borda,
        marginRight: espacos.sm
    },
    filtroAtivo: {
        backgroundColor: cores.primaria,
        borderColor: cores.primaria
    },
    filtroTexto: {
        color: cores.primaria,
        fontSize: 13,
        fontWeight: '600'
    },
    filtroTextoAtivo: {
        color: cores.branco
    },

    // ---------- Lista ----------
    listaCabecalho: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        paddingHorizontal: espacos.md,
        marginTop: espacos.md
    },
    listaTitulo: {
        color: cores.texto,
        fontSize: 20,
        fontWeight: '600'
    },
    listaContagem: {
        color: cores.primaria,
        fontSize: 12
    },
    listaCard: {
        flex: 1,
        backgroundColor: cores.superficie,
        borderRadius: raios.lg,
        marginHorizontal: espacos.md,
        marginTop: espacos.sm + 4,
        marginBottom: espacos.md,
        paddingHorizontal: espacos.md,
        ...sombra
    },
    listaConteudo: {
        paddingBottom: 90 // espaço para o botão flutuante
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: cores.borda
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: raios.md,
        backgroundColor: cores.primariaClara,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: espacos.md - 2
    },
    avatarTexto: {
        color: cores.primaria,
        fontSize: 15,
        fontWeight: '700'
    },
    itemInfo: {
        flex: 1
    },
    itemNome: {
        color: cores.texto,
        fontSize: 16,
        fontWeight: '500'
    },
    itemServico: {
        color: cores.textoSuave,
        fontSize: 12,
        marginTop: 2
    },
    badge: {
        backgroundColor: cores.sucessoFundo,
        borderRadius: raios.pill,
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginHorizontal: espacos.sm
    },
    badgeTexto: {
        color: cores.sucesso,
        fontSize: 11,
        fontWeight: '600'
    },
    badgePendente: {
        backgroundColor: cores.alertaFundo
    },
    badgeTextoPendente: {
        color: cores.alerta
    },
    itemInfoBotao: {
        width: 26,
        height: 26,
        borderRadius: raios.pill,
        borderWidth: 1,
        borderColor: cores.borda,
        backgroundColor: cores.fundo,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemInfoTexto: {
        color: cores.primaria,
        fontSize: 12,
        fontWeight: '700'
    },
    vazio: {
        color: cores.textoSuave,
        textAlign: 'center',
        paddingVertical: espacos.lg
    },
    carregando: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carregandoTexto: {
        color: cores.textoSuave,
        marginTop: espacos.sm
    },

    // ---------- Botão flutuante ----------
    fab: {
        position: 'absolute',
        right: espacos.md + 4,
        bottom: espacos.lg,
        width: 56,
        height: 56,
        borderRadius: raios.pill,
        backgroundColor: cores.primaria,
        alignItems: 'center',
        justifyContent: 'center',
        ...sombra,
        shadowOpacity: 0.25
    },
    fabTexto: {
        color: cores.branco,
        fontSize: 30,
        lineHeight: 32,
        fontWeight: '300'
    },

    // ---------- Formulário (sobreposição) ----------
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(11, 58, 110, 0.45)',
        justifyContent: 'center',
        padding: espacos.md
    },
    formulario: {
        backgroundColor: cores.superficie,
        borderRadius: raios.lg,
        padding: espacos.md + 4
    },
    formularioTitulo: {
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
    },
    botaoPrimario: {
        backgroundColor: cores.primaria,
        borderRadius: raios.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: espacos.sm
    },
    botaoPrimarioTexto: {
        color: cores.branco,
        fontSize: 15,
        fontWeight: '700'
    },
    botaoSecundario: {
        borderWidth: 1,
        borderColor: cores.primaria,
        borderRadius: raios.md,
        paddingVertical: 13,
        alignItems: 'center',
        marginTop: espacos.sm
    },
    botaoSecundarioTexto: {
        color: cores.primaria,
        fontSize: 15,
        fontWeight: '600'
    }
});
