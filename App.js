import {Text ,View, TextInput, StyleSheet, FlatList, Button } from 'react-native';
import React from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [goals, setGoals] = React.useState([])
  const [modalIsVisible , setModalIsVisible] = React.useState(false)


  function addGoalHandler(enteredGoalText){
    setGoals([...goals, {'key': Math.random().toString(), 'value': enteredGoalText}])
    setModalIsVisible(false)

  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function deleteItem(itemKey){
    const goal = goals.find(obj => obj['key'] === itemKey);
    const newArray = goals.filter(item => item !== goal);
    setGoals(newArray)
    // console.log(goal.index)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
      <GoalInput
      addGoalHandler = {addGoalHandler} 
      visible = {modalIsVisible}
       />
       <View>
          <FlatList 
                alwaysBounceVertical={false}
                data={goals} 
                renderItem={(itemData) => {
                    return(
                        <GoalItem goal={itemData.item} deleteItem={deleteItem}/>
                    )
                }}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop: 30,

    paddingTop: 60,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  }
})