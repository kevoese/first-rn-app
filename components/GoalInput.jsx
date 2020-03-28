import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, showModal, handleCancel }) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const handlePress = () => {
		addGoalHandler(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={Boolean(showModal)} animated='slide'>
			<View style={styles.inputWrap}>
				<TextInput
					placeholder='Course Goals'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonWrap}>
					<View style={styles.buttons}>
						<Button  onPress={handlePress} title='ADD' />
					</View>
					<View style={styles.buttons}>
						<Button
							
							onPress={handleCancel}
							title='CANCEL'
							color='red'
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputWrap: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	textInput: {
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10,
		marginRight: 5,
		width: '80%',
		marginVertical: 10,
	},
	buttonWrap: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttons: {
		width: '40%'
	},
});
