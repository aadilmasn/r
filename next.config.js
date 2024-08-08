// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: "/P1ivxNm59B", // This part can be adjusted based on how you want to handle the original URL
        has: [
          {
            type: "query",
            key: "q",
            value: "https://qrfy.io/P1ivxNm59B",
          },
        ],
        destination: "https://www.masn.life",
        permanent: true,
      },
    ];
  },
};
