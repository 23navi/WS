const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const wikiNs = new Namespace(
  0,
  "wiki",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png",
  "/wiki"
);

wikiNs.addRoom(new Room(0, "wikiRoom0", 0));
wikiNs.addRoom(new Room(1, "wikiRoom1", 0));
wikiNs.addRoom(new Room(2, "wikiRoom2", 0));

const mozNs = new Namespace(
  1,
  "Mozilla",
  "https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png",
  "/mozilla"
);

mozNs.addRoom(new Room(0, "mozRoom0", 0));
mozNs.addRoom(new Room(1, "mozRoom1", 0));
mozNs.addRoom(new Room(2, "mozRoom2", 0));

const linuxNs = new Namespace(
  2,
  "Linux",
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
  "/linux"
);

linuxNs.addRoom(new Room(0, "linuxRoom0", 0));
linuxNs.addRoom(new Room(1, "linuxRoom1", 0));
linuxNs.addRoom(new Room(2, "linuxRoom2", 0));

const namespaces = [wikiNs, mozNs, linuxNs];

module.exports = namespaces;
