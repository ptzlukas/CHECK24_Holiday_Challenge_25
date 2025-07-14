export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="m-0 p-0 w-screen h-screen overflow-hidden bg-white">
        {children}
      </div>
    );
  }