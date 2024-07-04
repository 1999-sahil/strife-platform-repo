/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        domains: [
            "uploadthing.com",
            "utfs.io"
        ]
    }
};

export default nextConfig;
