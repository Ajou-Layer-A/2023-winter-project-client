import TapButtonHeader from "@/components/TapButtonHeader";
import styles from "@/styles/layout.module.css";

export const metadata = {
  title: "LayerA Market | Mint",
};

const TABS = [
  {
    id: 1,
    name: "Live Mints",
  },
];
export default function MintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <TapButtonHeader TABS={TABS} />
      {children}
    </div>
  );
}
