//import SearchInput from "./SearchInput";
import Button from "./Button";

export default function WelcomeSection() {
  return (
    <div className="WelcomeSection">
      <div className="WelcomeSeactionOverlay" />
      <div className="WelcomeSectionText">
        <h1>Over 5K Users All Over the World!</h1>
        <p>
          Lorem ipsum dolor sit amet, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
      <div className="WelcomeSectionButtons">
        <Button text="Take a Tour" type="primary" />
        <Button text="Login First" />
      </div>
    </div>
  );
}
