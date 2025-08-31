import { useEffect } from "react";

export default function useDropdownDelay() {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-hover");

    dropdowns.forEach((dd) => {
      let timeout;

      dd.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        const menu = dd.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("show");
      });

      dd.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          const menu = dd.querySelector(".dropdown-menu");
          if (menu) menu.classList.remove("show");
        }, 250); // 0.5 sec delay
      });
    });
  }, []);
}
