const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "comet.charlievecc",
  version: "1.0.0",
  name: "Comet Addon",
  description: "Streams public torrents via Comet TB",
  resources: ["stream"],
  types: ["movie", "series"],
  catalogs: [],
  addon_catalogs: [],
  behaviorHints: {
    adult: false
  }
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
  const { type, id } = args;

  return Promise.resolve({
    streams: [
      {
        title: "Test Stream",
        infoHash: "0123456789abcdef0123456789abcdef01234567",
        fileIdx: 0
      }
    ]
  });
});

module.exports = builder.getInterface();
