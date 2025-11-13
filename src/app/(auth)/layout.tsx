export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      {/* Top pattern */}
      <div className="max-content-width mx-auto h-10 border-x" />
      <div className="h-20.75 w-full border-y">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width h-full border-x bg-white"></div>
        </div>
      </div>

      <main className="min-h-[calc(100vh-15rem)]">{children}</main>

      {/* Bottom pattern */}
      <div className="h-20.75 w-full border-y">
        <div className="max-content-width mx-auto h-full border-x"></div>
      </div>
      <div className="max-content-width mx-auto h-10 border-x" />
    </div>
  );
}
