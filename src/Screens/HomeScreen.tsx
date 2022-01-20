import React from 'react'
import { Alert, Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { whichScreenType } from '../../App'
import UserItemBox from '../Components/UserItemBox'
import userData from '../Data/userData'

const backGroundPicture = require("../Assets/abstractPicture1.jpg")

const HomeScreen = (props: {
	setWhichScreen: React.Dispatch<React.SetStateAction<whichScreenType>>
}) => {
	return (
		<ImageBackground source={backGroundPicture} style={{ flex: 1 }}>
			<FlatList
				data={userData}
				keyExtractor={(item, index) => item.userName + index.toString()}
				renderItem={({ item, index }) => <UserItemBox {...item} index={index} />}
				contentContainerStyle={styles.contentContainerStyle}
				ListFooterComponent={() => (
					<>
						<Text style={styles.endText}>…You've reached the End…</Text>
						<Button title='…go to LogIn' onPress={() => { Alert.alert("Back to LogIn"); props.setWhichScreen("loginScreen") }} />
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
		width: "80%",
		alignSelf: "center"
	},
	endText: {
		color: "white", 
		fontSize: 21, 
		fontWeight: "800", 
		textAlign: "center",
		paddingBottom: 6,
	}
})
