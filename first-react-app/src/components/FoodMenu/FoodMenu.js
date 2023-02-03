import "./FoodMenu.css";
import list from "./FoodList";
import Cards from "./Cards";

const FoodMenu = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default FoodMenu;
