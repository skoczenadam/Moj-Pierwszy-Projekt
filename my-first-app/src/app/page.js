import { ButtonToImage } from "./components/ButtonToImage";
import { LanguageSelector } from "./components/LanguageSelector";

export default function Home() {
  return (
    <main>
      <h1>Hello next!</h1>
      <LanguageSelector />
      <ButtonToImage />
    </main>
  )
}
