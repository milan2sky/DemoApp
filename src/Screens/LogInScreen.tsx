import React, { useState } from 'react'
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { hardCodedPassword, hardCodedUserName, whichScreenType } from '../../App'
import InputField from '../Components/InputField'
import LogInCTA from '../Components/LogInCTA'

const backGroundPicture = require("../Assets/abstractPicture1.jpg")

interface ILogInScreen {
	setWhichScreen: React.Dispatch<React.SetStateAction<whichScreenType>>
}

const LogInScreen = (props: ILogInScreen) => {
	const [userNameInput, setUserNameInput] = useState("")
	const [passwordInput, setPasswordInput] = useState("")
	const [displayTryAgain, setDisplayTryAgain] = useState(false)

	const handleUserNameInput = (s: string) => {
		setUserNameInput(s)
		setDisplayTryAgain(false)
	}

	const handlePasswordInput = (s: string) => {
		setPasswordInput(s)
		setDisplayTryAgain(false)
	}

	const handleLoginPress = () => {
		if (userNameInput == hardCodedUserName && passwordInput == hardCodedPassword) {
			Alert.alert("Success🥳", "You're in the HomeScreen")
			props.setWhichScreen("homeScreen")
		} else {
			setDisplayTryAgain(true)
		}
	}
	return (
		<ImageBackground source={backGroundPicture} style={styles.container}>
			<InputField inputType="username" setTextInputValue={handleUserNameInput} />
			<View style={{ height: 12, width: "100%" }} />
			<InputField inputType="password" setTextInputValue={handlePasswordInput} />
			<View style={{ height: 42, width: "100%" }} />
			<LogInCTA onPress={handleLoginPress} canLogInCTAbePressed={!userNameInput.trim() || !passwordInput.trim() || displayTryAgain} />
			{displayTryAgain && (
				<View style={styles.tryAgainBox}>
					<Text style={styles.tryAgainText}>Try again! UserName or password was not correct!</Text>
				</View>
			)}
		</ImageBackground>
	)
}

export default LogInScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tryAgainBox: {
		width: "70%",
		backgroundColor: "rgba(255,255,255,.7)",
		marginTop: 6,
		padding: 6,
		borderRadius: 14,
	},
	tryAgainText: {
		color: "red",
		fontSize: 18,
		fontWeight: "800",
	},
})