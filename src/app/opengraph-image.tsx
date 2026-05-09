import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vithahaselvi Haribalajhee portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0f",
          color: "#F0EFF8",
          padding: 72,
          fontFamily: "Arial",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,111,247,0.32), transparent 30%), radial-gradient(circle at 86% 18%, rgba(45,212,160,0.24), transparent 28%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            letterSpacing: 8,
          }}
        >
          <div
            style={{
              height: 64,
              width: 64,
              border: "1px solid #7C6FF7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7C6FF7",
            }}
          >
            VH
          </div>
          ML SYSTEMS PORTFOLIO
        </div>
        <div>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1 }}>
            Vithahaselvi
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, color: "#2DD4A0", lineHeight: 1.05 }}>
            Haribalajhee
          </div>
          <div style={{ marginTop: 30, fontSize: 34, color: "#888899" }}>
            ML pipelines · RAG systems · Data engineering
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#F59E0B" }}>
          Seeking internship · May-Dec 2026 · Coimbatore, India
        </div>
      </div>
    ),
    size,
  );
}
