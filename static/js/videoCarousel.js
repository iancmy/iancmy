// portfolio reference
const portfolio = [
  {
    "title": "Dota2 Short Film Contest",
    "code": "dota2",
    "year": 2015,
    "description": "2015, Video Editor, Dota2, Montage Video",
    "link": "https://youtu.be/O9q3gSsHhqM",
    "thumbnail": "/static/img/posters/dota2.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Gentleman MTV - Honda Cars Philippines",
    "code": "gentleman-mtv",
    "year": 2015,
    "description": "2015, Video Editor, Music Video",
    "link": "https://youtu.be/POvEAb6Rw80",
    "thumbnail": "/static/img/posters/gentleman-mtv.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": true,
    "more": false
  },
  {
    "title": "Kuh Pre-debut",
    "code": "kuh18",
    "year": 2015,
    "description": "2015, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/u2NVh3Km0z8",
    "thumbnail": "/static/img/posters/kuh18.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Paskong Arriba MV Teaser",
    "code": "paskong-arriba-teaser",
    "year": 2016,
    "description": "2015, Video Editor, Cinematographer, Music Video, Teaser",
    "link": "https://youtu.be/Ph6eEBMYj14",
    "thumbnail": "/static/img/posters/paskong-arriba-teaser.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": true,
    "more": false
  },
  {
    "title": "Battle of the Bands 2016 Teaser",
    "code": "botb2016",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/ojt9dwsVS4Q",
    "thumbnail": "/static/img/posters/botb2016.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Coca-Cola",
    "code": "coke",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/oHMi5SunVMM",
    "thumbnail": "/static/img/posters/coke.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Flamousse",
    "code": "flamousse",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/3KasNSIKsTU",
    "thumbnail": "/static/img/posters/flamousse.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Gising",
    "code": "gising",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Short Film",
    "link": "https://youtu.be/9Ejt-y0AtQs",
    "thumbnail": "/static/img/posters/gising.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": true,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Makipamuhay XXI Documentary",
    "code": "makipamuhay",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Event, Documentary",
    "link": "https://youtu.be/gHYG8RtdbRc",
    "thumbnail": "/static/img/posters/makipamuhay.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": true,
    "music_video": false,
    "more": false
  },
  {
    "title": "Nica at 18",
    "code": "nica18",
    "year": 2016,
    "description": "2016, Video Editor, Event, Photo Compilation",
    "link": "https://youtu.be/4U1vROHjTjk",
    "thumbnail": "/static/img/posters/nica18.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Paskong Arriba Music Video",
    "code": "paskong-arriba-mv",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Music Video",
    "link": "https://youtu.be/_bi5hmWFuqw",
    "thumbnail": "/static/img/posters/paskong-arriba-mv.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": true,
    "more": false
  },
  {
    "title": "Pepitas de Camote",
    "code": "pepitas-de-camote",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/xbgkxKMJUOQ",
    "thumbnail": "/static/img/posters/pepitas-de-camote.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Recruitment Week",
    "code": "recruitment-week",
    "year": 2016,
    "description": "2016, Video Editor, Cinematographer, Event",
    "link": "https://youtu.be/50Usp8RgW7s",
    "thumbnail": "/static/img/posters/recruitment-week.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Death Penalty Infovideo",
    "code": "death-penalty",
    "year": 2016,
    "description": "2016, Video Editor, Infovideo",
    "link": "https://youtu.be/fSD1kcRrJio",
    "thumbnail": "/static/img/posters/death-penalty.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": true
  },
  {
    "title": "7 Lakes of San Pablo",
    "code": "7lakes",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Vlog",
    "link": "https://youtu.be/ALQZkUCZgcI",
    "thumbnail": "/static/img/posters/7lakes.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": true,
    "music_video": false,
    "more": false
  },
  {
    "title": "Bicol 2017",
    "code": "bicol",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Vlog",
    "link": "https://youtu.be/ViUOGLGPRMU",
    "thumbnail": "/static/img/posters/bicol.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": true,
    "music_video": false,
    "more": false
  },
  {
    "title": "Battle of the Bands 2017 Teaser",
    "code": "botb2017",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/tdnDhsGC2F4",
    "thumbnail": "/static/img/posters/botb2017.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Letran Advertisement 1",
    "code": "letran-ad1",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/OL4RzT0R_jw",
    "thumbnail": "/static/img/posters/letran-ad1.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Letran Advertisement 2",
    "code": "letran-ad2",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/h-0aDFbkdSY",
    "thumbnail": "/static/img/posters/letran-ad2.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Letran's Got Talent Teaser",
    "code": "got-talent",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/9egnABTRF6k",
    "thumbnail": "/static/img/posters/got-talent.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Mcdonald's",
    "code": "mcdo",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/_z4tDpKGiP8",
    "thumbnail": "/static/img/posters/mcdo.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Mr. and Ms. SBMA Teaser",
    "code": "mr-and-ms-sbma",
    "year": 2017,
    "description": "2017, Video Editor, Event, Teaser, Animated",
    "link": "https://youtu.be/a460FSAaPeQ",
    "thumbnail": "/static/img/posters/mr-and-ms-sbma.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Onyang's Street Wings",
    "code": "onyangs",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/eatU7OVhJOs",
    "thumbnail": "/static/img/posters/onyangs.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "PNagpala Resto Retro",
    "code": "pnagpala-retro",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement, Retro",
    "link": "https://youtu.be/qUIw2Bq67HM",
    "thumbnail": "/static/img/posters/pnagpala-retro.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "PNagpala Resto",
    "code": "pnagpala",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/5i3Rh-4unZw",
    "thumbnail": "/static/img/posters/pnagpala.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Stoven Café",
    "code": "stoven-café",
    "year": 2017,
    "description": "2017, Video Editor, Advertisement",
    "link": "https://youtu.be/pCcbD0JqQWg",
    "thumbnail": "/static/img/posters/stoven-café.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Xia at 18",
    "code": "xia18-cover",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Event, Cover",
    "link": "https://youtu.be/R_ZK9PKe3B8",
    "thumbnail": "/static/img/posters/xia18-cover.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Xia Pre-debut",
    "code": "xia18",
    "year": 2017,
    "description": "2017, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/QfEeUsyeak0",
    "thumbnail": "/static/img/posters/xia18.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Battle of the Bands 2018 Teaser",
    "code": "botb2018",
    "year": 2018,
    "description": "2018, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/6joS4iLdWe4",
    "thumbnail": "/static/img/posters/botb2018.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Dogeaters",
    "code": "dogeaters",
    "year": 2018,
    "description": "2018, Video Editor, Cinematographer, Short Film",
    "link": "https://youtu.be/E5y7DeE7_Pk",
    "thumbnail": "/static/img/posters/dogeaters.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": true,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Gentlemen's Club",
    "code": "gents-club",
    "year": 2018,
    "description": "2018, Video Editor, Cinematographer, Advertisement",
    "link": "https://youtu.be/8rFnlVu4OAk",
    "thumbnail": "/static/img/posters/gents-club.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Official Letran Advertisement",
    "code": "official-letran-ad",
    "year": 2018,
    "description": "2018, Video Editor, Advertisement",
    "link": "https://youtu.be/STUMPu8HAb4",
    "thumbnail": "/static/img/posters/official-letran-ad.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": true,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Pat Pre-debut",
    "code": "pat18",
    "year": 2018,
    "description": "2018, Video Editor, Cinematographer, Event, Teaser",
    "link": "https://youtu.be/VU7KvV7g_uk",
    "thumbnail": "/static/img/posters/pat18.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": true,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Anti-bullying Advocacy Video",
    "code": "advocacy",
    "year": 2019,
    "description": "2019, Video Editor, Cinematographer, Advocacy",
    "link": "https://youtu.be/FSVqsTVEFlA",
    "thumbnail": "/static/img/posters/advocacy.jpg",
    "favorites": true,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": true
  },
  {
    "title": "Salted Caramel Yema Candy",
    "code": "salted-caramel",
    "year": 2019,
    "description": "2019, Video Editor, Vlog, Food",
    "link": "https://youtu.be/LnycYg8tV4g",
    "thumbnail": "/static/img/posters/salted-caramel.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": true,
    "music_video": false,
    "more": false
  },
  {
    "title": "Project Not a Goodbye",
    "code": "not-a-goodbye",
    "year": 2020,
    "description": "2020, Video Editor, Photo Compilation",
    "link": "https://youtu.be/rxQb0UB79II",
    "thumbnail": "/static/img/posters/not-a-goodbye.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": true
  },
  {
    "title": "Memes Compilation Video",
    "code": "clumsy",
    "year": 2021,
    "description": "2021, Video Editor, Photo Compilation, Memes, Funny, Clumsy",
    "link": "https://youtu.be/-ZPSiQ-AsAg",
    "thumbnail": "/static/img/posters/clumsy.jpg",
    "favorites": false,
    "gaming": false,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": true
  },
  {
    "title": "Breeze - Valorant Gameplay",
    "code": "domyt",
    "year": 2022,
    "description": "2022, Video Editor, Content Creator, Gameplay, Funny, Valorant, DomYT",
    "link": "https://youtu.be/ZVqFnFzP7ak",
    "thumbnail": "/static/img/posters/domyt.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Whomps Fortress - Garry's Mod Gameplay",
    "code": "trillix",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Funny, Garry's Mod, TrillixDoesYouTube",
    "link": "https://youtu.be/NL02Jix3tpo",
    "thumbnail": "/static/img/posters/trillix.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Clicking Heads With Jett",
    "code": "p0land-valo1",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/25TpCWi1doM",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Reyna Insane 21-Kill Game",
    "code": "p0land-valo2",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/kWN9Kda8q1U",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Match MVP on Breeze???",
    "code": "p0land-valo3",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/Fsz9VrGUUVU",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Dominate Haven = Rank Up",
    "code": "p0land-valo4",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/iRMcoTD6PAg",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Slow Start Into a 21k Finish",
    "code": "p0land-valo5",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/nefJrXaq184",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "I Forgot I Was Smurfing",
    "code": "p0land-valo6",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/xR7JeI4Y22g",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "This Game Is Just Too Easy",
    "code": "p0land-valo7",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/27YwwDX43Nc",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "5v5 With Other Minecraft CC’s",
    "code": "p0land-valo8",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/d1elFolHPqk",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "17 Kills With Only a Sheriff",
    "code": "p0land-valo9",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/ZiFH1dOVvLA",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Match MVP With a Judge",
    "code": "p0land-valo10",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/12qkRu9fdZM",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Dropping a 34-Bomb on Icebox",
    "code": "p0land-valo11",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/qsD2P4XJaq0",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "13–0 Clean Sweep With Youtubers",
    "code": "p0land-valo12",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/c34iOmf58Yc",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Getting Another Match MVP!!!",
    "code": "p0land-valo13",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/59fIjGCJzvc",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Massive Comeback and OT Win!",
    "code": "p0land-valo14",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/Bi666Abl_DY",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Chill Valo Game With Friends",
    "code": "p0land-valo15",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/HkkcN4s2wZY",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Playing Some PvP Legacy",
    "code": "p0land-mc1",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Minecraft, P0LAND",
    "link": "https://youtu.be/c3cCATIASBY",
    "thumbnail": "/static/img/posters/p0land-mc.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Galaxy Royale Gets Me Into Valo Mood",
    "code": "p0land-mc2",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Minecraft, P0LAND",
    "link": "https://youtu.be/zA7yLiM-Fd8",
    "thumbnail": "/static/img/posters/p0land-mc.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Why Did I Play Astra???",
    "code": "p0land-valo18",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/MSLCeKcbgU0",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Op-ing My Way Back to Immortal 2",
    "code": "p0land-valo19",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/VLckpeA8gcA",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "4 vs 1 Clutch for the Win!!!",
    "code": "p0land-valo20",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/4v455wm4woo",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  },
  {
    "title": "Chamber Is So Good on Breeze",
    "code": "p0land-valo21",
    "year": 2022,
    "description": "2022, Video Editor, Gameplay, Valorant, P0LAND",
    "link": "https://youtu.be/HFx1PaBnqaQ",
    "thumbnail": "/static/img/posters/p0land-valo.jpg",
    "favorites": false,
    "gaming": true,
    "short_film": false,
    "event": false,
    "advertisement": false,
    "vlog": false,
    "music_video": false,
    "more": false
  }
 ]

// category list
const categories = [
  {name: "Favorites", code: "favorites", videos: []},
  {name: "Gaming", code: "gaming", videos: []},
  {name: "Short Film", code: "shortFilm", videos: []},
  {name: "Event", code: "event", videos: []},
  {name: "Advertisement", code: "advertisement", videos: []},
  {name: "Vlog", code: "vlog", videos: []},
  {name: "Music Video", code: "musicVideo", videos: []},
  {name: "More", code: "more", videos: []}
]

// adds all videos to categories
portfolio.forEach(item => {
    item.favorites ? categories[0].videos.push(item) : null
    item.gaming ? categories[1].videos.push(item) : null
    item.short_film ? categories[2].videos.push(item) : null
    item.event ? categories[3].videos.push(item) : null
    item.advertisement ? categories[4].videos.push(item) : null
    item.vlog ? categories[5].videos.push(item) : null
    item.music_video ? categories[6].videos.push(item) : null
    item.more ? categories[7].videos.push(item) : null
} )

// create carousel for each category
categories.forEach(category => {
    //randomize videos in category
    category.videos.sort(() => Math.random() - 0.5)

    //create carousel container for category
    const mainContainer = document.createElement('div');

    // title of category
    const title = document.createElement('h3');
    title.innerText = category.name;

    // carousel
    const carousel = document.createElement('div');
    carousel.classList.add('category-container', category.code);
    
    // left-handle
    const leftHandle = document.createElement('button');
    leftHandle.classList.add('left-handle', 'handle');
    const leftArrow = document.createElement('div');
    leftArrow.classList.add('arrow');
    leftArrow.innerHTML = '&#8249;';
    leftHandle.appendChild(leftArrow);

    // category container
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category', category.code);

    // right-handle
    const rightHandle = document.createElement('button');
    rightHandle.classList.add('right-handle', 'handle');
    const rightArrow = document.createElement('div');
    rightArrow.classList.add('arrow');
    rightArrow.innerHTML = '&#8250;';
    rightHandle.appendChild(rightArrow);
    
    category.videos.forEach(video => {
      // thumbnail container
      const videoContainer = document.createElement('div');
      videoContainer.classList.add('thumbnail-container');

      // thumbnail
      const content = document.createElement('img');
      content.classList.add('thumbnail');
      content.src = video.thumbnail;
      content.alt = video.code;

      // description container
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('thumbnail-desc');

      // title & info
      const title = document.createElement('h4');
      title.innerText = video.title;

      // append to info container
      infoContainer.appendChild(title);

      const mainContainer = document.createElement('div');
      mainContainer.classList.add('desc-container');
      const descriptions = video?.description?.split(',');
      
      descriptions ? descriptions.forEach(description => {
        const descContainer = document.createElement('p');
        descContainer.classList.add('description')
        descContainer.innerText = description.trim();
        mainContainer.appendChild(descContainer);
      }) : null;

      infoContainer.appendChild(mainContainer);

      // append to video container
      videoContainer.appendChild(content);
      videoContainer.appendChild(infoContainer);

      // append to category container
      categoryContainer.appendChild(videoContainer);
    })

    // append to carousel
    carousel.appendChild(leftHandle);
    carousel.appendChild(categoryContainer);
    carousel.appendChild(rightHandle);

    // append to main container
    mainContainer.appendChild(title);
    mainContainer.appendChild(carousel);

    // append to portfolio container
    const portfolioContainer = document.querySelector('.portfolio-container');
    portfolioContainer.appendChild(mainContainer);
})

// click events (handles and thumbnails)
document.addEventListener("click", e => {
    let handle;
    let video;

    if (e.target.matches('.thumbnail')) video = e.target;
    else video = e.target.closest('.thumbnail');

    if (video != null) {
        onVideoClick(video);
    }

    if (e.target.matches('.handle')) handle = e.target;
    else handle = e.target.closest('.handle');

    if (handle != null) {
        onHandleClick(handle);
    }
})

// handle logic
function onHandleClick(handle){
    const root = document.querySelector(':root');
    const container = handle.closest('.category-container').querySelector('.category');
    const sliderIndex = parseInt(getComputedStyle(container).getPropertyValue('--slider-index'));
    const itemsPerRow = parseInt(getComputedStyle(root).getPropertyValue('--items-per-row'));
    const itemCount = categories.find(category => category.code === container.classList[1]).videos.length;
    const maxPage = Math.ceil(itemCount / itemsPerRow);
    
    if (handle.classList.contains('left-handle')){
        if (sliderIndex > 0) {
          container.style.setProperty('--slider-index', sliderIndex - 1);
        } else {
          container.style.setProperty('--slider-index', maxPage - 1);
        }
    } else if(handle.classList.contains('right-handle')){
        if (sliderIndex < maxPage - 1) {
          container.style.setProperty('--slider-index', sliderIndex + 1);
        } else {
          container.style.setProperty('--slider-index', 0);
        }
    }
}

// video logic
function onVideoClick(video){
    const content = document.createElement('video-js');
    content.classList.add('thumbnail');

    const options = {
        techOrder: ["youtube"],
        poster: portfolio.find(vid => vid.code === video.alt).thumbnail,
        preload: "auto",
        sources: [{
            type: "video/youtube",
            src: portfolio.find(vid => vid.code === video.alt).link,
            youtube: {
                iv_load_policy: 3,
                controls: 0,
                rel: 0,
                modestbranding: 1
            }
        }],
        controlBar: {
            pictureInPictureToggle: false,
            fullscreenToggle: false,
            remainingTimeDisplay: {
                displayNegative: false
            },
        },
        preferFullWindow: true,
        bigPlayButton: false,
        myBackButton: true,
    };

    const player = videojs(content, options);
    player.seekButtons({
      forward: 5,
      back: 5,
    });

    const controlBar = player.controlBar;
    console.log(controlBar.children())


    // create new control bar back button
    const VjsButton = videojs.getComponent('Button');
    const MyBackButton = videojs.extend(VjsButton, {options_: {
        className: 'custom-block-component',
        },
    });

    videojs.registerComponent('MyBlockComponent', MyBackButton);
    controlBar.addChild('MyBlockComponent');

    // component to block youtube header
    const MyBlockComponent = videojs.extend(VjsButton, {options_: {
      className: 'custom-back-button',
      },
    });

    videojs.registerComponent('CustomBackButton', MyBlockComponent);
    controlBar.addChild('CustomBackButton');

    videojs.getComponent('CustomBackButton').prototype.handleClick = function(){
      player.exitFullscreen();
      player.controls(false);
      player.hasStarted(false);
      content.replaceWith(video);
    }

    // component to block time display
    const MyBlockComponent2 = videojs.extend(VjsButton, {options_: {
      className: 'custom-block-component2',
      },
    });

    videojs.registerComponent('MyBlockComponent2', MyBlockComponent2);
    controlBar.addChild('MyBlockComponent2');

    video.replaceWith(content);

    player.ready(function() {
      if(!this.isFullscreen()) {
        const body = document.querySelector('body');
        // fade out body
        body.classList.add('fade-out');
        // remove fade-out class after 1.5s
        setTimeout(() => {
            body.classList.remove('fade-out');
        }, 1500);
      }

      setTimeout(() => {
        this.requestFullscreen();
        this.controls(true);
      }, 600);

      setTimeout(() => {
        this.play();
      }, 1000);

      player.on('ended', function() {
        if (!this.isFullscreen()) {
          this.controls(false);
          // reset player
          this.hasStarted(false);
        } else {
          this.exitFullscreen();
          this.controls(false);
          // reset player
          this.hasStarted(false);
          content.replaceWith(video);
        }
      });

      player.on('fullscreenchange', () => {
        if(!this.isFullscreen()) {
          this.controls(false);
          // reset player
          setTimeout(() => {
            this.pause()
            this.currentTime(0);
          }, 1000);

          this.hasStarted(false);
          content.replaceWith(video);
        }
      })
    });
}






