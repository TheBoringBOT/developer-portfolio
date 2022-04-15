import Header from "./header";
import Footer from "./footer";

export default function index({ children }) {
  return (
    <>
      {/* two cols with left sticky starting larger screens */}
      <div class="min-h-screen max-w-5xl mx-auto text-black">
        <Header />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
