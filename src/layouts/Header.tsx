import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const Header = () => {
  return (
    <header className="h-15 bg-primary flex items-center">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-lg text-white">
          Logo
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className="text-white">
                Create
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Button text="Login" variant="text" size="medium" />
          <Button text="Register" variant="outlined" size="medium" />
        </div>
      </div>
    </header>
  );
};
