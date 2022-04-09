import Header from "./header";
import Footer from "./footer";

export default function index({ children }) {
  return (
    <>
      {/* two cols with left sticky starting larger screens */}
      <div class="lg:grid lg:grid-cols-12 min-h-[200vh]">
        <aside class="lg:self-start lg:sticky lg:top-0 col-span-12 lg:col-span-6 bg-indigo-300">
          <Header />
          <Footer />
        </aside>

        <main class=" col-span-12 lg:col-span-6 bg-slate-200">{children}</main>
      </div>
    </>
  );
}
