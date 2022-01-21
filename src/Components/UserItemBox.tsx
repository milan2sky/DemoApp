import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { IUserData } from '../Data/userData'
import HeartButton from './HeartButton'

interface IUserItemBox extends IUserData {
	index: number
}

const profilePicSize = 64
const spaceBS = 16

// This Answer helped me a lot: https://stackoverflow.com/a/64094755
const imageBasicURI = "https://source.unsplash.com/random/" + profilePicSize + "x" + profilePicSize

const UserItemBox = ({ userName, profilePicUrl, index }: IUserItemBox) => {
	const imgURI = { uri: imageBasicURI + "?sig" + index.toString() }
	// console.log("This: " + index.toString())
	return (
		<View style={styles.container}>
			<Image source={{uri: imageBasicURI + "?sig" + index.toString(), cache: "reload"}} style={[{
				width: profilePicSize,
				height: profilePicSize,
				borderRadius: profilePicSize
			}]} />
			<Text style={styles.userNameText}>{index.toString()}. {userName}</Text>
			<View style={{ flex: 1 }} />
			<HeartButton />
		</View>
	)
}

export default UserItemBox

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "rgba(255,255,255,0.7)",
		width: "100%",
		padding: spaceBS,
		borderRadius: 24,
		marginBottom: 21,
		alignItems: "center",
	},
	userNameText: {
		marginLeft: spaceBS / 2,
		fontWeight: "600",
		fontSize: 24,
		color: "black",
		textTransform: 'capitalize',
		// textTransform: 'uppercase',
	}
})
