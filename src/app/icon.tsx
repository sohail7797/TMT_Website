import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: "#e6b43c",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
