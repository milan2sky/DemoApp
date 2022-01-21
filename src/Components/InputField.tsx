import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface IInputField {
	inputType: "username" | "password",
	setTextInputValue: (s: string) => void
}

const InputField = (props: IInputField) => {

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder={"Enter your " + props.inputType}
				textContentType={props.inputType != "password" ? "username" : "password"}
				onChangeText={(i) => props.setTextInputValue(i)}
			/>
		</View>
	)
}

export default InputField

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "70%",
		borderRadius: 12,
	},
	textInput: {
		width: "70%",
		fontSize: 18,
		marginHorizontal: 10,
	}
})
