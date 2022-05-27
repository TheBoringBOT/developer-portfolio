import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, setModalOpen }) {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen mx-auto text-black min-w-screen">
        {children}
      </main>
      <Footer setModalOpen={setModalOpen} />
    </>
  );
}
