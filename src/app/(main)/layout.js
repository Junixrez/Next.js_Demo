import Navbar from "@/Components/navbar";
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
}
