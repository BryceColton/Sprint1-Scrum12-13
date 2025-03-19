export const MenuItems: React.FC = () => {
    const menuItems = [
      "Login",
      "Home Page",
      "Different Activities",
      "Calendar",
      "Blog",
    ];
  
    return (
        <div className="text-black">
        <ul className="flex flex-col gap-20 items-center pt-40 max-md:gap-16 max-md:pt-32 max-sm:gap-11 max-sm:pt-24">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-2xl text-center max-sm:text-xl hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    );
  };
  