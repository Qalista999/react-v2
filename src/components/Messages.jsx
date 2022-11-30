import pageImg from "../assets/img/ufo.webp";
import textBackground from "../assets/img/nebo.jpg";

const Messages = () => {
	return (
		<>
		<div className="row">
			<div className="col-md-3">
				<img src={pageImg} alt="" width={"100%"}/>
			</div>
			<div className="col-md-9">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum perspiciatis sunt harum quisquam velit rerum illo temporibus debitis quasi, adipisci quas commodi neque sequi, optio asperiores veniam praesentium at!
				Ea veniam, saepe facilis hic nobis adipisci porro fugit non veritatis qui! In quis fugiat consequuntur vitae magni. Nesciunt ab doloremque illum perspiciatis, sit praesentium recusandae ea repellendus harum consectetur!
			</div>
		</div>
		<div className="row mt-4">
				<div className="col-md-3 offset-3" style={{ backgroundImage: `url(${textBackground})` }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod vero mollitia veniam provident, earum eos doloribus enim, ipsum perspiciatis tempore iste obcaecati ratione possimus! Corrupti error eaque ipsum fugit.</div>
			</div>
			</>
	);
};
export default Messages;