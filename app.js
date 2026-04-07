const TODAY = new Date("2026-04-07T12:00:00");

const genres = [
  "All Events",
  "Rock",
  "Hip-Hop",
  "Jazz",
  "Pop",
  "Electronic",
  "R&B",
  "Folk",
  "Metal",
  "Latin",
  "Classical"
];

const venueData = [
  {
    name: "The Beehive",
    neighborhood: "South End",
    address: "541 Tremont St, Boston, MA",
    website: "https://www.beehiveboston.com/calendar",
    description: "Live music every day with dinner sets and weekend brunch music.",
    notes: "Recurring music slot venue."
  },
  {
    name: "Roadrunner",
    neighborhood: "Brighton",
    address: "89 Guest St, Boston, MA",
    website: "https://roadrunnerboston.com/calendar/",
    description: "One of the biggest new concert rooms in Boston.",
    notes: "Major touring acts."
  },
  {
    name: "MGM Music Hall at Fenway",
    neighborhood: "Fenway",
    address: "2 Lansdowne St, Boston, MA",
    website: "https://www.mgmmusichall.com/",
    description: "Large room next to Fenway with big-name touring artists.",
    notes: "Popular major venue."
  },
  {
    name: "House of Blues Boston",
    neighborhood: "Fenway",
    address: "15 Lansdowne St, Boston, MA",
    website: "https://boston.houseofblues.com/",
    description: "National touring room with rock, metal, pop, and more.",
    notes: "Official Live Nation room."
  },
  {
    name: "Paradise Rock Club",
    neighborhood: "Allston",
    address: "967 Commonwealth Ave, Boston, MA",
    website: "https://crossroadspresents.com/pages/paradise-rock-club",
    description: "Classic Boston venue for indie, punk, rock, and alternative shows.",
    notes: "Longtime favorite room."
  },
  {
    name: "Brighton Music Hall",
    neighborhood: "Allston-Brighton",
    address: "158 Brighton Ave, Boston, MA",
    website: "https://crossroadspresents.com/pages/brighton-music-hall",
    description: "Smaller room with indie, alternative, and emerging acts.",
    notes: "Good room for scene discovery."
  },
  {
    name: "Royale",
    neighborhood: "Theatre District",
    address: "279 Tremont St, Boston, MA",
    website: "https://royaleboston.com/events/list/",
    description: "Large room with electronic, dance, and crossover concerts.",
    notes: "Late-night and touring shows."
  },
  {
    name: "City Winery Boston",
    neighborhood: "West End",
    address: "80 Beverly St, Boston, MA",
    website: "https://citywinery.com/pages/events/boston",
    description: "Seated room with varied bookings and full food service.",
    notes: "Good for singer-songwriter and curated shows."
  },
  {
    name: "Berklee Performance Center",
    neighborhood: "Back Bay",
    address: "136 Massachusetts Ave, Boston, MA",
    website: "https://www.berklee.edu/BPC/full-calendar-of-events-at-the-bpc",
    description: "Performance hall with Berklee and guest concerts.",
    notes: "Good for special programs and larger school events."
  },
  {
    name: "Red Room at Cafe 939",
    neighborhood: "Back Bay",
    address: "939 Boylston St, Boston, MA",
    website: "https://college.berklee.edu/events/cafe-939",
    description: "Berklee room with recitals, showcases, and intimate performances.",
    notes: "Smaller listening room."
  },
  {
    name: "Symphony Hall",
    neighborhood: "Back Bay",
    address: "301 Massachusetts Ave, Boston, MA",
    website: "https://www.bso.org/events",
    description: "Home of the Boston Symphony Orchestra.",
    notes: "Major classical room."
  }
];

const businessData = [
  {
    name: "Tasty Bites Bistro",
    subtitle: "Right next to The Paradise Rock Club",
    blurb: "Good food, great shows.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/search?q=Tasty+Bites+Bistro+Boston"
  },
  {
    name: "Seaport Stay Hotel",
    subtitle: "Minutes from Boston’s best music venues",
    blurb: "Stay close to the music.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/search?q=Boston+hotel+near+music+venues"
  },
  {
    name: "Late Night Pizza Co.",
    subtitle: "A quick stop after the show",
    blurb: "Open late around concert hours.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    website: "https://www.google.com/search?q=late+night+pizza+Boston"
  }
];

