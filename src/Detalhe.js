import {
    View,
    Text,
    Pressable,
    ScrollView,
    SafeAreaView,
    StatusBar,
    StyleSheet
} from 'react-native';

export default function Detalhe({ route, navigation }) {

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
    );
}
