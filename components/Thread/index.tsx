import { View } from "react-native";
import { Image } from "expo-image";
import { Thread } from "../../types";
import PostHeading from "./PostHeading";
import BottomIcons from "./BottomIcons";
import PostFooter from "./PostFooter";
import { Text } from "../Themed";
import { blurHash } from "../../constants/general";

export default function ThreadItem(thread: Thread): JSX.Element {
	return (
		<View>
			<View>
				<PostHeading
					name={thread.author.name}
					verified={thread.author.verified}
					createdAt={thread.createdAt}
				/>
				<Text>{thread.content}</Text>
				{thread.image && (
					<Image
						source={thread.image}
						style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
						placeholder={blurHash}
						contentFit="cover"
						transition={500}
					/>
				)}
				<BottomIcons />
				<PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
			</View>
		</View>
	);
}
