import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-4 mb-3 open-account-heading text-danger">
          404 Page not found 
        </h1>
        <p className="mb-4 text-danger">
         Sorry the page you looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
