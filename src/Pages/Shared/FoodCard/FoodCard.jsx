const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="">
      <div className="card rounded-none hover:border-[#FF720D] border max-sm:mt-8">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="text-[#000] bg-[#FF720D] absolute right-0 px-4 py-2 rounded-lg mr-2 mt-2">
          $ {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
