import { ToggleButton, ToggleContainer } from "../emotion/home.style";
import { useLocation, useNavigate } from "react-router-dom";
import { Section } from "../emotion/global.style";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = (buttonString: string) => {
    navigate(`/${buttonString}`);
  };

  return (
    <Section>
      <ToggleContainer>
        <ToggleButton
          isActive={location.pathname === "/"}
          onClick={() => handleButtonClick("")}
        >
          Home
        </ToggleButton>
        <ToggleButton
          isActive={location.pathname === "/manage"}
          onClick={() => handleButtonClick("manage")}
        >
          Manage
        </ToggleButton>
      </ToggleContainer>
    </Section>
  );
};

export default Header;
