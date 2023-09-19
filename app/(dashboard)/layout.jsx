import Header from "@/components/Header";

const DahboardLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="h-screen bg-neutral-50 overflow-y-auto">{children}</div>
    </main>
  );
};

export default DahboardLayout;
