const user = {
	name: "Айртон",
	lastname: "Сенна",
	email: "as@ya.ru",
	id: 1,
	about: "Расскажите о себе...",
	avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
}

const users = {
	0: { name: "Валерия", lastname: "Инночкина" },
	1: { name: "Пётр", lastname: "Васичкин" },
	2: { name: "Павел", lastname: "Васичкин" },
	3: { name: "Константин", lastname: "Инночкин" },
	4: { name: "Евгения", lastname: "Валентиновна" },
}

export function getUser() {
	return user;
}

export function getUsers() {
	return users;
}
