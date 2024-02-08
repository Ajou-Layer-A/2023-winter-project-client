import styled from "styled-components";
import styles from "@/styles/layout.module.css";

// export const metadata = {
//   title: "LayerA Market",
//   description: "Nft market made by Layer A",
// };

export default function HomeMintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.page}>{children}</div>;
}

// const Container = styled.div`
//   padding-left: 70px;
//   padding-top: 67px;
// `;
