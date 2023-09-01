import { View } from "react-native";
import { Thread } from "../../types";
import PostHeading from "./PostHeading";

export default function ThreadItem(thread: Thread): JSX.Element {
	return (
		<View>
			<View>
				<PostHeading
					name={thread.author.name}
					verified={thread.author.verified}
					createdAt={thread.createdAt}
				/>
			</View>
		</View>
	);
}
