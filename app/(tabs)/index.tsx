import { useRef } from "react";
import {
	Platform,
	RefreshControl,
	SafeAreaView,
	ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { useThreadsContext } from "../../utils/hooks/useThreadsContext.hook";
import ThreadItem from "../../components/Thread";

const threadsAnimation = require("../../assets/animations/threads_logo.json");

export default function HomeScreen() {
	const animationRef = useRef<LottieView>(null);
	const threads = useThreadsContext();

	return (
		<SafeAreaView>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: Platform.select({ android: 30 }),
				}}
				refreshControl={
					<RefreshControl
						refreshing={false}
						tintColor="transparent"
						onRefresh={() => {
							animationRef.current?.play();
						}}
					/>
				}
			>
				<LottieView
					ref={animationRef}
					source={threadsAnimation}
					autoPlay
					loop={false}
					style={{ width: 90, height: 90, alignSelf: "center" }}
				/>
				{threads.map((thread) => (
					<ThreadItem key={thread.id} {...thread} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}
