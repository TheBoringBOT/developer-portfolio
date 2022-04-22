import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen mx-auto  text-black">
        {/* <Header /> */}

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}