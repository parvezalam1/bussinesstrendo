/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.pixabay.com"
            },
            {
                hostname:"www.istockphoto.com"
            }
        ]
    }
};

export default nextConfig;
