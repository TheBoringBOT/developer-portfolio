import Header from "./header";
import Footer from "./footer";

export default function index({ children, setModalOpen }) {
  return (
    <>
      <div className="min-h-screen max-w-7xl mx-auto px-10 text-black">
        {/* <Header /> */}

        <main>{children}</main>
      </div>
      <Footer setModalOpen={setModalOpen} />
    </>
  );
}
