---
title: NDBC Data Buoy Reader
summary: A Python package designed to automate the fetching and organizing of National Data Buoy Center (NDBC) standard meteorological data. Additionally it provides station metadata and station search functionality. New functionality to include rudimentary data visualization to facilitate initial exploratory data analysis.
tech: Python
img: http://www.ndbc.noaa.gov/images/nws/noaaleft.jpg
card_img: /images/buoy.jpg
github_link: https://github.com/GenSci/NDBC
published_to_twitter: false
lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---

## Background & Motivation
For those who are unfamiliar, the National Data Buoy Center (NDBC) is part of the National Oceanic and Atmospheric Administration.  Their mission is to provide quality observations in the marine environment.  They have data buoys around the world monitoring oceanic and coastal conditions (some lakes too).  The data is readily accessible and freely available which, in my opinion, incredibly cool and exciting.  Scientists of all stripes often have to spend time and effort funding, building, deploying, and recovering instrumentation to get some measure of the system they are interested in.  That a large array of quality measurement platforms is just out there collecting data which is readily available to anyone was just gobsmacking to me.  For my regional buoy, NDBC has hourly measurements going back to 1985!  

The issue I ran into was it was available in the form of `.txt` files (annual and monthly) or strange archive files I could not figure out how to open and parse.  After creating my initial data set by downloading and stitching together monthly text files for two years, I figured there hard to be a better way.  Later, in conversations with senior researchers in my field, I realized that even among the most seasoned professionals there really wasn't a common method used to readily access this data.  I wanted to provide at least one potential option for people out there.

This project was initially written in `MATLAB` as part of my work on my [M.Sc. thesis project](https://www.sciencedirect.com/science/article/pii/S0278434318303601).  Much of the current and planned functionality is based on the struggles I had wrangling my data.  The shift from `MATLAB` to Python was born out of the one or two licensing scares near the end of my thesis and work on my publication.  Additionally I had realized that using truely open and free software would make this package more accessible to students and researchers worldwide.

## Solution
The NDBC Python Package, `pip install ndbc`, currently allows users so specify a single data station by the corresponding ID number during object instantiation.  For example:
```python
from NDBC.NDBC import DataBuoy
# Getting my regionial NDBC station
n42 = DataBuoy(46042)
```
The current features of the `DataBuoy` class are all based on moments in my research where my advisor asked me a question and I realized I should already have acess to the data.
- `get_station_metadata()`:  This function crawls a station's webpage and parses the info table often (but not always) present.  Usually it will contain things like location (lat, lon), water depth, instrument position, etc.
- `station_search()`:  This feature is new to the Python implementation but it's based on being asked "How do these observations correspond with nearby buoys?".  I wish I had thought of this earlier.  It really just hits the NDBC website, parses the results, and returns a response.  I created this functionality with the idea that a curious researcher shouldn't have to leave the terminal to do a simple search.  It only returns a list of IDs but then you can instantiate more `DataBuoy` classes and start investigating what those stations have observed as well.

## Next Steps

### API Cleanup and the `@property` decorator
The core data structure is a dictionary.  This allows the data storage to be quite flexible but I find myself making typos frequently when I have to traverse multiple layers of keys and values.  One low hanging fruit in terms of package improvement would be the application of the `@property` decorator.  This way I could retain the flexible nature of the dictionary for data storage while providing dot notation data access.  This would also allow me to provide dot notation access without changing the underlying structure of the data which preserves backward compatability.  For anyone not familiary with the `@property` decorator [here](https://www.freecodecamp.org/news/python-property-decorator/) is a great breakdown of it's uses.

### Data Checking Visualizations
A somewhat more exciting, if longer term, feature would be some simple exploratory data visualizations being built into the class.  I had one scare during my research in which I could not make sense of what I was seeing in my data until I made a line graph with the `datetime` value on both the x and y axes.  Then it was clear that, rather than including the month of November, my data source had appended October twice.  So a time plot might be nice.  I would also like to provide a plot of all the paramters measured and their temporal coverage with valid data.  