// @refresh reset
import React, { useEffect, useState } from 'react'
import { Alert, Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { whichScreenType } from '../../App'
import UserItemBox from '../Components/UserItemBox'
import userData from '../Data/userData'


// Varibales/values that were included in the CodeChallenge Question Exercise
const loadAtOnce = 10
const loadLimit = 40
const backGroundPicture = require("../Assets/abstractPicture1.jpg")

const HomeScreen = (props: {
	setWhichScreen: React.Dispatch<React.SetStateAction<whichScreenType>>
}) => {
	const offsetData = userData.slice(0, 10)
	const [loadData, setLoadData] = useState(offsetData);
	const [loadCount, setLoadCount] = useState(10);

	const scrollMoreFire = () => {
		setLoadCount(prevLoadCount => prevLoadCount + loadAtOnce)
		console.log("Beginn: " + loadCount)
		if (loadCount < loadLimit) {
			setLoadData(oldState => [
				...oldState,
				...userData.slice(loadCount, loadCount + loadAtOnce)
			])
			console.log("Nacher: " + loadCount)
		} else {
			// Alert.alert("lets go")
			console.log("You've reached the End")
		}
		console.log("------------")
	}

	return (
		<ImageBackground source={backGroundPicture} style={{ flex: 1 }}>
			<FlatList
				data={loadData}
				keyExtractor={(item, index) => item.userName + index.toString()}
				renderItem={({ item, index }) => <UserItemBox {...item} index={index} />}
				contentContainerStyle={styles.contentContainerStyle}
				onEndReached={scrollMoreFire}
				ListFooterComponent={() => (
					<>
						<View style={styles.endContainer}>
							<Text style={styles.endText}>…You've reached the End…</Text>
							<Text style={{ color: "#002f56", fontWeight: "600" }}>This demo-app was made by Milan Mikule</Text>
						</View>
						<Button title='…go to LogIn' onPress={() => { Alert.alert("logout"); props.setWhichScreen("loginScreen") }} />
					</>
				)}
			/>
		</ImageBackground>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	contentContainerStyle: {
		paddingVertical: 21,
		width: "92%",
		alignSelf: "center"
	},
	endContainer: {
		alignItems: "center",
		padding: 4,

		backgroundColor: "rgba(255,255,255,.7)",
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	endText: {
		color: "black",
		fontSize: 21,
		fontWeight: "800",
		textAlign: "center",
		paddingBottom: 6,
	}
})