const eventsData = [
  {
    id: "beehive-0407",
    artist: "Live Jazz Dinner Set",
    venue: "The Beehive",
    date: "2026-04-07",
    doors: "",
    show: "7:30 PM",
    mainAct: "7:30 PM",
    genre: "Jazz",
    age: "",
    venueUrl: "https://www.beehiveboston.com/calendar",
    eventUrl: "https://www.beehiveboston.com/calendar",
    artistUrl: null,
    youtubeQuery: "The Beehive Boston live jazz",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 1,
    notes: "Recurring Beehive live music start time from venue calendar.",
    rsvp: { interested: 28, going: 9 }
  },
  {
    id: "jonathan-butler-0407",
    artist: "Jonathan Butler",
    venue: "City Winery Boston",
    date: "2026-04-07",
    doors: "",
    show: "7:30 PM",
    mainAct: "TBA",
    genre: "R&B",
    age: "",
    venueUrl: "https://citywinery.com/pages/events/boston",
    eventUrl: "https://citywinery.com/pages/events/boston",
    artistUrl: "https://jonathanbutler.com/",
    youtubeQuery: "Jonathan Butler official music",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 2,
    notes: "Venue listing shows the show date. Main act time not separately posted.",
    rsvp: { interested: 19, going: 5 }
  },
  {
    id: "perfect-cadence-0407",
    artist: "A Perfect Cadence: Tribute to New York Voices",
    venue: "Berklee Performance Center",
    date: "2026-04-07",
    doors: "",
    show: "8:00 PM",
    mainAct: "8:00 PM",
    genre: "Jazz",
    age: "",
    venueUrl: "https://www.berklee.edu/BPC/full-calendar-of-events-at-the-bpc",
    eventUrl: "https://www.berklee.edu/BPC/full-calendar-of-events-at-the-bpc",
    artistUrl: "https://www.google.com/search?q=A+Perfect+Cadence+Tribute+to+New+York+Voices",
    youtubeQuery: "New York Voices live",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 3,
    notes: "Berklee calendar show time posted.",
    rsvp: { interested: 14, going: 4 }
  },
  {
    id: "bobby-kang-0408",
    artist: "Bobby Kang",
    venue: "Brighton Music Hall",
    date: "2026-04-08",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://www.google.com/search?q=Bobby+Kang+band",
    youtubeQuery: "Bobby Kang band live",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 4,
    notes: "Calendar listing confirmed. Main act start not separately posted.",
    rsvp: { interested: 8, going: 3 }
  },
  {
    id: "accusefive-0408",
    artist: "Accusefive",
    venue: "Roadrunner",
    date: "2026-04-08",
    doors: "7:00 PM",
    show: "8:00 PM",
    mainAct: "TBA",
    genre: "Pop",
    age: "",
    venueUrl: "https://roadrunnerboston.com/calendar/",
    eventUrl: "https://roadrunnerboston.com/events/detail/",
    artistUrl: "https://www.google.com/search?q=Accusefive+official",
    youtubeQuery: "Accusefive official music",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 5,
    notes: "Official venue page lists doors and show time. Main act start not posted.",
    rsvp: { interested: 21, going: 7 }
  },
  {
    id: "lang-lang-0408",
    artist: "Lang Lang Plays Grieg with BSO",
    venue: "Symphony Hall",
    date: "2026-04-08",
    doors: "",
    show: "7:30 PM",
    mainAct: "7:30 PM",
    genre: "Classical",
    age: "",
    venueUrl: "https://www.bso.org/events",
    eventUrl: "https://www.bso.org/events",
    artistUrl: "https://www.langlangofficial.com/",
    youtubeQuery: "Lang Lang official performance",
    image:
      "https://images.unsplash.com/photo-1503293962593-47247718e6d2?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 6,
    notes: "BSO listing shows concert time.",
    rsvp: { interested: 24, going: 11 }
  },
  {
    id: "nathan-haas-0408",
    artist: "Nathan Haas Senior Recital",
    venue: "Red Room at Cafe 939",
    date: "2026-04-08",
    doors: "",
    show: "1:00 PM",
    mainAct: "1:00 PM",
    genre: "Jazz",
    age: "",
    venueUrl: "https://college.berklee.edu/events/cafe-939",
    eventUrl: "https://college.berklee.edu/events/cafe-939",
    artistUrl: "https://www.google.com/search?q=Nathan+Haas+Berklee",
    youtubeQuery: "Nathan Haas recital",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 7,
    notes: "Cafe 939 listing time posted.",
    rsvp: { interested: 7, going: 2 }
  },
  {
    id: "machine-girl-0408",
    artist: "Machine Girl",
    venue: "Royale",
    date: "2026-04-08",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "",
    venueUrl: "https://royaleboston.com/events/list/",
    eventUrl: "https://royaleboston.com/events/list/",
    artistUrl: "https://www.machinegirl.net/",
    youtubeQuery: "Machine Girl official music",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9f2f2f3?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 8,
    notes: "Venue calendar show time posted. Main act start not separately posted.",
    rsvp: { interested: 35, going: 14 }
  },
  {
    id: "jean-strauss-0409",
    artist: "Jean Strauss Senior Recital",
    venue: "Red Room at Cafe 939",
    date: "2026-04-09",
    doors: "",
    show: "1:00 PM",
    mainAct: "1:00 PM",
    genre: "Jazz",
    age: "",
    venueUrl: "https://college.berklee.edu/events/cafe-939",
    eventUrl: "https://college.berklee.edu/events/cafe-939",
    artistUrl: "https://www.google.com/search?q=Jean+Strauss+Berklee",
    youtubeQuery: "Jean Strauss recital",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 9,
    notes: "Cafe 939 listing time posted.",
    rsvp: { interested: 6, going: 1 }
  },
  {
    id: "two-feet-0409",
    artist: "Two Feet",
    venue: "Royale",
    date: "2026-04-09",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "",
    venueUrl: "https://royaleboston.com/events/list/",
    eventUrl: "https://royaleboston.com/events/list/",
    artistUrl: "https://www.twofeetmusic.com/",
    youtubeQuery: "Two Feet official music",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 10,
    notes: "Venue calendar show time posted. Main act start not separately posted.",
    rsvp: { interested: 17, going: 6 }
  },
  {
    id: "lany-0410",
    artist: "LANY",
    venue: "Roadrunner",
    date: "2026-04-10",
    doors: "7:00 PM",
    show: "8:00 PM",
    mainAct: "TBA",
    genre: "Pop",
    age: "",
    venueUrl: "https://roadrunnerboston.com/calendar/",
    eventUrl: "https://roadrunnerboston.com/events/detail/",
    artistUrl: "https://thisislany.com/",
    youtubeQuery: "LANY official music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 11,
    notes: "Official venue page lists doors and show time. Main act start not posted.",
    rsvp: { interested: 42, going: 19 }
  },
  {
    id: "bridget-everett-0410",
    artist: "Bridget Everett",
    venue: "MGM Music Hall at Fenway",
    date: "2026-04-10",
    doors: "",
    show: "8:00 PM",
    mainAct: "8:00 PM",
    genre: "Pop",
    age: "",
    venueUrl: "https://www.mgmmusichall.com/",
    eventUrl: "https://www.ticketmaster.com/bridget-everett-big-titties-big-dreams-boston-massachusetts-04-10-2026/event/01006374C557F22D",
    artistUrl: "https://www.bridgeteverett.net/",
    youtubeQuery: "Bridget Everett live",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 12,
    notes: "Published event time posted.",
    rsvp: { interested: 20, going: 8 }
  },
  {
    id: "circle-jerks-0410",
    artist: "Circle Jerks & Gorilla Biscuits",
    venue: "Paradise Rock Club",
    date: "2026-04-10",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/paradise-rock-club",
    eventUrl: "https://www.ticketmaster.com/circle-jerks-gorilla-biscuits-boston-massachusetts-04-10-2026/event/01006365EE91F7E8",
    artistUrl: "https://www.google.com/search?q=Circle+Jerks+official",
    youtubeQuery: "Circle Jerks official music",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 13,
    notes: "Published event time posted. Headliner set time not separately posted.",
    rsvp: { interested: 31, going: 13 }
  },
  {
    id: "monkeys-on-a-string-0410",
    artist: "Monkeys on a String",
    venue: "City Winery Boston",
    date: "2026-04-10",
    doors: "",
    show: "7:30 PM",
    mainAct: "TBA",
    genre: "Folk",
    age: "",
    venueUrl: "https://citywinery.com/pages/events/boston",
    eventUrl: "https://citywinery.com/pages/events/boston",
    artistUrl: "https://www.google.com/search?q=Monkeys+on+a+String+band",
    youtubeQuery: "Monkeys on a String band",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 14,
    notes: "City Winery event page time posted.",
    rsvp: { interested: 11, going: 4 }
  },
  {
    id: "martinez-brothers-0410",
    artist: "The Martinez Brothers",
    venue: "Royale",
    date: "2026-04-10",
    doors: "",
    show: "10:00 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "21+",
    venueUrl: "https://royaleboston.com/events/list/",
    eventUrl: "https://royaleboston.com/events/list/",
    artistUrl: "https://www.themartinezbros.com/",
    youtubeQuery: "The Martinez Brothers official music",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 15,
    notes: "Venue calendar show time posted. Main act time not separately posted.",
    rsvp: { interested: 26, going: 10 }
  },
  {
    id: "beehive-0411",
    artist: "Live Dinner Set + Late Night Music",
    venue: "The Beehive",
    date: "2026-04-11",
    doors: "",
    show: "6:30 PM",
    mainAct: "6:30 PM",
    genre: "Jazz",
    age: "",
    venueUrl: "https://www.beehiveboston.com/calendar",
    eventUrl: "https://www.beehiveboston.com/calendar",
    artistUrl: null,
    youtubeQuery: "The Beehive Boston live music",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 16,
    notes: "Recurring Beehive Thu-Fri-Sat music start time from venue calendar.",
    rsvp: { interested: 22, going: 8 }
  },
  {
    id: "niko-moon-0411",
    artist: "Niko Moon",
    venue: "House of Blues Boston",
    date: "2026-04-11",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Pop",
    age: "",
    venueUrl: "https://boston.houseofblues.com/",
    eventUrl: "https://boston.houseofblues.com/",
    artistUrl: "https://www.nikomoon.com/",
    youtubeQuery: "Niko Moon official music",
    image:
      "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 17,
    notes: "Published venue show time posted. Main act start not separately posted.",
    rsvp: { interested: 29, going: 12 }
  },
  {
    id: "hot-stove-cool-music-0411",
    artist: "Hot Stove Cool Music",
    venue: "Paradise Rock Club",
    date: "2026-04-11",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/paradise-rock-club",
    eventUrl: "https://crossroadspresents.com/pages/paradise-rock-club",
    artistUrl: "https://www.google.com/search?q=Hot+Stove+Cool+Music",
    youtubeQuery: "Hot Stove Cool Music",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 18,
    notes: "Published event time posted.",
    rsvp: { interested: 16, going: 6 }
  },
  {
    id: "bush-0412",
    artist: "Bush",
    venue: "MGM Music Hall at Fenway",
    date: "2026-04-12",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://www.mgmmusichall.com/",
    eventUrl: "https://www.ticketmaster.com/",
    artistUrl: "https://www.bushofficial.com/",
    youtubeQuery: "Bush official music",
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 19,
    notes: "Published event time posted. Main act start not separately posted.",
    rsvp: { interested: 38, going: 15 }
  },
  {
    id: "anders-osborne-0413",
    artist: "Anders Osborne with Greg Loftus",
    venue: "City Winery Boston",
    date: "2026-04-13",
    doors: "",
    show: "7:30 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://citywinery.com/pages/events/boston",
    eventUrl: "https://citywinery.com/pages/events/boston",
    artistUrl: "https://www.andersosborne.com/",
    youtubeQuery: "Anders Osborne official music",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 20,
    notes: "Published venue listing time posted.",
    rsvp: { interested: 13, going: 4 }
  },
  {
    id: "bob-moses-cannons-0413",
    artist: "Bob Moses & Cannons",
    venue: "Roadrunner",
    date: "2026-04-13",
    doors: "7:00 PM",
    show: "8:00 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "",
    venueUrl: "https://roadrunnerboston.com/calendar/",
    eventUrl: "https://roadrunnerboston.com/events/detail/",
    artistUrl: "https://www.bobmosesmusic.com/",
    youtubeQuery: "Bob Moses official music",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 21,
    notes: "Official venue page lists doors and show time. Main act start not posted.",
    rsvp: { interested: 34, going: 12 }
  },
  {
    id: "grag-queen-0414",
    artist: "Grag Queen and Bright Light Bright Light",
    venue: "City Winery Boston",
    date: "2026-04-14",
    doors: "",
    show: "7:30 PM",
    mainAct: "TBA",
    genre: "Pop",
    age: "",
    venueUrl: "https://citywinery.com/pages/events/boston",
    eventUrl: "https://citywinery.com/pages/events/boston",
    artistUrl: "https://www.google.com/search?q=Grag+Queen+official",
    youtubeQuery: "Grag Queen official music",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 22,
    notes: "Venue listing confirmed.",
    rsvp: { interested: 15, going: 5 }
  },
  {
    id: "red-pears-0414",
    artist: "The Red Pears / Together PANGEA / The High Curbs",
    venue: "Brighton Music Hall",
    date: "2026-04-14",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://www.google.com/search?q=The+Red+Pears+official",
    youtubeQuery: "The Red Pears official music",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 23,
    notes: "Calendar listing confirmed. Main act start not separately posted.",
    rsvp: { interested: 18, going: 7 }
  },
  {
    id: "helloween-0415",
    artist: "Helloween",
    venue: "House of Blues Boston",
    date: "2026-04-15",
    doors: "",
    show: "6:30 PM",
    mainAct: "TBA",
    genre: "Metal",
    age: "",
    venueUrl: "https://boston.houseofblues.com/",
    eventUrl: "https://boston.houseofblues.com/",
    artistUrl: "https://www.helloween.org/",
    youtubeQuery: "Helloween official music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 24,
    notes: "Published venue show time posted. Main act start not separately posted.",
    rsvp: { interested: 39, going: 17 }
  },
  {
    id: "prince-project-0416",
    artist: "The Prince Project",
    venue: "Berklee Performance Center",
    date: "2026-04-16",
    doors: "",
    show: "8:00 PM",
    mainAct: "8:00 PM",
    genre: "R&B",
    age: "",
    venueUrl: "https://www.berklee.edu/BPC/full-calendar-of-events-at-the-bpc",
    eventUrl: "https://www.berklee.edu/BPC/full-calendar-of-events-at-the-bpc",
    artistUrl: "https://www.google.com/search?q=The+Prince+Project+Berklee",
    youtubeQuery: "Prince live music",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 25,
    notes: "Berklee calendar show time posted.",
    rsvp: { interested: 18, going: 6 }
  },
  {
    id: "health-carpenter-brut-0417",
    artist: "HEALTH x CARPENTER BRUT",
    venue: "House of Blues Boston",
    date: "2026-04-17",
    doors: "",
    show: "6:30 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "",
    venueUrl: "https://boston.houseofblues.com/",
    eventUrl: "https://boston.houseofblues.com/",
    artistUrl: "https://www.youwillloveeachother.com/",
    youtubeQuery: "HEALTH official music",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9f2f2f3?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 26,
    notes: "Published venue show time posted.",
    rsvp: { interested: 30, going: 12 }
  },
  {
    id: "jose-gonzalez-0417",
    artist: "José González",
    venue: "Royale",
    date: "2026-04-17",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Folk",
    age: "",
    venueUrl: "https://royaleboston.com/events/list/",
    eventUrl: "https://royaleboston.com/events/list/",
    artistUrl: "https://www.jose-gonzalez.com/",
    youtubeQuery: "José González official music",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 27,
    notes: "Venue calendar show time posted.",
    rsvp: { interested: 22, going: 7 }
  },
  {
    id: "field-medic-0417",
    artist: "Field Medic and Euphoria Again",
    venue: "Brighton Music Hall",
    date: "2026-04-17",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Folk",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://www.fieldmedicmusic.com/",
    youtubeQuery: "Field Medic official music",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 28,
    notes: "Calendar listing confirmed.",
    rsvp: { interested: 14, going: 4 }
  },
  {
    id: "the-maine-0418",
    artist: "I LOVE YOU BUT... I CHOSE THE MAINE",
    venue: "House of Blues Boston",
    date: "2026-04-18",
    doors: "",
    show: "6:30 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://boston.houseofblues.com/",
    eventUrl: "https://boston.houseofblues.com/",
    artistUrl: "https://www.themaineband.com/",
    youtubeQuery: "The Maine official music",
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 29,
    notes: "Published venue show time posted.",
    rsvp: { interested: 27, going: 11 }
  },
  {
    id: "concrete-boys-0418",
    artist: "Concrete Boys",
    venue: "Paradise Rock Club",
    date: "2026-04-18",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Hip-Hop",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/paradise-rock-club",
    eventUrl: "https://crossroadspresents.com/pages/paradise-rock-club",
    artistUrl: "https://www.google.com/search?q=Concrete+Boys+official",
    youtubeQuery: "Concrete Boys official music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 30,
    notes: "Published event time posted.",
    rsvp: { interested: 23, going: 9 }
  },
  {
    id: "femtanyl-0419",
    artist: "Femtanyl and DJ Carbo",
    venue: "Brighton Music Hall",
    date: "2026-04-19",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Electronic",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://www.google.com/search?q=Femtanyl+official",
    youtubeQuery: "Femtanyl official music",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 31,
    notes: "Calendar listing confirmed.",
    rsvp: { interested: 16, going: 5 }
  },
  {
    id: "antlers-0420",
    artist: "The Antlers / Tōth",
    venue: "Brighton Music Hall",
    date: "2026-04-20",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "Rock",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://antlersmusic.com/",
    youtubeQuery: "The Antlers official music",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 32,
    notes: "Calendar listing confirmed.",
    rsvp: { interested: 12, going: 4 }
  },
  {
    id: "jae-stephens-0421",
    artist: "Jae Stephens",
    venue: "Brighton Music Hall",
    date: "2026-04-21",
    doors: "",
    show: "7:00 PM",
    mainAct: "TBA",
    genre: "R&B",
    age: "",
    venueUrl: "https://crossroadspresents.com/pages/brighton-music-hall",
    eventUrl: "https://www.songkick.com/venues/1167706-brighton-music-hall/calendar",
    artistUrl: "https://www.google.com/search?q=Jae+Stephens+official",
    youtubeQuery: "Jae Stephens official music",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    verified: true,
    postedOrder: 33,
    notes: "Calendar listing confirmed.",
    rsvp: { interested: 10, going: 3 }
  }
];

