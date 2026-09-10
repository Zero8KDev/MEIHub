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
    // CABEÇALHO
    // =====================================================

    header: {
        height: 88,

        backgroundColor: '#10477D',

        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 18,

        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
    },

    backButton: {
        flexDirection: 'row',
        alignItems: 'center',

        minWidth: 75,
    },

    backIcon: {
        color: '#FFFFFF',
        fontSize: 27,

        marginRight: 5,

        marginTop: -2,
    },

    backText: {
        color: '#FFFFFF',
        fontSize: 13,
    },

    headerTitle: {
        flex: 1,

        color: '#FFFFFF',

        fontSize: 14,
        fontWeight: '700',

        textAlign: 'center',

        marginRight: 75,
    },

    // =====================================================
    // SCROLL
    // =====================================================

    scrollContent: {
        paddingHorizontal: 17,
        paddingTop: 22,
        paddingBottom: 30,
    },

    // =====================================================
    // CARTÃO PRINCIPAL
    // =====================================================

    profileCard: {
        backgroundColor: '#FFFFFF',

        borderRadius: 12,

        minHeight: 208,

        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 20,

        shadowColor: '#183B60',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 5,

        elevation: 1,
    },

    profileAvatar: {
        width: 70,
        height: 70,

        borderRadius: 35,

        backgroundColor: '#DCECFB',

        alignItems: 'center',
        justifyContent: 'center',

        marginBottom: 13,
    },

    profileAvatarText: {
        color: '#124A80',
        fontSize: 22,
        fontWeight: '700',
    },

    profileName: {
        color: '#172F48',

        fontSize: 20,
        fontWeight: '700',

        marginBottom: 3,
    },

    profileService: {
        color: '#71849A',

        fontSize: 12,

        marginBottom: 14,
    },

    // =====================================================
    // STATUS
    // =====================================================

    detailStatus: {
        backgroundColor: '#E7F7F0',

        borderRadius: 15,

        paddingHorizontal: 15,
        paddingVertical: 6,
    },

    detailStatusText: {
        color: '#259B6D',

        fontSize: 11,
        fontWeight: '500',
    },

    // =====================================================
    // INFORMAÇÕES
    // =====================================================

    informationCard: {
        backgroundColor: '#FFFFFF',

        borderRadius: 12,

        marginTop: 19,

        paddingHorizontal: 18,
        paddingVertical: 12,

        shadowColor: '#183B60',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 5,

        elevation: 1,
    },

    informationItem: {
        paddingVertical: 8,

        borderBottomWidth: 1,
        borderBottomColor: '#E6EDF4',
    },

    lastInformationItem: {
        borderBottomWidth: 0,
    },

    informationLabel: {
        color: '#71869D',

        fontSize: 10,

        marginBottom: 3,
    },

    informationValue: {
        color: '#153452',

        fontSize: 14,
    },

    monthlyValue: {
        color: '#124A80',

        fontSize: 15,
        fontWeight: '700',
    },

    // =====================================================
    // BOTÕES
    // =====================================================

    actions: {
        marginTop: 19,
    },

    primaryButton: {
        height: 42,

        backgroundColor: '#10477D',

        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',

        marginBottom: 9,
    },

    primaryButtonText: {
        color: '#FFFFFF',

        fontSize: 13,
        fontWeight: '600',
    },

    secondaryButton: {
        height: 42,

        backgroundColor: '#F8FBFE',

        borderRadius: 10,

        borderWidth: 1,
        borderColor: '#10477D',

        alignItems: 'center',
        justifyContent: 'center',
    },

    secondaryButtonText: {
        color: '#10477D',

        fontSize: 13,
        fontWeight: '600',
    },

});
