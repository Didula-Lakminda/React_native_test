import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewData from '../assets/data/cardView';
import StarRating from 'react-native-star-rating';
import colors from '../assets/colors/colors';
Feather.loadFont();
MaterialCommunityIcon.loadFont();
MaterialIcons.loadFont();

export default function Home() {

    const [starRate, setStarRate] = React.useState(3);

    const onStarPress = (rating) => {
        setStarRate(rating);
    }

    return (
        <View style={styles.container}>

            {/* titles */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleMain}>Vehicle</Text>
                <Text style={styles.titleSub}>Reviews</Text>
            </View>

            {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <TextInput  
                        style={styles.textInputView} 
                        placeholder="Search....."  
                        // onChangeText={(text) => this.setState({text})}  
                /> 
            </View>

         <ScrollView>
            {/* card views */}
            <View style={styles.reviewWrapper}>
                {ReviewData.map((item) => (
                    <View style={[
                        styles.reviewCardWrapper,
                        {marginTop: item.id == 1 ? 10: 20,},
                    ]}>
                        <View>
                            <View>
                                {/* top name and icon */}
                                <View style={styles.reviewTopWrapper}>
                                    <MaterialCommunityIcon name="crown" size={18} color={colors.primary} />
                                    <Text style={styles.reviewTopText}>{item.name}</Text>
                                </View>
                                
                                {/* description */}
                                <View style={styles.reviewTitlesWrapper}>
                                    <Text style={styles.reviewDescription}>{item.description}</Text>
                                </View>

                            </View>
                            
                            {/* review rating bottom part */}
                            <View style={styles.reviewCardBottom}>
                                <View style={styles.reviewRate}>
                                        {/*star rate  */}
                                        {/* <Feather name="search" size={15} color={colors.textDark} /> */}
                                        <StarRating
                                            disabled={true}
                                            maxStars={5}
                                            rating={starRate}
                                            selectedStar={(rating) => onStarPress(rating)}
                                            fullStarColor='white'
                                            starSize={25}    
                                        />
                                </View>

                                <View style={styles.reviewVehicleName}>
                                     <MaterialCommunityIcon name="star" size={10} color={colors.textDark} />
                                     <Text style={styles.vehicleName}>{item.vName}</Text>
                                </View>
                            </View>
                        </View>

                        <View styles={styles.reviewImageRight}>
                            <Image
                                source={item.image}
                                style={styles.reviewCardImage}
                            />
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
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
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    textInputView: {
        color: colors.textLight
    },
    reviewWrapper: {
        paddingHorizontal: 20,
    },
    reviewCardWrapper: {
       backgroundColor:colors.background,
       borderRadius: 25,
       paddingTop: 20,
       paddingLeft: 20,
       flexDirection: 'row',
    },
    reviewTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
    },
    reviewTitlesWrapper: {
        marginTop: 15,

    },
    reviewDescription: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color:colors.textLight,
        marginRight: 200,
    },
    reviewCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    reviewRate: {
        backgroundColor:colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    reviewVehicleName: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center',
    },
    vehicleName: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        color: colors.textDark,
        marginLeft: 5,
    },
    reviewImageRight: {

    },
    reviewCardImage: {
        width: 140,
        height: 90,
        marginTop: -20,
        borderTopRightRadius: 25,
        marginLeft: -138,
    },
})