const state = {
  activeGenre: "All Events",
  search: "",
  dateRange: 14
};

function init() {
  setupMobileMenu();
  setupGlobalGenrePills();
  setupPage();
}

function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  });
}

function setupGlobalGenrePills() {
  const pillsContainer = document.getElementById("genrePills");
  if (!pillsContainer) return;

  pillsContainer.innerHTML = genres
    .map(
      (genre) => `
      <button class="genre-pill ${genre === state.activeGenre ? "active" : ""}" data-genre="${genre}">
        ${genre}
      </button>
    `
    )
    .join("");

  pillsContainer.querySelectorAll(".genre-pill").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeGenre = button.dataset.genre;
      updateGenrePills();
      renderHomeEvents();
    });
  });
}

function updateGenrePills() {
  document.querySelectorAll(".genre-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.genre === state.activeGenre);
  });
}

function setupPage() {
  const page = document.body.dataset.page;

  if (page === "home") {
    setupHomePage();
  }

  if (page === "events") {
    setupEventsPage();
  }

  if (page === "venues") {
    renderVenues();
  }

  if (page === "add-event") {
    setupAddEventForm();
  }
}

function setupHomePage() {
  const form = document.getElementById("heroSearchForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      state.search = document.getElementById("heroSearchInput").value.trim();
      state.dateRange = Number(document.getElementById("heroRangeSelect").value || 14);
      renderHomeEvents();
      window.location.href = "#featuredEventsContainer";
    });
  }

  renderHomeEvents();
  renderBusinesses();
}

