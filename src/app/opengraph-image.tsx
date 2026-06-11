import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 400,
            width: 700,
            height: 500,
            borderRadius: 9999,
            background: "rgba(230,180,60,0.18)",
            filter: "blur(40px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 18,
              border: "2px solid #e6b43c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e6b43c",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fafaf8", fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
              THE MAHIR TECH
            </span>
            <span style={{ color: "#e6b43c", fontSize: 16, letterSpacing: 4, textTransform: "uppercase" }}>
              {siteConfig.tagline}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 900 }}>
          <span style={{ color: "#fafaf8", fontSize: 60, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Your complete technology partner
          </span>
          <span style={{ color: "#b4b4ad", fontSize: 28, lineHeight: 1.3 }}>
            AI · Automation · GIS · Software · IT Infrastructure
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#8a8a82", fontSize: 22 }}>
            {siteConfig.domain}
          </span>
          <span style={{ color: "#8a8a82", fontSize: 22 }}>
            Rawalpindi, Pakistan
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
