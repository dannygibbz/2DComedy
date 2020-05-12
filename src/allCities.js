/* 
cityState is equal to

"ready" -> We came, we saw, and we wrote. Article is ready to be published
"pending" -> We visited but are still writing the articles
"notVisited" -> Haven't been yet

*/
let USCities = [
  //1. Alabama
  // {
  //   name: "Birmingham, AL",
  //   lat: 33.5206608,
  //   lng: -86.80248999999998,
  //   url: "Birmingham",
  //   cityState: "notVisited"
  // },
  // {
  //   name: "Montgomery, AL",
  //   lat: 32.3668052,
  //   lng: -86.29996890000001,
  //   url: "Montgomery",
  //   cityState: "notVisited"
  // },
  {
    name: "Mobile, AL",
    lat: 30.6954,
    lng: -88.0399,
    url: "Mobile",
    cityState: "ready",
  },

  //2. Alaska
  {
    name: "Anchorage, AK",
    lat: 61.2180556,
    lng: -149.90027780000003,
    url: "Anchorage",
    cityState: "ready",
  },

  //3. Arizona
  {
    name: "Phoenix, AZ",
    lat: 33.4483771,
    lng: -112.07403729999999,
    url: "Phoenix",
    cityState: "ready",
  },
  {
    name: "Tucson, AZ",
    lat: 32.2226066,
    lng: -110.97471080000003,
    url: "Tucson",
    cityState: "ready",
  },

  //4. Arkansas
  // {
  //   name: "Little Rock, AR",
  //   lat: 34.7464809,
  //   lng: -92.28959479999997,
  //   url: "LittleRock",
  //   cityState: "notVisited"
  // },
  {
    name: "Fayetteville, AR",
    lat: 36.0822,
    lng: -94.1719,
    url: "Fayetteville",
    cityState: "ready",
  },

  //5. California
  {
    name: "Los Angeles, CA",
    lat: 34.0522342,
    lng: -118.2436849,
    url: "LosAngeles",
    cityState: "ready",
  },
  {
    name: "San Diego, CA",
    lat: 32.715738,
    lng: -117.16108380000003,
    url: "SanDiego",
    cityState: "ready",
  },
  {
    name: "San Jose, CA",
    lat: 37.3382,
    lng: -121.8863,
    url: "SanJose",
    cityState: "ready",
  },
  // {
  //   name: "Fresno, CA",
  //   lat: 36.7377981,
  //   lng: -119.78712469999999,
  //   url: "Fresno",
  //   cityState: "notVisited",
  // },

  //6. Colorado
  {
    name: "Denver, CO",
    lat: 39.7392358,
    lng: -104.990251,
    url: "Denver",
    cityState: "ready",
  },
  // {
  //   name: "Colorado Springs, CO",
  //   lat: 38.8338816,
  //   lng: -104.8213634,
  //   url: "ColoradoSprings",
  //   cityState: "notVisited",
  // },

  //7. Connecticut
  // {
  //   name: "Bridgeport, CT",
  //   lat: 41.1792258,
  //   lng: -73.18943839999997,
  //   url: "Bridgeport",
  //   cityState: "notVisited"
  // },
  // {
  //   name: "New Haven, CT",
  //   lat: 41.308274,
  //   lng: -72.92788350000001,
  //   url: "NewHaven",
  //   cityState: "notVisited",
  // },
  {
    name: "Fairfield, CT",
    lat: 41.1408,
    lng: -73.2613,
    url: "Fairfield",
    cityState: "ready",
  },

  //8. Delaware
  {
    name: "Wilmington, DE",
    lat: 39.7390721,
    lng: -75.5397878,
    url: "Wilmington",
    cityState: "ready",
  },

  //9. District of Columbia
  {
    name: "Washington, DC",
    lat: 38.9071923,
    lng: -77.03687070000001,
    url: "WashingtonDC",
    cityState: "ready",
  },

  //10. Florida
  // {
  //   name: "Jacksonville, FL",
  //   lat: 30.3321838,
  //   lng: -81.65565099999998,
  //   url: "Jacksonville",
  //   cityState: "notVisited"
  // },
  {
    name: "Miami, FL",
    lat: 25.7616798,
    lng: -80.19179020000001,
    url: "Miami",
    cityState: "ready",
  },
  // {
  //   name: "Tampa, FL",
  //   lat: 27.950575,
  //   lng: -82.45717760000002,
  //   url: "Tampa",
  //   cityState: "notVisited"
  // },

  {
    name: "Orlando, FL",
    lat: 28.5383,
    lng: -81.3792,
    url: "Orlando",
    cityState: "ready",
  },

  //11. Georgia
  {
    name: "Atlanta, GA",
    lat: 33.7489954,
    lng: -84.3879824,
    url: "Atlanta",
    cityState: "ready",
  },
  // {
  //   name: "Augusta, GA",
  //   lat: 33.4734978,
  //   lng: -82.01051480000001,
  //   url: "Augusta",
  //   cityState: "notVisited"
  // },
  {
    name: "Savannah, GA",
    lat: 32.0809,
    lng: -81.0912,
    url: "Savannah",
    cityState: "ready",
  },

  //12. Hawaii
  {
    name: "Honolulu, HI",
    lat: 21.3069444,
    lng: -157.85833330000003,
    url: "Honolulu",
    cityState: "ready",
  },

  //13. Idaho
  {
    name: "Boise, ID",
    lat: 43.6150186,
    lng: -116.20231369999999,
    url: "Boise",
    cityState: "ready",
  },

  //14. Illinois
  {
    name: "Chicago, IL",
    lat: 41.8781136,
    lng: -87.62979819999998,
    url: "Chicago",
    cityState: "ready",
  },
  // {
  //   name: "Aurora, IL",
  //   lat: 41.7605849,
  //   lng: -88.32007150000004,
  //   url: "Aurora",
  //   cityState: "notVisited",
  // },

  //15. Indiana
  {
    name: "Indianapolis, IN",
    lat: 39.768403,
    lng: -86.15806800000001,
    url: "Indianapolis",
    cityState: "ready",
  },
  // {
  //   name: "Fort Wayne, IN",
  //   lat: 41.079273,
  //   lng: -85.13935129999999,
  //   url: "FortWayne",
  //   cityState: "notVisited",
  // },

  //16. Iowa
  {
    name: "Des Moine, IA",
    lat: 41.6005448,
    lng: -93.60910639999997,
    url: "DesMoines",
    cityState: "ready",
  },
  // {
  //   name: "Cedar Rapids, IA",
  //   lat: 41.9778795,
  //   lng: -91.66562320000003,
  //   url: "CedarRapids",
  //   cityState: "notVisited",
  // },

  //17. Kansas
  // {
  //   name: "Wichita, KS",
  //   lat: 37.68717609999999,
  //   lng: -97.33005300000002,
  //   url: "Wichita",
  //   cityState: "notVisited",
  // },
  {
    name: "Overland Park, KS",
    lat: 38.9822282,
    lng: -95.0707917,
    url: "OverlandPark",
    cityState: "ready",
  },

  //18. Kentucky
  {
    name: "Louisville, KY",
    lat: 38.2526647,
    lng: -85.75845570000001,
    url: "Louisville",
    cityState: "ready",
  },
  // {
  //   name: "Lexington, KY",
  //   lat: 38.0405837,
  //   lng: -84.50371640000003,
  //   url: "Lexington",
  //   cityState: "notVisited",
  // },

  //19. Louisiana
  {
    name: "New Orleans, LA",
    lat: 29.95106579999999,
    lng: -90.0715323,
    url: "NewOrleans",
    cityState: "ready",
  },
  // {
  //   name: "Baton Rouge, LA",
  //   lat: 30.4514677,
  //   lng: -91.1871466,
  //   url: "BatonRouge",
  //   cityState: "notVisited"
  // },

  //20. Maine
  {
    name: "Portland, ME",
    lat: 43.6590993,
    lng: -70.25681889999998,
    url: "PortlandME",
    cityState: "ready",
  },

  //21. Maryland
  {
    name: "Baltimore, MD",
    lat: 39.2903848,
    lng: -76.61218930000001,
    url: "Baltimore",
    cityState: "ready",
  },

  //22. Massachusetts
  {
    name: "Boston, MA",
    lat: 42.3600825,
    lng: -71.05888010000001,
    url: "Boston",
    cityState: "ready",
  },
  // {
  //   name: "Worcester, MA",
  //   lat: 42.2625932,
  //   lng: -71.8022934,
  //   url: "Worcester",
  //   cityState: "notVisited"
  // },

  //23. Michigan
  {
    name: "Detroit, MI",
    lat: 42.331427,
    lng: -83.0457538,
    url: "Detroit",
    cityState: "ready",
  },
  // {
  //   name: "Grand Rapids, MI",
  //   lat: 42.9633599,
  //   lng: -85.66808630000003,
  //   url: "GrandRapids",
  //   cityState: "notVisited",
  // },

  //24. Minnesota
  {
    name: "Minneapolis, MN",
    lat: 44.977753,
    lng: -93.26501080000003,
    url: "Minneapolis",
    cityState: "ready",
  },
  // {
  //   name: "Saint Paul, MN",
  //   lat: 44.9537029,
  //   lng: -93.08995779999998,
  //   url: "SaintPaul",
  //   cityState: "notVisited",
  // },

  //25. Missippippi
  // {
  //   name: "Jackson, MS",
  //   lat: 32.2987573,
  //   lng: -90.18481029999998,
  //   url: "Jackson",
  //   cityState: "pending",
  // },
  {
    name: "Hattiesburg, MS",
    lat: 31.3271,
    lng: -89.2903,
    url: "Hattiesburg",
    cityState: "ready",
  },
  // {
  //   name: "Oxford, MS",
  //   lat: 32.2987573,
  //   lng: -90.18481029999998,
  //   url: "Oxford",
  //   cityState: "notVisited"
  // },

  //26. Missouri
  {
    name: "Kansas City, MO",
    lat: 39.0997265,
    lng: -94.57856670000001,
    url: "KansasCity",
    cityState: "ready",
  },
  // {
  //   name: "St. Louis, MO",
  //   lat: 38.6270025,
  //   lng: -90.1994042,
  //   url: "StLouis",
  //   cityState: "pending",
  // },

  //27. Montana
  // {
  //   name: "Billings, MT",
  //   lat: 45.7832856,
  //   lng: -108.5006904,
  //   url: "Billings",
  //   cityState: "notVisited",
  // },
  {
    name: "Missoula, MT",
    lat: 46.8721,
    lng: -113.994,
    url: "Missoula",
    cityState: "ready",
  },

  //28. Nebraska
  {
    name: "Omaha, NE",
    lat: 41.2565369,
    lng: -95.93450339999998,
    url: "Omaha",
    cityState: "ready",
  },
  // {
  //   name: "Lincoln, NE",
  //   lat: 40.813616,
  //   lng: -96.70259550000003,
  //   url: "Lincoln",
  //   cityState: "notVisited",
  // },

  //29. Nevada
  {
    name: "Las Vegas, NV",
    lat: 36.1699412,
    lng: -115.13982959999998,
    url: "LasVegas",
    cityState: "ready",
  },
  // {
  //   name: "Henderson, NV",
  //   lat: 36.0395247,
  //   lng: -114.9817213,
  //   url: "Henderson",
  //   cityState: "notVisited",
  // },
  // {
  //   name: "Reno, NV",
  //   lat: 39.5296329,
  //   lng: -119.8138027,
  //   url: "Reno",
  //   cityState: "notVisited",
  // },

  //30. New Hampshire
  // {
  //   name: "Manchester, NH",
  //   lat: 42.9956397,
  //   lng: -71.45478909999997,
  //   url: "Manchester",
  //   cityState: "notVisited"
  // },
  {
    name: "Concord, NH",
    lat: 43.2081,
    lng: -71.5376,
    url: "Concord",
    cityState: "ready",
  },

  //31. New Jersey
  // {
  //   name: "New Brunswick, NJ",
  //   lat: 40.4862,
  //   lng: -74.4518,
  //   url: "NewBrunswick",
  //   cityState: "notVisited",
  // },
  {
    name: "Jersey City, NJ",
    lat: 40.7178,
    lng: -74.0431,
    url: "JerseyCity",
    cityState: "ready",
  },
  // {
  //   name: "Jersey City, NJ",
  //   lat: 40.72815749999999,
  //   lng: -74.07764170000002,
  //   url: "JerseyCity",
  //   cityState: "notVisited"
  // },

  //32. New Mexico
  {
    name: "Albuquerque, NM",
    lat: 35.0843859,
    lng: -106.65042199999999,
    url: "Albuquerque",
    cityState: "ready",
  },

  //33. New York
  {
    name: "New York, NY",
    lat: 40.7127753,
    lng: -74.0059728,
    url: "NewYork",
    cityState: "ready",
  },
  // {
  //   name: "Buffalo, NY",
  //   lat: 42.88644679999999,
  //   lng: -78.8783689,
  //   url: "Buffalo",
  //   cityState: "notVisited",
  // },

  //34. North Carolina
  // {
  //   name: "Charlotte, NC",
  //   lat: 35.2270869,
  //   lng: -80.84312669999997,
  //   url: "Charlotte",
  //   cityState: "notVisited"
  // },
  {
    name: "Raleigh, NC",
    lat: 35.7795897,
    lng: -78.63817870000003,
    url: "Raleigh",
    cityState: "ready",
  },
  {
    name: "Asheville, NC",
    lat: 35.5951,
    lng: -82.5515,
    url: "Asheville",
    cityState: "ready",
  },
  {
    name: "Chapel Hill, NC",
    lat: 35.9132,
    lng: -79.0558,
    url: "ChapelHill",
    cityState: "ready",
  },

  //35. North Dakota
  {
    name: "Fargo, ND",
    lat: 46.8771863,
    lng: -96.78980339999998,
    url: "Fargo",
    cityState: "ready",
  },

  //36. Ohio
  // {
  //   name: "Columbus, OH",
  //   lat: 39.9611755,
  //   lng: -82.99879420000002,
  //   url: "Columbus",
  //   cityState: "notVisited",
  // },
  // {
  //   name: "Youngstown, OH",
  //   lat: 41.0998,
  //   lng: -80.6495,
  //   url: "Youngstown",
  //   cityState: "notVisited",
  // },
  {
    name: "Cincinnati, OH",
    lat: 39.1031,
    lng: -84.512,
    url: "Cincinnati",
    cityState: "ready",
  },
  // {
  //   name: "Cleveland, OH",
  //   lat: 41.49932,
  //   lng: -81.69436050000002,
  //   url: "Cleveland",
  //   cityState: "notVisited",
  // },

  //37. Oklahoma
  // {
  //   name: "Oklahoma City, OK",
  //   lat: 35.4675602,
  //   lng: -97.51642759999999,
  //   url: "OklahomaCity",
  //   cityState: "notVisited"
  // },
  {
    name: "Tulsa, OK",
    lat: 36.154,
    lng: -95.9928,
    url: "Tulsa",
    cityState: "ready",
  },
  //38. Oregon
  {
    name: "Portland, OR",
    lat: 45.5122308,
    lng: -122.65871850000002,
    url: "PortlandOr",
    cityState: "ready",
  },
  // {
  //   name: "Salem, OR",
  //   lat: 44.9428975,
  //   lng: -123.03509630000002,
  //   url: "Salem",
  //   cityState: "notVisited",
  // },

  //39. Pennsylvania
  {
    name: "Philadelphia, PA",
    lat: 39.9525839,
    lng: -75.16522150000003,
    url: "Philadelphia",
    cityState: "pending",
  },
  {
    name: "Pittsburgh, PA",
    lat: 40.44062479999999,
    lng: -79.99588640000002,
    url: "Pittsburgh",
    cityState: "ready",
  },

  //40. Rhode Island
  {
    name: "Providence, RI",
    lat: 41.8239891,
    lng: -71.41283429999999,
    url: "Providence",
    cityState: "ready",
  },

  //41. South Carolina
  // {
  //   name: "Charleston, SC",
  //   lat: 32.7764749,
  //   lng: -79.93105120000001,
  //   url: "Charleston",
  //   cityState: "notVisited",
  // },
  {
    name: "Greenville, SC",
    lat: 34.8526,
    lng: -82.394,
    url: "Greenville",
    cityState: "ready",
  },
  // {
  //   name: "Columbia, SC",
  //   lat: 34.0007104,
  //   lng: -81.03481440000002,
  //   url: "Columbia",
  //   cityState: "notVisited",
  // },

  //42. South Dakota
  {
    name: "Sioux Falls, SD",
    lat: 43.5445959,
    lng: -96.7311034,
    url: "SiouxFalls",
    cityState: "ready",
  },

  //43. Tennessee
  {
    name: "Nashville, TN",
    lat: 36.1626638,
    lng: -86.78160159999999,
    url: "Nashville",
    cityState: "ready",
  },
  {
    name: "Memphis, TN",
    lat: 35.1495343,
    lng: -90.0489801,
    url: "Memphis",
    cityState: "ready",
  },

  //44. Texas
  // {
  //   name: "Houston, TX",
  //   lat: 29.7604267,
  //   lng: -95.3698028,
  //   url: "Houston",
  //   cityState: "notVisited",
  // },
  {
    name: "Dallas, TX",
    lat: 32.8366642,
    lng: -96.99698789999998,
    url: "Dallas",
    cityState: "ready",
  },
  {
    name: "Austin, TX",
    lat: 30.267153,
    lng: -97.74306079999997,
    url: "Austin",
    cityState: "ready",
  },
  // {
  //   name: "Plano, TX",
  //   lat: 33.0198431,
  //   lng: -96.69888559999998,
  //   url: "Plano",
  //   cityState: "notVisited"
  // },
  // {
  //   name: "Fort Worth, TX",
  //   lat: 32.7555,
  //   lng: -97.3308,
  //   url: "Plano",
  //   cityState: "pending",
  // },

  //45. Utah
  {
    name: "Salt Lake City, UT",
    lat: 40.7607793,
    lng: -111.89104739999999,
    url: "SaltLakeCity",
    cityState: "ready",
  },
  // {
  //   name: "West Valley City, UT",
  //   lat: 40.6916132,
  //   lng: -112.00105009999999,
  //   url: "WestValleyCity",
  //   cityState: "notVisited",
  // },

  //46. Vermont
  {
    name: "Burlington, VT",
    lat: 44.4758825,
    lng: -73.21207199999998,
    url: "Burlington",
    cityState: "ready",
  },

  //47. Virginia
  {
    name: "Virginia Beach, VA",
    lat: 36.8529263,
    lng: -75.97798499999999,
    url: "VirginiaBeach",
    cityState: "ready",
  },
  // {
  //   name: "Norfolk, VA",
  //   lat: 36.8507689,
  //   lng: -76.2858726,
  //   url: "Norfolk",
  //   cityState: "notVisited"
  // },
  {
    name: "Richmond, VA",
    lat: 37.5407246,
    lng: -77.4360481,
    url: "Richmond",
    cityState: "ready",
  },

  //48. Washington
  {
    name: "Seattle, WA",
    lat: 47.6062095,
    lng: -122.3320708,
    url: "Seattle",
    cityState: "ready",
  },
  // {
  //   name: "Spokane, WA",
  //   lat: 47.6587802,
  //   lng: -117.42604649999998,
  //   url: "Spokane",
  //   cityState: "notVisited",
  // },

  //49. West Virginia
  // {
  //   name: "Charleston, WV",
  //   lat: 38.3498195,
  //   lng: -81.6326234,
  //   url: "CharlestonWV",
  //   cityState: "notVisited",
  // },
  {
    name: "Huntington, WV",
    lat: 38.4192,
    lng: -82.4452,
    url: "Huntington",
    cityState: "ready",
  },

  //50. Wisconsin
  // {
  //   name: "Milwaukee, WI",
  //   lat: 43.0389025,
  //   lng: -87.90647360000003,
  //   url: "Milwaukee",
  //   cityState: "notVisited",
  // },
  {
    name: "Madison, WI",
    lat: 43.0730517,
    lng: -89.40123019999999,
    url: "Madison",
    cityState: "ready",
  },

  //51. Wyoming
  // {
  //   name: "Cheyenne, WY",
  //   lat: 41.1399814,
  //   lng: -104.82024619999999,
  //   url: "Cheyenne",
  //   cityState: "notVisited",
  // },
  {
    name: "Casper, WY",
    lat: 42.8501,
    lng: -106.3252,
    url: "Casper",
    cityState: "ready",
  },
  {
    name: "Gillette, WY",
    lat: 44.2911,
    lng: -105.5022,
    url: "Gillette",
    cityState: "ready",
  },
  {
    name: "Medellin, Colombia",
    lat: 6.2442,
    lng: -75.5812,
    url: "Medellin",
    cityState: "ready",
  },
]