function setupEventsPage() {
  const genreSelect = document.getElementById("eventsGenreSelect");
  const searchInput = document.getElementById("eventsSearchInput");
  const dateSelect = document.getElementById("eventsDateSelect");

  genreSelect.innerHTML = genres
    .map((genre) => `<option value="${genre}">${genre}</option>`)
    .join("");

  genreSelect.value = "All Events";

  genreSelect.addEventListener("change", () => {
    state.activeGenre = genreSelect.value;
    renderAllEventsPage();
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value.trim();
    renderAllEventsPage();
  });

  dateSelect.addEventListener("change", () => {
    state.dateRange = dateSelect.value === "all" ? 365 : Number(dateSelect.value);
    renderAllEventsPage();
  });

  state.dateRange = 14;
  renderAllEventsPage();
}

function setupAddEventForm() {
  const form = document.getElementById("addEventForm");
  const note = document.getElementById("submissionNote");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent =
      "Submission received in the mockup. Next step would be moderation plus verified posting.";
    note.style.color = "#1c7a32";
    form.reset();
  });
}

function renderHomeEvents() {
  const container = document.getElementById("featuredEventsContainer");
  if (!container) return;

  const filtered = getFilteredEvents().slice(0, 18);
  container.innerHTML = buildGroupedEventsMarkup(filtered);
  attachRsvpHandlers(container);
}

