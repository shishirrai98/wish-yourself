interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <header className='header'>
      <h1>Happy Birthday, {name}! 🎈</h1>
    </header>
  );
};

export default Header;
