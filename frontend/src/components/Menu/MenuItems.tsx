// import { Link } from "react-router-dom";

// export const MenuItems: React.FC = () => {
//   const menuItems = [
//     { name: "Login", path: "/" },
//     { name: "Home Page", path: "/HomePage" },
//     { name: "Different Activities", path: "/activities" },
//     { name: "Calendar", path: "/calendar" },
//     { name: "Blog", path: "/blog" },
//   ];

//   return (
//     <ul className="flex flex-col gap-20 items-center pt-40 max-md:gap-16 max-md:pt-32 max-sm:gap-11 max-sm:pt-24">
//       {menuItems.map((item) => (
//         <li key={item.name}>
//           <Link
//             to={item.path} // Use Link from react-router-dom
//             className="text-2xl text-center text-black max-sm:text-xl hover:text-white transition-colors"
//           >
//             {item.name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

import { Link } from "react-router-dom";

export const MenuItems: React.FC = () => {
  const menuItems = [
    { name: "Login", path: "/" },
    { name: "Home Page", path: "/HomePage" },
    { name: "Different Activities", path: "/activities" },
    { name: "Calendar", path: "/calendar" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <ul className="flex flex-col gap-10 items-center pt-32 font-sans">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="text-white text-2xl font-medium tracking-wide relative group"
          >
            {item.name}
            <span className="block h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full absolute bottom-0 left-0"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

