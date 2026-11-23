import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';

import {
    View,
    Text,
    Pressable,
    TextInput,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native';

import { styles } from './DetalheStyles';

export default function Detalhe({ route, navigation }) {

    // Recebe os dados do cliente selecionado.
    const { cliente } = route.params;

    // Controla se o formulário de edição está aberto.
    const [editando, setEditando] = useState(false);

    // Guarda os dados que podem ser editados.
    const [nome, setNome] = useState(cliente.nome || '');
    const [servico, setServico] = useState(cliente.servico || '');
    const [email, setEmail] = useState(cliente.email || '');
    const [telefone, setTelefone] = useState(cliente.telefone || '');
    const [desde, setDesde] = useState(cliente.desde || '');
    const [valorMensal, setValorMensal] = useState(
        cliente.valorMensal || ''
    );

    const [status, setStatus] = useState(cliente.status || 'Em dia');

    // Atualiza o status na tela.
    function alterarStatus() {
        setStatus(status === 'Em dia' ? 'Pendente' : 'Em dia');
    }

    // Prepara os novos dados para serem enviados à tela anterior.
    function salvarEdicao() {

        if (!nome.trim()) {
            Alert.alert('Atenção', 'O nome do cliente é obrigatório.');
            return;
        }

        const clienteAtualizado = {
            ...cliente,
            iniciais: nome
                .trim()
                .split(/\s+/)
                .map(palavra => palavra[0])
                .join('')
                .substring(0, 2)
                .toUpperCase(),
            nome: nome.trim(),
            servico,
            email,
            telefone,
            desde,
            valorMensal,
            status
        };

        // A integração com o banco será feita posteriormente.
        Alert.alert(
            'Edição preparada',
            'Os dados foram atualizados nesta tela. A integração com o banco ainda precisa ser feita.'
        );

        setEditando(false);
    }

    // Solicita confirmação antes de excluir.
    function confirmarExclusao() {
        Alert.alert(
            'Excluir cliente',
            `Deseja realmente excluir ${cliente.nome}? Esta ação não pode ser desfeita.`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => {
                        // A exclusão real será integrada ao banco.
                        Alert.alert(
                            'Ação pendente',
                            'A exclusão precisa ser conectada ao banco de dados.'
                        );
                    }
                }
            ]
        );
    }

    //notificacao
    async function enviarNotificacao() {
        try {
            const { status } = await Notifications.requestPermissionsAsync();

            if (status !== 'granted') {
                alert('Permissão para notificações não concedida.');
                return;
            }

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'MEIHub - Lembrete de pagamento',
                    body: `Verifique o pagamento de ${cliente.nome}.`,
                },
                trigger: null,
            });

            alert('Notificação enviada!');
        } catch (error) {
            console.log(error);
            alert('Não foi possível enviar a notificação.');
        }
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
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.conteudo}>

                {/* Cabeçalho */}
                <View style={styles.header}>
                    <Pressable
                        style={styles.voltar}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.voltarTexto}>‹ Voltar</Text>
                    </Pressable>

                    <Text style={styles.headerTitulo}>
                        Detalhes do Cliente
                    </Text>
                </View>

                {/* Informações principais */}
                {!editando && (
                    <View style={styles.card}>
                        <View style={styles.perfil}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarTexto}>
                                    {cliente.iniciais}
                                </Text>
                            </View>

                            <Text style={styles.nome}>{cliente.nome}</Text>

                            <Text style={styles.servico}>
                                {cliente.servico || 'Serviço não informado'}
                            </Text>

                            <View
                                style={[
                                    styles.badge,
                                    status === 'Pendente' &&
                                        styles.badgePendente
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.badgeTexto,
                                        status === 'Pendente' &&
                                            styles.badgeTextoPendente
                                    ]}
                                >
                                    {status}
                                </Text>
                            </View>

                            <Pressable
                                style={styles.alterarStatus}
                                onPress={alterarStatus}
                            >
                                <Text style={styles.alterarStatusTexto}>
                                    Alterar status para {status === 'Em dia' ? 'Pendente' : 'Em dia'}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}

                {/* Formulário de edição */}
                {editando ? (
                    <View style={styles.card}>
                        <Text style={styles.editarTitulo}>Editar cliente</Text>

                        {campos.map(([placeholder, valor, alterar]) => (
                            <TextInput
                                key={placeholder}
                                style={styles.input}
                                placeholder={placeholder}
                                value={valor}
                                onChangeText={alterar}
                                keyboardType={
                                    placeholder === 'E-mail'
                                        ? 'email-address'
                                        : placeholder === 'Telefone'
                                            ? 'phone-pad'
                                            : 'default'
                                }
                                autoCapitalize={
                                    placeholder === 'E-mail' ? 'none' : 'sentences'
                                }
                            />
                        ))}

                        <Pressable
                            style={styles.botaoPrimario}
                            onPress={salvarEdicao}
                        >
                            <Text style={styles.botaoPrimarioTexto}>
                                Salvar alterações
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.botaoSecundario}
                            onPress={() => setEditando(false)}
                        >
                            <Text style={styles.botaoSecundarioTexto}>
                                Cancelar edição
                            </Text>
                        </Pressable>
                    </View>
                ) : (
                    <>
                        {/* Informações de contato */}
                        <View style={styles.card}>
                            <Text style={styles.secaoTitulo}>
                                Informações de contato
                            </Text>

                            <View style={styles.linha}>
                                <Text style={styles.rotulo}>E-mail</Text>
                                <Text style={styles.valor}>
                                    {cliente.email || 'Não informado'}
                                </Text>
                            </View>

                            <View style={[styles.linha, styles.linhaUltima]}>
                                <Text style={styles.rotulo}>Telefone</Text>
                                <Text style={styles.valor}>
                                    {cliente.telefone || 'Não informado'}
                                </Text>
                            </View>

                            {/* Informações do cadastro */}
                            <Text
                                style={[
                                    styles.secaoTitulo,
                                    styles.secaoTituloEspaco
                                ]}
                            >
                                Informações do cadastro
                            </Text>

                            <View style={styles.linha}>
                                <Text style={styles.rotulo}>Cliente desde</Text>
                                <Text style={styles.valor}>
                                    {cliente.desde || 'Não informado'}
                                </Text>
                            </View>

                            <View style={[styles.linha, styles.linhaUltima]}>
                                <Text style={styles.rotulo}>Valor mensal</Text>
                                <Text style={[styles.valor, styles.valorDestaque]}>
                                    {cliente.valorMensal || 'Não informado'}
                                </Text>
                            </View>
                        </View>

                        {/* Ações */}
                        <View style={styles.acoes}>
                            <Pressable
                                style={styles.botaoPrimario}
                                onPress={() => setEditando(true)}
                            >
                                <Text style={styles.botaoPrimarioTexto}>
                                    Editar cliente
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.botaoSecundario}
                                onPress={enviarNotificacao}
                            >
                                <Text style={styles.botaoSecundarioTexto}>
                                    Enviar lembrete de pagamento
                                </Text>
                            </Pressable>

                            <Pressable
                                style={styles.botaoPerigo}
                                onPress={confirmarExclusao}
                            >
                                <Text style={styles.botaoPerigoTexto}>
                                    Excluir cliente
                                </Text>
                            </Pressable>
                        </View>
                    </>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}
