// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "France",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-14.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "protonmail",
              url: "https://protonmail.com",
              icon: "mail",
              icon_color: palette.purple,
            },
            {
              name: "protondrive",
              url: "https://protondrive.com",
              icon: "server",
              icon_color: palette.purple,
            },
            {
              name: "protonvpn",
              url: "https://protonvpn.com",
              icon: "brand-openvpn",
              icon_color: palette.purple,
            },
            {
              name: "protoncalendar",
              url: "https://proton.me/calendar",
              icon: "calendar",
              icon_color: palette.purple,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.orange,
            },
            {
              name: "duckduckgo",
              url: "https://duckduckgo.com",
              icon: "brand-duckduckgo",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.white,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.green,
            },
            {
              name: "zsa blog",
              url: "https://zsa.io/blog/",
              icon: "keyboard",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.white,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Typing",
          links: [
            {
              name: "keybr",
              url: "https://heybr.com",
              icon: "keyboard",
              icon_color: palette.green,
            },
            {
              name: "ty.ping",
              url: "https://ty.ping",
              icon: "keyboard",
              icon_color: palette.peach,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.red,
            },
            {
              name: "ratatype",
              url: "https://www.ratatype.com",
              icon: "keyboard",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "lab",
      background_url: "src/img/banners/cbg-09.gif", // optional background image
      categories: [
        {
          name: "links",
          links: [
            {
              name: "audibox.cc",
              url: "https://audibox.cc",
              icon: "ball-volleyball",
              icon_color: palette.red,
            },
            {
              name: "audiobookshelf",
              url: "https://abs.audibox.cc",
              icon: "ball-volleyball",
              icon_color: palette.yellow,
            },
            {
              name: "kavita",
              url: "https://kavita.audibox.cc",
              icon: "ball-volleyball",
              icon_color: palette.green,
            },
            {
              name: "speakarr",
              url: "https://speadarr.audibox.cc",
              icon: "ball-volleyball",
              icon_color: palette.pink,
            },
            {
              name: "readarr",
              url: "https://readarr.audibox.cc",
              icon: "ball-volleyball",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
