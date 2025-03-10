const fiveLetterWords = [
    "apple", "angle", "arena", "alien", "actor", "arrow", "angel", "alert", "about", "adore",  // A
    "brave", "bread", "broom", "blast", "brain", "brick", "bring", "brown", "bless", "basic",  // B
    "charm", "climb", "cloud", "clean", "crown", "crazy", "chain", "cheer", "catch", "cargo",  // C
    "dream", "drift", "dance", "drive", "dusty", "depth", "daily", "draft", "drill", "drama",  // D
    "eagle", "earth", "elbow", "enter", "extra", "exact", "event", "every", "email", "enjoy",  // E
    "flute", "frost", "flame", "fancy", "fruit", "flash", "flora", "first", "force", "fever",  // F
    "grape", "giant", "great", "green", "grain", "group", "guard", "grace", "glory", "gloom",  // G
    "happy", "house", "hover", "horse", "honor", "heart", "harsh", "honey", "hurry", "habit",  // H
    "ivory", "ideal", "input", "image", "irony", "index", "imply", "issue", "itchy", "inner",  // I
    "joker", "jolly", "juice", "jewel", "jumpy", "joint", "jolly", "jiffy", "jumbo", "judge",  // J
    "kneel", "knife", "knock", "known", "karma", "kiosk", "koala", "kitty", "knack", "kinky",  // K
    "lemon", "light", "lucky", "lover", "layer", "liver", "limit", "learn", "labor", "lodge",  // L
    "mango", "mouse", "magic", "money", "maker", "model", "march", "match", "merge", "mirth",  // M
    "novel", "noble", "never", "night", "ninja", "nasty", "noise", "north", "nicer", "niche",  // N
    "ocean", "olive", "onion", "orbit", "outer", "order", "other", "often", "oasis", "offer",  // O
    "pearl", "plant", "paint", "pride", "piano", "party", "peace", "point", "power", "prime",  // P
    "queen", "quilt", "quirk", "quick", "query", "quota", "quest", "quiet", "quark", "quash",  // Q
    "river", "robot", "rough", "raven", "reach", "rocky", "royal", "relay", "rider", "risky",  // R
    "stone", "start", "short", "sharp", "sugar", "speak", "smile", "shock", "share", "serve",  // S
    "tiger", "table", "taste", "train", "track", "trace", "tower", "tough", "trust", "trend",  // T
    "union", "unite", "urban", "under", "usher", "ultra", "uncle", "upper", "usual", "upset",  // U
    "vivid", "vocal", "voter", "value", "vigor", "video", "visit", "venom", "vital", "verse",  // V
    "whale", "wheat", "wrist", "weave", "windy", "water", "witch", "worry", "watch", "white",  // W
    "xenon", "xerox", "xylem", "xenon", "xenia", "xenon", "xenon", "xenon", "xenon", "xenon",  // X
    "yield", "young", "yacht", "yummy", "yearn", "youth", "yawns", "yikes", "yours", "yogic",  // Y
    "zebra", "zesty", "zonal", "zippy", "zoomy", "zoned", "zeros", "zincs", "zones", "zings"   // Z
  ];
 
  
  export function RandomWord() {
    let targetWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    targetWord = targetWord.toUpperCase(); // Convert to uppercase
    return targetWord;
}
