module.exports = {
  /**
   * Origin of the conference, for creating absolute URLs.
   */
  origin: 'https://developer.chrome.com',
  /**
   * Path of the site. / if it's top-level.
   */
  path: '/devsummit/',
  /**
   * Name of the conference.
   */
  conferenceName: 'Chrome Dev Summit 2019',
  teaser:
    "Join the Chrome team for our two-day summit to learn about the latest techniques for building for the modern Web, get an early insight into what we're working on, and to share your thoughts on how we can move the platform forward, together.",
  /**
   * Data of the conference venue.
   */
  venue: {
    name: 'Yerba Buena Center for the Arts',
    city: 'San Francisco',
    region: 'CA',
    country: 'US',
    postalCode: '94103',
    streetAddress: '701 Mission St',
    mapsLink: 'https://goo.gl/maps/TBiTuFitnqe1wxPW7',
  },
  /**
   * Conference Twitter account
   */
  twitter: '@ChromiumDev',
  /**
   * The name of the conference
   */
  conferenceName: 'Chrome Dev Summit 2019',
  /**
   * Timezone of the conference, in the form [+-]HHMM.
   * Examples: -0700, +0100, +0530
   */
  timezone: '-0800',
  /**
   * Start of conference in the above timezone, in the format: YYYY/MM/DD HH:mm.
   */
  start: '2019/11/11 09:00',
  /**
   * Start of conference in the above timezone, in the format: YYYY/MM/DD HH:mm.
   */
  end: '2019/11/12 17:00',
  /**
   * Additional schedule items. These are merged with the content in /sessions/.
   */
  extraSchedule: [
    {
      title: 'Intro',
      start: '2019/11/11 09:50',
      end: '2019/11/11 10:05',
    },
    {
      title: 'Break & livestream exclusive lightning talks',
      start: '2019/11/11 11:35',
      end: '2019/11/11 12:15',
      icon: '/schedule/assets/coffee.svg',
    },
    {
      title: 'Lunch & livestream exclusive lightning talks',
      start: '2019/11/11 13:25',
      end: '2019/11/11 14:35',
      icon: '/schedule/assets/food.svg',
    },
    {
      title: 'Break & livestream exclusive lightning talks',
      start: '2019/11/11 15:45',
      end: '2019/11/11 16:15',
      icon: '/schedule/assets/coffee.svg',
    },
    {
      title: 'Intro',
      start: '2019/11/12 09:50',
      end: '2019/11/12 10:00',
    },
    {
      title: 'Break & livestream exclusive lightning talks',
      start: '2019/11/12 11:45',
      end: '2019/11/12 12:15',
      icon: '/schedule/assets/coffee.svg',
    },
    {
      title: 'Lunch & livestream exclusive lightning talks',
      start: '2019/11/12 13:25',
      end: '2019/11/12 14:35',
      icon: '/schedule/assets/food.svg',
    },
    {
      title: 'Break & livestream exclusive lightning talks',
      start: '2019/11/12 15:45',
      end: '2019/11/12 16:15',
      icon: '/schedule/assets/coffee.svg',
    },
  ],
};
