import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full shadow-sm bg-black flex justify-between p-5 text-white gap-8 font-bold z-50">
      <div className="logo">القران الكريم</div>
      <nav>
        <ul className="flex list-none gap-14 mx-4">
          <li>
            <Link to="/quran">قرآن</Link>
          </li>
          <li>
            <Link to="/hadith">أحاديث</Link>
          </li>
          <li>
            <Link to="/live">مباشر</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
