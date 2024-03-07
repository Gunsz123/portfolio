import type { Metadata } from "next";
import "../app/globals.css";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: "Hassan | Portfolio",
  description: "Hassan's Web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="107,0,191"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "107,0,191",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
