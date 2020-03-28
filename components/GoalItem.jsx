import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const GoalItem = ({ value, onDelete, id }) => {
	return (
		<TouchableWithoutFeedback onPress={() => onDelete(id)}>
			<View style={styles.listItem}>
				<Text>{value}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		borderColor: 'black',
		marginVertical: 10,
		borderWidth: 1,
		backgroundColor: '#ccc',
	},
});

