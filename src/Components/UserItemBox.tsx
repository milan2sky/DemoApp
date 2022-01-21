import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { IUserData } from '../Data/userData'
import HeartButton from './HeartButton'


const profilePicSize = 64
const spaceBS = 16
interface IUserItemBox extends IUserData {
	index: number
}

const UserItemBox = ({ userName, profilePicUrl, index }: IUserItemBox) => {
	return (
		<View style={styles.container}>
			<Image source={{uri: profilePicUrl, height: profilePicSize, width: profilePicSize}} style={[{
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
