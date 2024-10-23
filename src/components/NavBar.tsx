interface NavBarProps {
  onPrevious: () => void;
  onNext: () => void;
}

const NavBar = (props: NavBarProps) => {
  return (
    <div className="navbar">
      <button onClick={props.onPrevious}>Précédent</button>
      <button onClick={props.onNext}>Suivant</button>
    </div>
  );
};

export default NavBar;
