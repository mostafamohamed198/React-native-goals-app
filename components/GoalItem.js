import { View , FlatList, TouchableOpacity, Text, StyleSheet, Pressable} from "react-native"

export default function GoalItem (props){

    return(
        <View key={props.goal.key} style={styles.goalItem}>
            <Pressable 
            onPress={props.deleteItem.bind(this, props.goal.key)}
            android_ripple={{ color: '#210644' }}
            style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.goal.value}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    goalText:{
        color: 'white',
        padding: 8
    },

    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
      },
})