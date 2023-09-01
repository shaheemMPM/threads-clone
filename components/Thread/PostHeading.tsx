import { View } from "react-native";
import { Text } from "../Themed";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { timeAgo } from "../../utils/helpers/general";

type Props = {
	name: string;
	createdAt: string;
	verified: boolean;
};

export default function PostHeading({
	name,
	createdAt,
	verified,
}: Props): JSX.Element {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				flexGrow: 1,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
				<Text style={{ fontWeight: "500" }}>{name}</Text>
				{verified && (
					<MaterialIcons name="verified" size={14} color="#60a5fa" />
				)}
			</View>
			<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
				<Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
				<Feather name="more-horizontal" size={14} color="gray" />
			</View>
		</View>
	);
}
