import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import homeCard from '../assets/data/homeCard';
import colors from '../assets/colors/colors';
Feather.loadFont();
MaterialCommunityIcon.loadFont();
MaterialIcons.loadFont();

export default function ViewPost() {
    return (
        <View style={styles.container}>

            {/* category */}
            <View style={styles.categoryWrapper}>
                {/* <Text style={styles.categoryText}>Vehicles</Text> */}
                <TouchableOpacity style={styles.buttonCategory1}>
                    <Text style={styles.buttonText}>Vehicles</Text>
                </TouchableOpacity>
                <Text style={styles.buttonCenter}>|</Text>
                <TouchableOpacity style={styles.buttonCategory2}>
                    <Text style={styles.buttonText}>Parts</Text>
                </TouchableOpacity>
                {/* <Text style={styles.categoryText}>Parts</Text> */}
            </View>

         <ScrollView>
            {/* card views */}
            <View style={styles.homeWrapper}>
                {homeCard.map((item) => (
                    <View style={[
                        styles.homeCardWrapper,
                        {marginTop: item.id == 1 ? 10: 20,},
                        ]}>
                        <View>
                            <View>
                                {/* top name and icon */}
                                <View style={styles.homeTopWrapper}>
                                    <MaterialCommunityIcon name="crown" size={18} color={colors.primary} />
                                    <Text style={styles.homeTopText}>{item.name}</Text>
                                    
                                    <View style={styles.descHome}>
                                        <Text style={styles.textDes}>{item.description}</Text>
                                    </View>

                                </View>

                                <View style={styles.homeImageBody}>
                                    <Image
                                    source={item.image}
                                    style={styles.homeImage}
                                    />

                                <View style={styles.homePriceSquare}>
                                    <Text style={styles.priceStyle}>Rs. 100, 000</Text>
                                </View>
                                </View>

                            </View>
                            
                            {/* review rating bottom part */}
                            
                        </View>

                        
                    </View>
                ))}
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeWrapper: {
        paddingHorizontal: 20,
    },
    homeCardWrapper: {
       backgroundColor: '#fff',
       borderRadius: 25,
       paddingTop: 10,
       paddingLeft: 20,
       flexDirection: 'row',
    },
    homeTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90,
        marginBottom: 20,
    },
    homeTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
    },
    homeDescription: {
        marginLeft: 80,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: colors.textLight,
    },
    homeImageBody: {
        marginLeft: -20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    homeImage: {
        width: 170,
        height: 100,
        borderBottomLeftRadius: 25,
    },
    homePriceSquare: {
        backgroundColor: colors.primary,
        marginLeft: 50,
        width: 150,
        height: 35,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceStyle: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
    },
    categoryWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 30,
    },
    categoryText: {
        color: colors.textDark,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    descHome: {
        marginLeft: 100,
        marginBottom: -30,
        width: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDes: {
        color: 'gray',
        fontFamily: 'Montserrat-Bold',
    },
    buttonCategory1: {
        borderStyle: 'solid',
        borderBottomColor: colors.primary,
        borderBottomWidth: 3,
    },
    buttonCenter: {
        backgroundColor: colors.primary,
    },
    buttonText: {
        color: colors.textDark,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
    }

})

