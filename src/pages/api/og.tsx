import { ImageResponse, NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch(
    new URL("../../assets/KosugiMaru.woff2", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const fontData = await font;

        const hasTitle = searchParams.has("title");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : "My default title";

        return new ImageResponse(
            (
                <div
                    style={{
                        backgroundColor: "black",
                        backgroundSize: "100% 100%",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            fontSize: 60,
                            fontStyle: "normal",
                            fontWeight: "bold",
                            color: "white",
                            padding: "0 120px",
                            lineHeight: 1.3,
                            marginBottom: "30px",
                            wordWrap: "break-word",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            width: "100%",
                            fontSize: 40,
                            fontStyle: "normal",
                            fontWeight: "bold",
                            color: "white",
                            padding: "0 120px",
                            lineHeight: 1.3,
                        }}
                    >
                        ✏️ せんしゅけん
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Kosugi Maru",
                        data: fontData,
                    }
                ]
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}