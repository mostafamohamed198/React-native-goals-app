import { View, Text, TextInput, StyleSheet, Image, Pressable, Modal } from "react-native";
// import GoalItems from "./GoalItems";
import React from "react";
export default function GoalInput(props){
    const [inputValue, setInputValue] = React.useState('')
    function onChangeText(text){
        setInputValue(text)
    }
    function onAddPressFunction(){
        props.addGoalHandler(inputValue)
         setInputValue('')
    }
    function onCancelPressFunction(){
        setInputValue('')
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}> 
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <View style={styles.inputContainer}>
                    <TextInput  
                    placeholder="Your course goal!"
                    style={styles.input}
                    value={inputValue}
                    onChangeText={text => onChangeText(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={onCancelPressFunction}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={onAddPressFunction}>
                        <Text style={styles.add}>Add Goal</Text>
                    </Pressable>
                </View>
                
                {/* <GoalItems goals={goals}/> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#311b6b',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    input:{
        height:'100%'
        
    },
    inputContainer:{
        backgroundColor: '#e4d0ff',
        borderRadius:7,
        margin:12,
        height: 50,
        width:300,
        paddingHorizontal:15
        
    },
    image:{
        width: 150,
        height:150,
        resizeMode: 'stretch',
        marginBottom: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'space-around',
        width: 150
    
    },
    add:{
        color:'#b180f0',
        fontSize: 18
    },
    cancel:{
        color: '#f31282',
        fontSize: 18
    }
})