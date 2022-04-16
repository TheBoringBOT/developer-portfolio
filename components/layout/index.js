import Header from "./header";
import Footer from "./footer";

export default function index({ children }) {
  return (
    <>
      <div className="min-h-screen max-w-5xl mx-auto text-black">
        {/* <Header /> */}

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
