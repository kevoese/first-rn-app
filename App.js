import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Button,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const addGoalHandler = (enteredGoal) => {
		setGoals(oldGoals => [...oldGoals, {id: oldGoals.length.toString(), value: enteredGoal}]);
		setShowModal(false);
	};
	
	const handleCancel = () => setShowModal(false)
	const onDelete = (removedId) => {
		setGoals(oldGoals => oldGoals.filter(({id}) => id !== removedId))
	};

	return (
		<View style={styles.container}>
		<Button title="Add a new goal" onPress={() => setShowModal(true)} />
      <GoalInput handleCancel={handleCancel} showModal={showModal} addGoalHandler={addGoalHandler} />
			<FlatList
        keyExtractor={(item, index) => item.id}
				data={goals}
				renderItem={itemData => (
					<GoalItem onDelete={onDelete} id={itemData.item.id}  value={itemData.item.value} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
});
