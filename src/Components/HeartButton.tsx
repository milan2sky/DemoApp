import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const HeartButton = (
	// {isLike, pressOnLike}: {
	// pressOnLike: () => void,
	// isLike: boolean}
) => {
	const [isLike, setIsLike] = useState(false)

	return (
		<Pressable
			onPress={() => setIsLike(!isLike)}
			style={{paddingRight: 12,}}
			hitSlop={15}
			children={({ pressed }) => (
				<AntDesign
					style={[isLike ? styles.heartIsLike : styles.heartIsNoLike, pressed && {
						color: "rgba(255,0,0,.4)",
					}]}
					name={isLike ? "heart" : "hearto"}
				/>
			)}
		/>
	)
}

export default HeartButton

const styles = StyleSheet.create({
	heartIsLike: {
		color: "red",
		fontSize: 34,
		transform: [{ scale: 1.1 }]
	},
	heartIsNoLike: {
		fontSize: 34
	}
})
