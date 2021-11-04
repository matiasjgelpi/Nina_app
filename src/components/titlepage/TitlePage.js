import ItemListContainer from "../itemlistcontainer/ItemListContainer";


export const TitlePage = () => {
  return (
    <div className="container">
      <div className="row header d-flex justify-content-around mt-2 pt-5">
        <div className="col-5 imagen d-flex flex-wrap align-content-center">
          <img
            src={"/assets/portada.jpg"}
            className="img-fluid"
            alt=""
            width=""
            height=""
          />
        </div>
        <div className="col-5 texto d-flex flex-wrap align-content-center justify-content-center">
          <p>Primer delivery mundial de belleza y felicidad a cargo de:</p>
          <p>
            <a href="https://www.instagram.com/ninalaperrabonita/" className="nav-link" style={{color: "#d01c5e"}}>
              @Ninalaperrabonita
            </a>
          </p>
          
          <p>
            <i>
              "La belleza es verdad y la verdad es belleza: eso es todo lo que
              necesitas saber en la Tierra"
            </i>
          </p>
          <p >
            <b>John Keats</b>
          </p>
          
        </div>
        
        <div className="row header d-flex justify-content-around">
          <ItemListContainer />
        </div>
      </div>
    </div>
  );
};
