import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps !!</h2>
            <Link className="btn btn-accent top-3" to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;