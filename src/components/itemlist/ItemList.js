import ItemCard from "../item/ItemCard";
import "./style.css"

const ItemList = ({array}) => {


  return (
    <>
      <div className="itemList row d-flex justify-content-around mt-5 pt-5 ">

        {array.length === 0  ? 
        
        <div className="spinner-border text-primary" role="status"/>
       
 :
        array.map((item) => (
              <div key={item.id} className="col-3" >
                <ItemCard
                  id={item.id}
                  producto={item.name}
                  precio={item.price}
                  imagen={item.img}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default ItemList;
