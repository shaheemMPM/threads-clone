import { View } from "react-native";
import { Thread } from "../../types";
import PostHeading from "./PostHeading";
import BottomIcons from "./BottomIcons";
import PostFooter from "./PostFooter";

export default function ThreadItem(thread: Thread): JSX.Element {
	return (
		<View>
			<View>
				<PostHeading
					name={thread.author.name}
					verified={thread.author.verified}
					createdAt={thread.createdAt}
				/>
				<BottomIcons />
				<PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
			</View>
		</View>
	);
}
