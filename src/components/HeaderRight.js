import Button from "./Button";

export default function HeaderRight() {
  return (
    <div className="HeaderRight">
      <Button text="Login" type="primary" />
      <Button text="Sign Up" type="secondary" />
    </div>
  );
}
