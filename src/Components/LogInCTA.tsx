import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

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
			style={({ pressed }) => [styles.CTAButton, pressed && {
				opacity: !props.canLogInCTAbePressed ? 0.9 : 1,
				transform: !props.canLogInCTAbePressed ? [{ scale: .94 }] : []
			}, !props.canLogInCTAbePressed && {
				backgroundColor: "#00c1fc",
			}]}>
			<Text style={[styles.CTAButtonText, 
			// !props.canLogInCTAbePressed && {color: "white"}
			]}>Login</Text>
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
