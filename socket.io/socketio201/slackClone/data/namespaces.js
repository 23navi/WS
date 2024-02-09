const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const wikiNs = new Namespace(
  0,
  "wiki",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png",
  "/wiki"
);

const mozNs = new Namespace(
  1,
  "Mozilla",
  "https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png",
  "/mozilla"
);

const linuxNs = new Namespace(
  2,
  "Linux",
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
  "/linux"
);

const namespaces = [wikiNs, mozNs, linuxNs];

module.exports = namespaces;
