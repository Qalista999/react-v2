import styles from "./Profile.module.css";

const Profile = (props) => {
	let userId = location.pathname.split("/")[2];
	let user = props.function(userId);
	// console.log(userId);
	return (
		<div className="row">
			<div className="col-sm-3">
				<img src={user.avatar} alt="" width={"100%"} />
			</div>
			<div className="col-sm-9">
				<h1 style={{ backgroundColor: "lightblue" }}>{user.name} {user.lastname}</h1>
				<h2 className={styles.about}>{user.about}</h2>
				<p>E-mail: {user.email}</p>
				<p>Id: {user.id}</p>
				<p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ea quod nihil. Aliquid, totam recusandae expedita sint quisquam illum? Labore delectus porro exercitationem quaerat, eveniet reiciendis vitae rem esse laudantium.</p>
			</div>
</div>
)
};

export default Profile;