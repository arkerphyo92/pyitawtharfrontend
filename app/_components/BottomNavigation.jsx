"use client";
import { useState } from "react";
import "ionicons/icons";
export default function BottomNavigation() {
  const Menus = [
    {
      name: "Home",
      icon: "M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75",
      dis: "10",
    },
    {
      name: "Profile",
      icon: "M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8",
      dis: "30",
    },
    {
      name: "Message",
      icon: "M3.463 15.642a.4.4 0 0 0-.039-.24a18 18 0 0 1-.642-1.561c-.18-.517-.38-1.2-.407-1.862c-.2-5.056 4.019-9.076 9.09-9.277s9.595 3.471 9.796 8.527s-4.019 9.076-9.09 9.277a10 10 0 0 1-2.854-.296l-2.769 1.138c-1.992.818-4.087-.925-3.645-3.033zm1.958.411a2.4 2.4 0 0 0-.181-1.49c-.39-.844-.838-1.95-.866-2.663c-.152-3.813 3.058-7.036 7.17-7.2c4.111-.163 7.567 2.796 7.718 6.609c.152 3.813-3.058 7.036-7.17 7.2a8 8 0 0 1-2.558-.313a.97.97 0 0 0-.643.027l-3.103 1.275a.683.683 0 0 1-.928-.772l.56-2.673Z",
      dis: "50",
    },
    {
      name: "Photos",
      icon: "m11.2 8.375l3.5-6q2.275.6 4.038 2.2t2.562 3.8zm-2.775 2.5L5 4.875q1.35-1.325 3.138-2.1T12 2q.325 0 .75.038t.775.087zm-6.1 3.625q-.15-.6-.238-1.225T2 12q0-1.775.575-3.35T4.2 5.775L9.25 14.5zm7 7.125q-2.275-.6-4.05-2.2t-2.575-3.8h10.075zM12 22q-.375 0-.763-.05t-.737-.1l5.075-8.725l3.425 6q-1.35 1.325-3.137 2.1T12 22m7.8-3.775L14.75 9.5h6.925q.15.6.238 1.225T22 12q0 1.75-.612 3.35T19.8 18.225",
      dis: "70",
    },
    {
      name: "Settings",
      icon: "M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2",
      dis: "90",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto w-[90vw] mt-0 text-slate-800 mb-0 xl:hidden">
        <div className=" max-h-[4.4rem] px-6 rounded-t-xl text-white relative z-10">
          <ul className="flex relative">
            <span
              className={`bg-amber-500 duration-500  border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
              style={{ left: `calc(${Menus[active].dis}% - 2rem)` }}
            >
              <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
              ></span>
              <span
                className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
              ></span>
            </span>
            {Menus.map((menu, i) => (
              <li key={i} className="w-full">
                <a
                  className="flex flex-col text-center pt-6"
                  onClick={() => setActive(i)}
                >
                  <span
                    className={`flex justify-center text-xl cursor-pointer duration-500 relative z-50 ${
                      i === active && "-mt-6 text-white"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path fill="currentColor" d={menu.icon} />
                    </svg>
                  </span>
                  <span
                    className={` ${
                      active === i
                        ? "translate-y-4 duration-700 opacity-100"
                        : "opacity-0 translate-y-5"
                    } `}
                  >
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
