import { render } from "preact";
import App from "./App";

// Tipagem correta do elemento root
const rootElement = document.getElementById("app") as HTMLElement | null;

if (rootElement) {
  render(<App />, rootElement);
} else {
  console.error("Elemento root não encontrado. Verifique se o ID 'app' está correto.");
}