function renderAllEventsPage() {
  const container = document.getElementById("allEventsContainer");
  if (!container) return;

  const filtered = getFilteredEvents();
  container.innerHTML = buildGroupedEventsMarkup(filtered);
  attachRsvpHandlers(container);
}

function renderBusinesses() {
  const container = document.getElementById("businessCards");
  if (!container) return;

  container.innerHTML = businessData
    .map(
      (business) => `
      <article class="business-card">
        <img src="${business.image}" alt="${business.name}" />
        <div class="business-body">
          <h3>${business.name}</h3>
          <p>${business.subtitle}</p>
          <span class="business-tag">${business.blurb}</span>
          <div>
            <a href="${business.website}" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-small">Visit Website</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderVenues() {
  const grid = document.getElementById("venuesGrid");
  if (!grid) return;

  const eventCounts = venueData.reduce((acc, venue) => {
    acc[venue.name] = eventsData.filter((event) => event.venue === venue.name).length;
    return acc;
  }, {});

  grid.innerHTML = venueData
    .map(
      (venue) => `
      <article class="venue-card">
        <h3>${venue.name}</h3>
        <p>${venue.neighborhood} • ${venue.address}</p>
        <p>${venue.description}</p>
        <div class="venue-meta">
          <span class="small-tag">${eventCounts[venue.name] || 0} events in current range</span>
          <span class="small-tag">${venue.notes}</span>
        </div>
        <a href="${venue.website}" target="_blank" rel="noopener noreferrer" class="inline-link">Venue website</a>
      </article>
    `
    )
    .join("");
}

function getFilteredEvents() {
  return eventsData
    .filter((event) => {
      const eventDate = new Date(`${event.date}T12:00:00`);
      const diffDays = Math.floor((eventDate - TODAY) / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= state.dateRange;
    })
    .filter((event) => {
      if (state.activeGenre === "All Events") return true;
      return event.genre === state.activeGenre;
    })
    .filter((event) => {
      if (!state.search) return true;
      const haystack = `${event.artist} ${event.venue} ${event.genre}`.toLowerCase();
      return haystack.includes(state.search.toLowerCase());
    })
    .sort((a, b) => {
      const dateCompare = new Date(`${a.date}T12:00:00`) - new Date(`${b.date}T12:00:00`);
      if (dateCompare !== 0) return dateCompare;
      return a.postedOrder - b.postedOrder;
    });
}

function buildGroupedEventsMarkup(events) {
  if (!events.length) {
    return `<div class="empty-state">No events match your filters right now.</div>`;
  }

  const grouped = groupBy(events, "date");

  return Object.entries(grouped)
    .map(([date, items]) => {
      return `
        <div class="date-group">
          <div class="date-bar">${formatDateHeading(date)}</div>
          ${items.map(buildEventCardMarkup).join("")}
        </div>
      `;
    })
    .join("");
}

function buildEventCardMarkup(event) {
  const artistUrl = event.artistUrl || buildGoogleSearchUrl(event.artist);
  const musicUrl = buildYouTubeSearchUrl(event.youtubeQuery || `${event.artist} official music`);
  const rsvp = getRsvpState(event.id, event.rsvp);

  return `
    <article class="event-card">
      <img class="event-thumb" src="${event.image}" alt="${event.artist}" />

      <div class="event-info">
        <h3>
          ${event.artist}
          ${event.verified ? '<span class="verified-badge">✔</span>' : ""}
        </h3>

        <div class="event-meta">
          <span>${buildTimeLine(event)}</span>
        </div>

        <div class="event-submeta">
          <span>${event.genre}</span>
          ${event.age ? `<span class="small-tag">${event.age}</span>` : ""}
          ${event.mainAct && event.mainAct !== "TBA" ? `<span class="small-tag">Main act ${event.mainAct}</span>` : ""}
          ${event.mainAct === "TBA" ? `<span class="small-tag">Main act TBA</span>` : ""}
        </div>

        <div class="link-row">
          <a class="inline-link" href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">Tickets</a>
          <a class="inline-link" href="${artistUrl}" target="_blank" rel="noopener noreferrer">Artist</a>
          <a class="inline-link" href="${musicUrl}" target="_blank" rel="noopener noreferrer">Music</a>
          <a class="inline-link" href="${event.venueUrl}" target="_blank" rel="noopener noreferrer">Venue</a>
        </div>

        <div class="rsvp-box">
          <div><strong>${rsvp.interested}</strong> interested • <strong>${rsvp.going}</strong> going</div>
          <div class="muted">RSVP stays anonymous. No names shown.</div>
        </div>
      </div>

      <div class="event-actions">
        <a class="btn btn-red btn-event" href="${event.eventUrl}" target="_blank" rel="noopener noreferrer">View Event</a>
        <div class="rsvp-actions">
          <button type="button" class="rsvp-btn" data-event-id="${event.id}" data-type="interested">
            Interested anonymously
          </button>
          <button type="button" class="rsvp-btn" data-event-id="${event.id}" data-type="going">
            Going anonymously
          </button>
          <button type="button" class="rsvp-btn" data-event-id="${event.id}" data-type="cancel">
            Cancel RSVP
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachRsvpHandlers(container) {
  container.querySelectorAll(".rsvp-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.eventId;
      const type = button.dataset.type;
      updateAnonymousRsvp(eventId, type);

      if (document.body.dataset.page === "events") {
        renderAllEventsPage();
      } else {
        renderHomeEvents();
      }
    });
  });
}

