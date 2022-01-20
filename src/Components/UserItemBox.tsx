import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { IUserData } from '../Data/userData'
import HeartButton from './HeartButton'

interface IUserItemBox extends IUserData {
	index: number
}

const profilePicSize = 64
const spaceBS = 16
const UserItemBox = ({ userName, profilePicUrl, index }: IUserItemBox) => {
	return (
		<View style={styles.container}>
			<Pressable
				children={({ pressed }) => (
					<Image source={{ uri: profilePicUrl }} style={[{
						transform: pressed ? [{ scale: 1.04 }] : [],
						width: profilePicSize,
						height: profilePicSize,
						borderRadius: profilePicSize
					}]} />
				)} />
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
		padding: spaceBS,
		borderRadius: 100,
		marginBottom: 21,
		alignItems: "center",
	},
	userNameText: {
		marginLeft: spaceBS / 2,
		// backgroundColor: "red",
		fontWeight: "600",
		fontSize: 36,
		color: "black",
		textTransform: 'uppercase',
	}
})
