import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import StarRating from 'react-native-star-rating';
import colors from '../assets/colors/colors';

export default function AddReview({ navigation }) {

    const [starRate, setStarRate] = React.useState(0);

    const onStarPress = (rating) => {
        setStarRate(rating);
    }


    return (
        // container start
        <View style={{ flex: 1, backgroundColor: '#fff' }}
        showsVerticalScrollIndicator={false}>

            {/* image views */}
            <ImageBackground source={require('../assets/images/vehicle.jpg')}
                style={{
                    marginTop: -25,
                    width: 350,
                    marginLeft: 40,
                    height: Dimensions.get('window').height / 2.8,
                }}>
            </ImageBackground>

            {/* view of form */}
            <View style={styles.bottomView}>
                <View style={{padding:40}}>
                    {/* form inputs */}
                    <View style={styles.inputForm}>
                    <TextInput  
                        style={styles.textInputView} 
                        placeholder="Vehicle Name"  
                        // onChangeText={(text) => this.setState({text})}  
                    /> 
                     <TextInput  
                        style={styles.textInputView} 
                        placeholder="Your Name"  
                        // onChangeText={(text) => this.setState({text})}  
                    /> 
                     <TextInput  
                        style={styles.desInputView} 
                        placeholder="Description"  
                        // onChangeText={(text) => this.setState({text})}  
                    /> 
                    <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={starRate}
                            selectedStar={(rating) => onStarPress(rating)}
                            fullStarColor='orange'
                            emptyStarColor='orange'
                            starSize={35}    
                    />

                <TouchableOpacity style={styles.buttonReview} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText}>Add Review</Text>
                </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bottomView: {
        flex: 1.5,
        backgroundColor: '#EFECE8',
        bottom: 15,
        borderTopStartRadius:30,
        borderTopEndRadius: 30,
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    topBarText: {
        marginLeft: 120,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
    },
    topBarIcon: {
        marginTop: 10,
        marginBottom: 10,
    },
    // inputForm: {

    // },
    textInputView: {
        height: 50,
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
    },
    desInputView: {
        height: 100,
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 10,
        borderRadius: 20,
        marginBottom: 15,
    },
    buttonReview: {
        backgroundColor: colors.primary,
        marginTop: 27,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    }
})