function updateAnonymousRsvp(eventId, action) {
  const key = `bmr-rsvp-${eventId}`;
  const event = eventsData.find((item) => item.id === eventId);
  if (!event) return;

  const current = JSON.parse(localStorage.getItem(key) || '{"status":null}');

  if (current.status === "interested") {
    event.rsvp.interested = Math.max(0, event.rsvp.interested - 1);
  }

  if (current.status === "going") {
    event.rsvp.going = Math.max(0, event.rsvp.going - 1);
  }

  if (action === "interested") {
    event.rsvp.interested += 1;
    localStorage.setItem(key, JSON.stringify({ status: "interested" }));
  } else if (action === "going") {
    event.rsvp.going += 1;
    localStorage.setItem(key, JSON.stringify({ status: "going" }));
  } else {
    localStorage.setItem(key, JSON.stringify({ status: null }));
  }
}

function getRsvpState(eventId, fallback) {
  const stored = JSON.parse(localStorage.getItem(`bmr-rsvp-${eventId}`) || '{"status":null}');
  const event = eventsData.find((item) => item.id === eventId);

  if (!event.__baseRsvpApplied) {
    event.__baseInterested = fallback.interested;
    event.__baseGoing = fallback.going;
    event.__baseRsvpApplied = true;
  }

  return {
    interested: event.rsvp.interested,
    going: event.rsvp.going,
    userStatus: stored.status
  };
}

function buildTimeLine(event) {
  const parts = [];

  if (event.doors) parts.push(`Doors ${event.doors}`);
  if (event.show) parts.push(`Show ${event.show}`);

  const timeString = parts.length ? parts.join(" • ") : event.show || "Time TBA";
  return `${timeString} | ${event.venue}`;
}

function buildGoogleSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function buildYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function formatDateHeading(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}

function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const value = item[key];
    if (!acc[value]) acc[value] = [];
    acc[value].push(item);
    return acc;
  }, {});
}

init();
