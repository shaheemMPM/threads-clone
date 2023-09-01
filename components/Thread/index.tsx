import { View } from "react-native";
import { Text } from "../Themed";
import { Thread } from "../../types";

export default function ThreadItem(thread: Thread): JSX.Element {
	return (
		<View>
			<Text>{thread.author.name}</Text>
		</View>
	);
}
