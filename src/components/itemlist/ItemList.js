import ItemCard from "../item/ItemCard";
import { Spinner } from "../spinner/Spinner";
import "./style.css"

const ItemList = ({array}) => {


  return (
    <>
      <div className="itemList row d-flex justify-content-around mt-5 pt-5 ">

        {array.length === 0  ? 
        
        <Spinner/>
       
 :
        array.map((item) => (
              <div key={item.id} className="col-3" >
                <ItemCard
                  id={item.id}
                  producto={item.name}
                  precio={item.price}
                  imagen={item.img}
                />
                {console.log(item.img)}
              </div>
            ))}
      </div>
    </>
  );
};

export default ItemList;
