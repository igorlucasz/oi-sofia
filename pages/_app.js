import { useState, useEffect } from "react";
import Layout from "../components/Layout.jsx";
import CountdownGate from "../components/CountdownGate.jsx";
import "../styles/globals.css";

const UNLOCK = new Date(2026, 5, 2, 0, 0, 0); // 02/06/2026 00:00:00 horário local

export default function App({ Component, pageProps }) {
  const [gateVisible, setGateVisible] = useState(true);

  useEffect(() => {
    if (new Date() >= UNLOCK) setGateVisible(false);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      {gateVisible && (
        <CountdownGate unlockDate={UNLOCK} onUnlock={() => setGateVisible(false)} />
      )}
    </Layout>
  );
}
