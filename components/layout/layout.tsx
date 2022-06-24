import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, setModalOpen }) {
  return (
    <>
      {/* <Header /> */}

      <main className="min-h-screen mx-auto text-black duration-300 bg-white  dark:text-light-grey dark:bg-black min-w-screen transition-bg">
        {children}
      </main>
      <Footer setModalOpen={setModalOpen} />
    </>
  );
}
