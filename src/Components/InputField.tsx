import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface IInputField {
	inputType: "username" | "password",
	setTextInputValue: (s: string) => void
}

const InputField = (props: IInputField) => {
	const [isThisInputFieldToggled, setIsThisInputFieldToggled] = useState(false)
	// const [textInputValue, setTextInputValue] = useState("")

	return (
		<View style={[styles.container,
		isThisInputFieldToggled && {
			borderColor: "#61baf9",
			borderWidth: 3
		}
		]}>
			<TextInput
				onFocus={({ nativeEvent }) => console.log(nativeEvent.target)}
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
		marginHorizontal: 10,
	}
})
