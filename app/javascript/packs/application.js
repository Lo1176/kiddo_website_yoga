require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";

initLetters();
