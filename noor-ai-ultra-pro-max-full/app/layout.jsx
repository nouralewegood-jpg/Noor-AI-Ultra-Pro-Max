
export const metadata = {
  title: "Noor AI Ultra Pro Max",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:"Arial", margin:0}}>
        {children}
      </body>
    </html>
  );
}
