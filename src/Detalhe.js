<<<<<<< HEAD
import React, { useState } from 'react';

=======
>>>>>>> 481fb4bfbd8960462eef2af93f0b6b50ec3ff397
import {
    View,
    Text,
    Pressable,
<<<<<<< HEAD
    TextInput,
    ScrollView,
    SafeAreaView,
    Alert
=======
    ScrollView,
    SafeAreaView,
    StatusBar,
    StyleSheet
>>>>>>> 481fb4bfbd8960462eef2af93f0b6b50ec3ff397
} from 'react-native';

export default function Detalhe({ route, navigation }) {

<<<<<<< HEAD
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

    return (
        <SafeAreaView>
            <ScrollView>

                {/* Cabeçalho */}
                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text>‹ Voltar</Text>
                    </Pressable>

                    <Text>Detalhes do Cliente</Text>
                </View>

                {/* Informações principais */}
                <View>
                    <Text>{cliente.iniciais}</Text>

                    <Text>{cliente.nome}</Text>

                    <Text>{cliente.servico}</Text>

                    <Text>Status: {status}</Text>

                    <Pressable onPress={alterarStatus}>
                        <Text>
                            Alterar status para {
                                status === 'Em dia' ? 'Pendente' : 'Em dia'
                            }
                        </Text>
                    </Pressable>
                </View>

                {/* Formulário de edição */}
                {editando ? (
                    <View>
                        <Text>Editar cliente</Text>

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
                            keyboardType="email-address"
                        />

                        <TextInput
                            placeholder="Telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType="phone-pad"
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

                        <Pressable onPress={salvarEdicao}>
                            <Text>Salvar alterações</Text>
                        </Pressable>

                        <Pressable onPress={() => setEditando(false)}>
                            <Text>Cancelar edição</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View>
                        {/* Informações de contato */}
                        <Text>Informações de contato</Text>

                        <View>
                            <Text>E-mail</Text>
                            <Text>{cliente.email || 'Não informado'}</Text>
                        </View>

                        <View>
                            <Text>Telefone</Text>
                            <Text>{cliente.telefone || 'Não informado'}</Text>
                        </View>

                        {/* Informações do cadastro */}
                        <Text>Informações do cadastro</Text>

                        <View>
                            <Text>Cliente desde</Text>
                            <Text>{cliente.desde || 'Não informado'}</Text>
                        </View>

                        <View>
                            <Text>Valor mensal</Text>
                            <Text>
                                {cliente.valorMensal || 'Não informado'}
                            </Text>
                        </View>

                        {/* Ações */}
                        <Pressable
                            onPress={() => setEditando(true)}
                        >
                            <Text>Editar cliente</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => Alert.alert(
                                'Mensagem',
                                'A função de enviar mensagem será implementada posteriormente.'
                            )}
                        >
                            <Text>Enviar mensagem</Text>
                        </Pressable>

                        <Pressable onPress={confirmarExclusao}>
                            <Text>Excluir cliente</Text>
                        </Pressable>
                    </View>
                )}

            </ScrollView>
        </SafeAreaView>
=======
    // Recebe o cliente enviado pela tela Lista.
    const { cliente } = route.params;

    return (
        <View>

            {/* Cabeçalho */}
            <View>

                {/* Botão voltar */}
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Text>‹</Text>
                    <Text>Voltar</Text>
                </Pressable>

                <Text>Detalhes do Cliente</Text>

            </View>


            {/* Informações principais do cliente */}
            <View>

                {/* Iniciais */}
                <View>
                    <Text>{cliente.iniciais}</Text>
                </View>

                {/* Nome */}
                <Text>{cliente.nome}</Text>

                {/* Serviço */}
                <Text>{cliente.servico}</Text>

                {/* Status */}
                <View>
                    <Text>{cliente.status}</Text>
                </View>

            </View>


            {/* Informações de contato e cadastro */}
            <View>

                {/* E-mail */}
                <View>
                    <Text>E-mail</Text>
                    <Text>{cliente.email}</Text>
                </View>


                {/* Telefone */}
                <View>
                    <Text>Telefone</Text>
                    <Text>{cliente.telefone}</Text>
                </View>


                {/* Cliente desde */}
                <View>
                    <Text>Cliente desde</Text>
                    <Text>{cliente.desde}</Text>
                </View>


                {/* Valor mensal */}
                <View>
                    <Text>Valor mensal</Text>
                    <Text>{cliente.valorMensal}</Text>
                </View>

            </View>


            {/* Botão para enviar mensagem */}
            <Pressable
                onPress={() => alert('Enviar mensagem')}
            >
                <Text>Enviar mensagem</Text>
            </Pressable>


            {/* Botão para editar */}
            <Pressable
                onPress={() => alert('Editar cliente')}
            >
                <Text>Editar cliente</Text>
            </Pressable>

        </View>
>>>>>>> 481fb4bfbd8960462eef2af93f0b6b50ec3ff397
    );
}
