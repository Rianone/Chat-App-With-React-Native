import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={()=>{console.log("open menu")}}>
                    <FontAwesome name="bars" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => { console.log("Change profile image") }}>
                    <View>
                        <Image
                            source={{ uri: catImageUrl }}
                            style={{
                                width: 40,
                                height: 40,
                                marginRight: 15,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    

    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require("../assets/images/bg.jpg")} resizeMode="cover" style={styles.image}> */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            {/* </ImageBackground> */}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#fff",
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    },
    image: {
        // width: "100%",
        // height: "50%"
        // backgroundSize:"cover"
    }
});