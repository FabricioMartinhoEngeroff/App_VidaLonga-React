import { render } from "preact";
import App from "./App";

const rootElement = document.getElementById("app");

if (rootElement) {
  render(<App />, rootElement);
} else {
  console.error("Elemento root não encontrado. Verifique se o ID 'app' está correto.");
}