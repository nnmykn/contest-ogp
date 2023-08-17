import { ImageResponse, NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch(
    new URL("../../assets/KosugiMaru.ttf", import.meta.url)
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
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                    }}
                >
                    <div
                        style={{
                            fontSize: 90,
                            fontStyle: "normal",
                            fontWeight: "bold",
                            color: "white",
                            lineHeight: 1.3,
                            marginBottom: "30px",
                            wordWrap: "break-word",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 90,
                            fontStyle: "normal",
                            fontWeight: "bold",
                            color: "white",
                            lineHeight: 1.3,
                            backgroundColor: '#FFA200',
                            padding: '10px 20px',
                        }}
                    >
                        選手権
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