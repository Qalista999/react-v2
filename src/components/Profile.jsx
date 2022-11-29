import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<div className="row">
			<div className="col-sm-3">
				<img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" width={"100%"} />
			</div>
			<div className="col-sm-9">
				<h1 style={{ backgroundColor: "lightblue"}}>Имя и Фамилия</h1>
				<h2 className={styles.about}>О себе</h2>
				<p>E-mail: if@ya.ru</p>
				<p>Id: 2</p>
				<p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ea quod nihil. Aliquid, totam recusandae expedita sint quisquam illum? Labore delectus porro exercitationem quaerat, eveniet reiciendis vitae rem esse laudantium.</p>
			</div>
</div>
)
};

export default Profile;