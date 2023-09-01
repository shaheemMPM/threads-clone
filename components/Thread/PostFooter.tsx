import { Text } from "../Themed";

type Props = {
	replies: number;
	likes: number;
};

export default function PostFooter({ replies, likes }: Props): JSX.Element {
	return (
		<Text style={{ color: "gray" }}>
			{replies} replies · {likes} likes
		</Text>
	);
}
