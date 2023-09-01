import { Image } from "expo-image";
import { StyleSheet, View, useColorScheme } from "react-native";
import { blurHash } from "../../constants/general";
import { Reply, Thread } from "../../types";
import { takeFirstNElements } from "../../utils/helpers/general";

type Props = {
	thread: Thread;
};

export default function ThreadLeftSide({ thread }: Props): JSX.Element {
	const currentTheme = useColorScheme();
	const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

	return (
		<View style={{ justifyContent: "space-between" }}>
			<Image
				source={thread.author.photo}
				style={styles.image}
				placeholder={blurHash}
				contentFit="cover"
				transition={500}
			/>
			<View
				style={{
					borderWidth: 1,
					alignSelf: "center",
					borderColor: borderColor,
					flexGrow: 1,
				}}
			/>
			<View
				style={{
					width: 20,
					alignItems: "center",
					alignSelf: "center",
					gap: 3,
				}}
			>
				{takeFirstNElements(thread.replies, 3).map((reply: Reply, index) => (
					<Image
						key={index}
						source={reply.author.photo}
						style={{ width: index * 9, height: index * 9, borderRadius: 15 }}
						placeholder={blurHash}
						contentFit="cover"
						transition={500}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
});
