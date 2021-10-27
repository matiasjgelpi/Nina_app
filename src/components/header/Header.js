
import ItemListContainer from "../itemlistcontainer/ItemListContainer";

export const Header = () => {
  return (
    <div className="container">
      <div className="row header d-flex justify-content-around mt-5 pt-4">
        <div className="col-5 imagen"></div>
        <div className="col-5 texto">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam a
            dolore, sint vero, aliquam laudantium veritatis odit beatae ratione
            accusamus quaerat deserunt labore! Officia, magnam? Ratione hic sed
            facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio accusamus quam sint ipsa enim non, sequi cum sapiente
            fuga, culpa minima doloremque neque pariatur consequuntur et eos
            quibusdam facilis reprehenderit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Recusandae, odio. Soluta debitis
            labore cum consequuntur illum in deleniti architecto accusamus ad
            nisi recusandae quas eveniet omnis laboriosam, repudiandae veniam
            praesentium.
          </p>
        </div>
        <div className="row header d-flex justify-content-around">
            <ItemListContainer/>
        </div>

      </div>
    </div>
  );
};
