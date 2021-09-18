import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Pressable, TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import listWish from '../assets/data/cardView';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function wishlist() {

        const WishCard = ({item}) => {
            return <View style={styles.wishCard}>
                <Image source={item.image} style={{ height: 140, width: 170, marginLeft: -10}} />
                <View style={styles.cardWishlistData}>
                    <Text style={styles.wishVehicleName}>{item.vName}</Text>
                    <Text style={styles.wishVehiclePrice}>{item.price} Rs</Text>

                 <View style={styles.buttonView}>
                    <Pressable style={styles.button}>
                            <MaterialCommunityIcon name="crown" size={18} color={colors.textLight} />
                    </Pressable>
                    <Pressable style={styles.button}>
                            <MaterialCommunityIcon name="crown" size={18} color={colors.textLight} />
                    </Pressable>
                </View>

                </View>
            </View>
        }

    return (
        <View style={styles.container}>
             {/* titles */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleSub}>WishList</Text>
            </View>

                        {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={20} style={{ marginTop: -15 }} color={colors.textDark} />
                <TextInput  
                        style={styles.textInputView} 
                        placeholder="Search....."  
                        // onChangeText={(text) => this.setState({text})}  
                /> 
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                data={listWish}
                renderItem={({item}) => <WishCard item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    titleMain: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.primary,
    },
    titleSub: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.primary,
        marginTop: 4,
    },
    wishCard: {
        height: 140,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: colors.background,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardWishlistData: {
        height: 140,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
        marginBottom: 10,

    },
    wishVehicleName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
    },
    wishVehiclePrice: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
        marginLeft: 10,
    },
    buttonView: {
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    textInputView: {
        color: colors.textLight,
        padding: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        marginLeft: 10,
        width: 350,
        marginBottom: 30,
    },
})