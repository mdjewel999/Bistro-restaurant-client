import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza" );
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="OUR MENU"></Cover>
      <SectionTitle
        subhedding={"Don't miss"}
        hedding={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered} ></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory 
      items={dessert}
      title="dessert"
      img={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory 
      items={pizza}
      title="pizza"
      img={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory 
      items={salad}
      title="salad"
      img={saladImg}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;
