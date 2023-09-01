import { faker } from "@faker-js/faker";
import { Reply, Thread, User } from "../../types";

export const createRandomFollower = (): User => {
	const name = faker.person.firstName() + " " + faker.person.lastName();

	return {
		id: faker.string.uuid(),
		photo: faker.image.avatar(),
		name,
		verified: Math.random() >= 0.5,
		bio: faker.person.bio(),
		username: faker.internet.userName(),
		link: faker.internet.url(),
	};
};

export const createRandomUser = (): User => {
	const name = faker.person.firstName() + " " + faker.person.lastName();
	const followers = new Array(Math.floor(Math.random() * 10))
		.fill(null)
		.map((_) => createRandomFollower());

	return {
		id: faker.string.uuid(),
		photo: faker.image.avatar(),
		name,
		verified: Math.random() >= 0.5,
		bio: faker.person.bio(),
		username: faker.internet.userName(),
		link: faker.internet.url(),
		followers,
	};
};

export const createRandomReplies = (): Reply => {
	return {
		id: faker.string.uuid(),
		author: createRandomUser(),
		content: faker.lorem.sentence(),
		likes: Math.floor(Math.random() * 1000),
		createdAt: faker.date.recent().toISOString(),
	};
};

export const createRandomThread = (): Thread => {
	const author = createRandomUser();
	const replies = new Array(Math.floor(Math.random() * 10))
		.fill(null)
		.map(() => createRandomReplies());
	const mention = Math.random() > 0.5;
	const mentionUser = mention ? createRandomUser() : undefined;

	return {
		id: faker.string.uuid(),
		author,
		content: faker.lorem.paragraph(),
		image: Math.random() > 0.5 ? faker.image.url() : undefined,
		replies,
		repliesCount: replies.length,
		likesCount: Math.floor(Math.random() * 1000),
		mention,
		mentionUser,
		createdAt: faker.date.recent().toISOString(),
	};
};

export const generateThreads = (): Thread[] => {
	const threads = new Array(50).fill(null).map(() => createRandomThread());
	return threads;
};