let CanadaCities = [
  { name: "Toronto,Ontario", lat: 43.653226, lng: -79.38318429999998 },
  { name: "Montreal,Quebec", lat: 45.5016889, lng: -73.56725599999999 },
  { name: "Vancouver,British Columbia", lat: 49.2827291, lng: -123.12073750000002 },
  { name: "Calgary,Alberta", lat: 51.0486151, lng: -114.0708459 },
  { name: "Ottowa,Ontario", lat: 45.4215296, lng: -75.69719309999999 },
  { name: "Edmonton,Alberta", lat: 53.544389, lng: -113.49092669999999 },
  { name: "Quebec City,Quebec", lat: 46.8138783, lng: -71.2079809 },
  { name: "Winnepeg,Manitoba", lat: 49.895136, lng: -97.13837439999998 },
  { name: "Hamilton,Ontario", lat: 43.2557206, lng: -79.87110239999998 },
  { name: "Waterloo,Ontario", lat: 43.4642578, lng: -80.5204096 },
  { name: "London,Ontario", lat: 42.9849233, lng: -81.2452768 },
  { name: "Niagara Falls,Ontario", lat: 43.0895577, lng: -79.08494359999997 },
  { name: "Halifax,Nova Scotia", lat: 44.64876350000001, lng: -63.5752387 },
  { name: "Oshawa,Ontario", lat: 43.8970929, lng: -78.86579119999999 },
  { name: "Victoria,British Columbia", lat: 48.4284207, lng: -123.36564440000001 },
]

let sortOrder = [
  0,
  70,
  43,
  71,
  4,
  41,
  31,
  32,
  72,
  74,
  73,
  75,
  61,
  27,
  28,
  42,
  45,
  46,
  87,
  9,
  10,
  53,
  3,
  2,
  48,
  47,
  6,
  5,
  8,
  7,
  49,
  63,
  62,
  82,
  83,
  20,
  77,
  76,
  44,
  58,
  39,
  40,
  69,
  25,
  26,
  86,
  85,
  22,
  21,
  38,
  24,
  23,
  29,
  30,
  84,
  59,
  37,
  60,
  65,
  55,
  78,
  33,
  50,
  35,
  36,
  66,
  12,
  11,
  54,
  52,
  51,
  64,
  13,
  34,
  14,
  81,
  79,
  80,
  57,
  56,
  68,
  67,
  16,
  17,
  15,
  19,
  18,
  1,
]

export { USCities, CanadaCities, sortOrder }
