// "use client";
// import Link from "next/link";
// import styles from "./ButtonToImage.module.css";
// import { useState } from "react";

// export function ButtonToImage() {
//   const [changePage, setChangePage] = useState("/photo");
//   function changeThisPage() {
//     setTimeout(() => {
//       setChangePage("/");
//     }, 1000);
//     console.log(changePage);
//   }
//   return (
//     <Link href={changePage}>
//       <button onClick={changeThisPage}>Włącz obrazek</button>
//     </Link>
//   );
// }

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ButtonToImage() {
  const [isToggling, setIsToggling] = useState(false); // Stan do kontroli, czy przełączamy strony
  const router = useRouter();

  function togglePage() {
    // Jeżeli interwał nie jest aktywny, uruchamiamy go
    if (!isToggling) {
      setIsToggling(true); // Zmieniamy stan na true, żeby nie uruchomić interwału ponownie

      let currentPath = "/";
      const interval = setInterval(() => {
        currentPath = currentPath === "/" ? "/photo" : "/"; // Przełączamy ścieżki między "/" a "/photo"
        router.push(currentPath); // Programowo zmieniamy URL
      }, 1000);

      // Zatrzymujemy interwał po 5 sekundach (lub dowolnym czasie, jaki wybierzesz)
      setTimeout(() => {
        router.push("/");
        clearInterval(interval); // Zatrzymujemy przełączanie po 5 sekundach
        setIsToggling(false); // Przywracamy możliwość ponownego kliknięcia
      }, 5000); // Zmieniamy stronę przez 5 sekund
    }
  }

  return <button onClick={togglePage}>Włącz obrazek</button>;
}
