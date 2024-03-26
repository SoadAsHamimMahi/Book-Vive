import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="text-center p-8">
        <h1 className="text-7xl font-bold">Oops!</h1>
        <p className="my-4 text-2xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to= "/">Home</Link>
      </div>
      
    </div>
  );
}
