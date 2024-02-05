import GlobalHeader from "@/components/GlobalHeader";
import GlobalNav from "@/components/GlobalNav";
import RecoilRootProvider from "@/lib/recoilRootProvider";
import StyledComponentsRegistry from "@/lib/registry";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LayerA Market",
  description: "Nft market made by Layer A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <RecoilRootProvider>
          <StyledComponentsRegistry>
            <GlobalHeader />
            <GlobalNav />
            {children}
          </StyledComponentsRegistry>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
