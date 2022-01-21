import React from 'react'
import { Alert, Pressable, StyleSheet, Text } from 'react-native'

interface ILogInCTA {
	onPress: () => void,
	canLogInCTAbePressed: boolean,
}
const LogInCTA = (props: ILogInCTA) => {
	return (
		<Pressable
			onPress={() => {
				if (!props.canLogInCTAbePressed) {
					props.onPress()
				}
			}}
			onLongPress={()=> Alert.alert("Login-Hint!", "You probably lost your password or username😉\n\nusername:joe\npassword:1234")}
			style={({ pressed }) => [styles.CTAButton, pressed && {
				opacity: !props.canLogInCTAbePressed ? 0.9 : 1,
				transform: !props.canLogInCTAbePressed ? [{ scale: .94 }] : []
			}, !props.canLogInCTAbePressed && { backgroundColor: "#00c1fc", }]}>
			<Text style={[styles.CTAButtonText, 
			// !props.canLogInCTAbePressed && {color: "white"}
			]}>login</Text>
		</Pressable>
	)
}

export default LogInCTA

const styles = StyleSheet.create({
	CTAButton: {
		width: "70%",
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 100,
	},
	CTAButtonText: {
		fontSize: 34,
		color: "black",
		fontWeight: "800",
		marginVertical: 7,
	}
})
