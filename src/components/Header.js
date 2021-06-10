import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === "/" && (
        <>
          <h1>{title}</h1>
          <Button
            color={showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add"}
            onClick={onAdd}
          />
        </>
      )}
    </header>
  );
};

// Default props, if title is not passed to Header the default title will be 'Task Tracker'
Header.defaultProps = {
  title: "Task Tracker",
};

// A little error handlinng using propTypes, allowing a certain datatype to be passed
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

// ** Styling using CSS **

// 1. using index.css
// 2. using style components (external package)
// 3. inline css in jsx
// e.g
// <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
//              or
// <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     {color: 'red', backgroundColor: 'black'}
// }
