import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="max-w-6xl mx-auto p-4">
        <Navbar />
      </main>
    </ThemeProvider>
  );
}
