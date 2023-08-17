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
                    backgroundColor: "black",
                    fontSize: "128px",
                    color: "white",
                }}
            >
                {title}
                <div style={{backgroundColor: '#FFA200', padding: '10px'}}><p>選手権</p></div>
            </div>
        ),
    );
}
