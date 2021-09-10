import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

const App = () => {
    return (<header>
               <h1>Nina App</h1> 
                <NavBar/>
                <ItemListContainer greeting="Acá van las fotos de Nina"/>
            </header>);
                        }

export default App