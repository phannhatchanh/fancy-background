"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import clsx from "clsx";

import { FaSync } from "react-icons/fa";
import { isSSR } from "@/utils/env";
import useDocument from "@/hooks/useDocument";
import styles from "@/components/FancyBackground.module.scss";

import Tippy from "@tippyjs/react";

// Borrowed from https://codepen.io/georgedoescode/pen/YzxrRZe
const generateSeed = () => Math.random() * 10000;
const workletURL =
  "https://unpkg.com/@georgedoescode/fluid-pattern-worklet@1.0.1/worklet.bundle.js";

const FancyBackground: React.FC = () => {
  const document = useDocument();
  const [seed, setSeed] = useState(
    !isSSR && (window as any)?.CSS?.paintWorklet ? generateSeed() : undefined
  );

  useEffect(() => {
    if (document) {
      document.body.setAttribute("data-fancy-background", seed ? "true" : "");
    }
  }, [document, seed]);

  return (
    <>
      <Head>
        <link rel="preconnect" href={new URL(workletURL).origin} />
      </Head>
      <Script id="fancy-background-paintWorklet">
        {`
          if (CSS && CSS.paintWorklet && CSS.paintWorklet.addModule) {
            CSS.paintWorklet.addModule('${workletURL}')
          }
        `}
      </Script>
      {seed && (
        <>
          <div
            style={{
              // @ts-ignore
              "--fluid-pattern-seed": seed,
            }}
            className={styles.canvas}
          />
          <Tippy
            delay={[0, 50]}
            content={"Regenerate the background pattern"}
            placement="right"
          >
            <button
              onClick={() => setSeed(generateSeed())}
              arial-label="Regenerate the background pattern"
              className={clsx(
                "gtm-background-refresh-button",
                styles.refreshButton
              )}
              type="reset"
            >
              <FaSync />
            </button>
          </Tippy>
        </>
      )}
    </>
  );
};

export default FancyBackground;
