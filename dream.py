import numpy as np
import pandas as pd
from tsp_solver.greedy import solve_tsp

def distance_on_earth(lat1, long1, lat2, long2, radius=6378.388):
  """
  Compute distance between two points on earth specified by latitude/longitude.
  The earth is assumed to be a perfect sphere of given radius. The radius defaults
  to 6378.388 kilometers. To convert to miles, divide by 1.60934
  
  Reference
  ---------
  Adopted from John D. Cook's blog post: 
  http://www.johndcook.com/blog/python_longitude_latitude/
  """
  # Convert latitude and longitude to spherical coordinates in radians.
  degrees_to_radians = np.pi / 180.0

  # phi = 90 - latitude
  phi1 = (90.0 - lat1) * degrees_to_radians
  phi2 = (90.0 - lat2) * degrees_to_radians

  # theta = longitude
  theta1 = long1 * degrees_to_radians
  theta2 = long2 * degrees_to_radians
       
  # Compute spherical distance from spherical coordinates.     
  cos = (np.sin(phi1) * np.sin(phi2)* np.cos(theta1 - theta2) + 
         np.cos(phi1) * np.cos(phi2))
  arc = np.arccos(cos)
  rv = arc * radius
  return rv

USCities = [
  #1. Alabama
  { "name": "Birmingham,AL", "lat": 33.5206608, "lng": -86.80248999999998 },
  { "name": "Montgomery,AL", "lat": 32.3668052, "lng": -86.29996890000001 },

  #2. Alaska
  { "name": "Anchorage,AK", "lat": 61.2180556, "lng": -149.90027780000003 },

  #3. Arizona
  { "name": "Phoenix,AZ", "lat": 33.4483771, "lng": -112.07403729999999 },
  { "name": "Tucson,AZ", "lat": 32.2226066, "lng": -110.97471080000003 },

  #4. Arkansas
  { "name": "Little Rock,AR", "lat": 34.7464809, "lng": -92.28959479999997 },

  #5. California
  { "name": "Los Angeles,CA", "lat": 34.0522342, "lng": -118.2436849 },
  { "name": "San Diego,CA", "lat": 32.715738, "lng": -117.16108380000003 },
  { "name": "San Francisco,CA", "lat": 37.7749295, "lng": -122.41941550000001 },
  { "name": "Fresno,CA", "lat": 36.7377981, "lng": -119.78712469999999 },

  #6. Colorado
  { "name": "Denver,CO", "lat": 39.7392358, "lng": -104.990251 },
  { "name": "Colorado Springs,CO", "lat": 38.8338816, "lng": -104.8213634 },

  #7. Connecticut
  { "name": "Bridgeport,CT", "lat": 41.1792258, "lng": -73.18943839999997 },
  { "name": "New Haven,CT", "lat": 41.308274, "lng": -72.92788350000001 },

  #8. Delaware
  { "name": "Wilmington,DE", "lat": 39.7390721, "lng": -75.5397878 },

  #9. District of Columbia
  { "name": "Washington,DC", "lat": 38.9071923, "lng": -77.03687070000001 },

  #10. Florida
  { "name": "Jacksonville,FL", "lat": 30.3321838, "lng": -81.65565099999998 },
  { "name": "Miami,FL", "lat": 25.7616798, "lng": -80.19179020000001 },
  { "name": "Tampa,FL", "lat": 27.950575, "lng": -82.45717760000002 },

  #11. Georgia
  { "name": "Atlanta,GA", "lat": 33.7489954, "lng": -84.3879824 },
  { "name": "Augusta,GA", "lat": 33.4734978, "lng": -82.01051480000001 },

  #12. Hawaii
  { "name": "Honolulu,HI", "lat": 21.3069444, "lng": -157.85833330000003 },

  #13. Idaho
  { "name": "Boise,ID", "lat": 43.6150186, "lng": -116.20231369999999 },

  #14. Illinois
  { "name": "Chicago,IL", "lat": 41.8781136, "lng": -87.62979819999998 },
  { "name": "Aurora,IL", "lat": 41.7605849, "lng": -88.32007150000004 },

  #15. Indiana
  { "name": "Indianapolis,IN", "lat": 39.768403, "lng": -86.15806800000001 },
  { "name": "Fort Wayne,IN", "lat": 41.079273, "lng": -85.13935129999999 },

  #16. Iowa
  { "name": "Des Moine,IA", "lat": 41.6005448, "lng": -93.60910639999997 },
  { "name": "Cedar Rapids,IA", "lat": 41.9778795, "lng": -91.66562320000003 },

  #17. Kansas
  { "name": "Wichita,KS", "lat": 37.68717609999999, "lng": -97.33005300000002 },
  { "name": "Overland Park,KS", "lat": 38.9822282, "lng": -94.6707917 },

  #18. Kentucky
  { "name": "Louisville,KY", "lat": 38.2526647, "lng": -85.75845570000001 },
  { "name": "Lexington,KY", "lat": 38.0405837, "lng": -84.50371640000003 },

  #19. Louisiana
  { "name": "New Orleans,LA", "lat": 29.95106579999999, "lng": -90.0715323 },
  { "name": "Baton Rouge,LA", "lat": 30.4514677, "lng": -91.1871466 },

  #20. Maine
  { "name": "Portland,ME", "lat": 43.6590993, "lng": -70.25681889999998 },

  #21. Maryland
  { "name": "Baltimore,MD", "lat": 39.2903848, "lng": -76.61218930000001 },

  #22. Massachusetts
  { "name": "Boston,MA", "lat": 42.3600825, "lng": -71.05888010000001 },
  { "name": "Worcester,MA", "lat": 42.2625932, "lng": -71.8022934 },

  #23. Michigan
  { "name": "Detroit,MI", "lat": 42.331427, "lng": -83.0457538 },
  { "name": "Grand Rapids,MI", "lat": 42.9633599, "lng": -85.66808630000003 },

  #24. Minnesota
  { "name": "Minneapolis,MN", "lat": 44.977753, "lng": -93.26501080000003 },
  { "name": "Saint Paul,MN", "lat": 44.9537029, "lng": -93.08995779999998 },

  #25. Missippippi
  { "name": "Jackson,MS", "lat": 32.2987573, "lng": -90.18481029999998 },

  #26. Missouri
  { "name": "Kansas City,MO", "lat": 39.0997265, "lng": -94.57856670000001 },
  { "name": "St. Louis,MO", "lat": 38.6270025, "lng": -90.1994042 },

  #27. Montana
  { "name": "Billings,MT", "lat": 45.7832856, "lng": -108.5006904 },

  #28. Nebraska
  { "name": "Omaha,NE", "lat": 41.2565369, "lng": -95.93450339999998 },
  { "name": "Lincoln,NE", "lat": 40.813616, "lng": -96.70259550000003 },

  #29. Nevada
  { "name": "Las Vegas,NV", "lat": 36.1699412, "lng": -115.13982959999998 },
  { "name": "Henderson,NV", "lat": 36.0395247, "lng": -114.9817213 },
  { "name": "Reno,NV", "lat": 39.5296329, "lng": -119.8138027 },

  #30. New Hampshire
  { "name": "Manchester,NH", "lat": 42.9956397, "lng": -71.45478909999997 },

  #31. New Jersey
  { "name": "Newark,NJ", "lat": 40.735657, "lng": -74.1723667 },
  { "name": "Jersey City,NJ", "lat": 40.72815749999999, "lng": -74.07764170000002 },

  #32. New Mexico
  { "name": "Albuquerque,NM", "lat": 35.0843859, "lng": -106.65042199999999 },

  #33. New York
  { "name": "New York,NY", "lat": 40.7127753, "lng": -74.0059728 },
  { "name": "Buffalo,NY", "lat": 42.88644679999999, "lng": -78.8783689 },

  #34. North Carolina
  { "name": "Charlotte,NC", "lat": 35.2270869, "lng": -80.84312669999997 },
  { "name": "Raleigh,NC", "lat": 35.7795897, "lng": -78.63817870000003 },

  #35. North Dakota
  { "name": "Fargo,ND", "lat": 46.8771863, "lng": -96.78980339999998 },

  #36. Ohio
  { "name": "Columbus,OH", "lat": 39.9611755, "lng": -82.99879420000002 },
  { "name": "Cleveland,OH", "lat": 41.49932, "lng": -81.69436050000002 },

  #37. Oklahoma
  { "name": "Oklahoma City,OK", "lat": 35.4675602, "lng": -97.51642759999999 },

  #38. Oregon
  { "name": "Portland,OR", "lat": 45.5122308, "lng": -122.65871850000002 },
  { "name": "Salem,OR", "lat": 44.9428975, "lng": -123.03509630000002 },

  #39. Pennsylvania
  { "name": "Philadelphia,PA", "lat": 39.9525839, "lng": -75.16522150000003 },
  { "name": "Pittsburgh,PA", "lat": 40.44062479999999, "lng": -79.99588640000002 },

  #40. Rhode Island
  { "name": "Providence,RI", "lat": 41.8239891, "lng": -71.41283429999999 },

  #41. South Carolina
  { "name": "Charleston,SC", "lat": 32.7764749, "lng": -79.93105120000001 },
  { "name": "Columbia,SC", "lat": 34.0007104, "lng": -81.03481440000002 },

  #42. South Dakota
  { "name": "Sioux Falls,SD", "lat": 43.5445959, "lng": -96.7311034 },

  #43. Tennessee
  { "name": "Nashville,TN", "lat": 36.1626638, "lng": -86.78160159999999 },
  { "name": "Memphis,TN", "lat": 35.1495343, "lng": -90.0489801 },

  #44. Texas
  { "name": "Houston,TX", "lat": 29.7604267, "lng": -95.3698028 },
  { "name": "Dallas,TX", "lat": 32.7766642, "lng": -96.79698789999998 },
  { "name": "Austin,TX", "lat": 30.267153, "lng": -97.74306079999997 },
  { "name": "Plano,TX", "lat": 33.0198431, "lng": -96.69888559999998 },

  #45. Utah
  { "name": "Salt Lake City,UT", "lat": 40.7607793, "lng": -111.89104739999999 },
  { "name": "West Valley City,UT", "lat": 40.6916132, "lng": -112.00105009999999 },

  #46. Vermont
  { "name": "Burlington,VT", "lat": 44.4758825, "lng": -73.21207199999998 },

  #47. Virginia
  { "name": "Virginia Beach,VA", "lat": 36.8529263, "lng": -75.97798499999999 },
  { "name": "Norfolk,VA", "lat": 36.8507689, "lng": -76.2858726 },
  { "name": "Richmond,VA", "lat": 37.5407246, "lng": -77.4360481 },

  #48. Washington
  { "name": "Seattle,WA", "lat": 47.6062095, "lng": -122.3320708 },
  { "name": "Spokane,WA", "lat": 47.6587802, "lng": -117.42604649999998 },

  #49. West Virginia
  { "name": "Charleston,WV", "lat": 38.3498195, "lng": -81.6326234 },

  #50. Wisconsin
  { "name": "Milwaukee,WI", "lat": 43.0389025, "lng": -87.90647360000003 },
  { "name": "Madison,WI", "lat": 43.0730517, "lng": -89.40123019999999 },

  #51. Wyoming
  { "name": "Cheyenne,WY", "lat": 41.1399814, "lng": -104.82024619999999 },
]

