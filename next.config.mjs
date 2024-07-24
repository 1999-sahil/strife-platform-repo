/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs bufferutil",
        });

        return config;
    },
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uploadthing.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                pathname: '/**',
            }
        ],
    }
};

export default nextConfig;

{/**
images: {
        domains: [
            "uploadthing.com",
            "utfs.io"
        ]
    }    
    
*/}