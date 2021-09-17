import Item  from "../item/Item"

const ItemList = ({array}) => {
   
    let mostrar;

    if(array === ""){
        mostrar = "no hay nada para mostrar"}
        else{ 
        mostrar =  array.map(item => <Item producto= {item.key} precio={item.precio} imagen={item.img}/>)}
   
   return (
    <>
        {mostrar}
    </>
   )

}

export default ItemList