CanadaCities = [
  { "name": "Toronto,Ontario", "lat": 43.653226, "lng": -79.38318429999998 },
  { "name": "Montreal,Quebec", "lat": 45.5016889, "lng": -73.56725599999999 },
  { "name": "Vancouver,British Columbia", "lat": 49.2827291, "lng": -123.12073750000002 },
  { "name": "Calgary,Alberta", "lat": 51.0486151, "lng": -114.0708459 },
  { "name": "Ottowa,Ontario", "lat": 45.4215296, "lng": -75.69719309999999 },
  { "name": "Edmonton,Alberta", "lat": 53.544389, "lng": -113.49092669999999 },
  { "name": "Quebec City,Quebec", "lat": 46.8138783, "lng": -71.2079809 },
  { "name": "Winnepeg,Manitoba", "lat": 49.895136, "lng": -97.13837439999998 },
  { "name": "Hamilton,Ontario", "lat": 43.2557206, "lng": -79.87110239999998 },
  { "name": "Waterloo,Ontario", "lat": 43.4642578, "lng": -80.5204096 },
  { "name": "London,Ontario", "lat": 42.9849233, "lng": -81.2452768 },
  { "name": "Niagara Falls,Ontario", "lat": 43.0895577, "lng": -79.08494359999997 },
  { "name": "Halifax,Nova Scotia", "lat": 44.64876350000001, "lng": -63.5752387 },
  { "name": "Oshawa,Ontario", "lat": 43.8970929, "lng": -78.86579119999999 },
  { "name": "Victoria,British Columbia", "lat": 48.4284207, "lng": -123.36564440000001 },
]

mile_in_km = 1.60934
distances = []
for i in range(len(USCities)):
  a = USCities[i]
  distances.append([])
  for j in range(len(USCities)):
    b = USCities[j]
    innerArr = distances[i]
    if j == i:
      innerArr.append(0.)
    else:
      innerArr.append(distance_on_earth(a['lat'],
                                          a['lng'],
                                          b['lat'],
                                          b['lng']))

# distances = pd.DataFrame(distances) / mile_in_km
print distances
path = solve_tsp( distances )
for i in range(len(USCities)):
  USCities[i]['sorted'] = path[i]

ordered = map(lambda x: x['name'], sorted(USCities, key=lambda x: x['sorted']))
print(ordered)
# print distances

