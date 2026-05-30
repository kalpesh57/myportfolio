import "./Loader.css";

import LoaderSphere
from "./LoaderSphere";

const Loader = () => {

  return (

    <div className="loader">

      <div className="loader-canvas">

        <LoaderSphere />

      </div>

      <div className="loader-content">

        <h1>
          KALPESH PARMAR
        </h1>

        <p>
          FULL STACK DEVELOPER
        </p>

      </div>

    </div>

  );

};

export default Loader;