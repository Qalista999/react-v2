const user = {
	name: "Айртон",
	lastname: "Сенна",
	email: "as@ya.ru",
	id: 1,
	about: "Расскажите о себе...",
	avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
}
let users = {};
// const users = {
// 	0: { name: "Валерия", lastname: "Инночкина", id: 4 },
// 	1: { name: "Пётр", lastname: "Васичкин", id: 9 },
// 	2: { name: "Павел", lastname: "Васичкин", id: 7 },
// 	3: { name: "Константин", lastname: "Инночкин", id: 2 },
// 	4: { name: "Евгения", lastname: "Валентиновна", id: 22 },
// 	5: { name: "Дмитрий", lastname: "Козлов", id: 17 },
// }

export function getUser(userId) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == userId) return users[i]; 
	}
	return user;
}

export async function getUsers() {
	let response = await fetch("http://f0740810.xsph.ru/getUsers");
	users = await response.json();
	// console.log(users);
	return users;
}
