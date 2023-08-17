import { ImageResponse } from "@vercel/og";
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    runtime: "edge",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const title = req.query?.title || 'ぼくらの';

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
                    fontSize: "128px",
                }}
            >
                {title}
            </div>
        ),
    );
}
