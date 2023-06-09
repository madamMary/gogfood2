import Card from "../components/Card";

const Favorites = ({ goods, userId, setServerGoods }) => {
  return (
    <div className="container__fav">
      {" "}
      <div className="container">
        {goods
          .filter((el) => el.likes.includes(userId))
          .map((g) => (
            <Card
              {...g}
              key={g._id}
              img={g.pictures}
              setServerGoods={setServerGoods}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
