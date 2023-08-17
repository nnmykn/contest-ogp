import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler() {
  const fontData = await fetch(
    new URL("../../assets/KosugiMaru-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          fontFamily: '"Roboto"',
          fontWeight: "bold",
          fontSize: "128px",
        }}
      >
        Hello world!
      </div>
    ),
    {
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
