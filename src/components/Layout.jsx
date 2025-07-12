import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, noPaddingTop = false }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className={`${noPaddingTop ? "" : "pt-20"} flex-grow`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
