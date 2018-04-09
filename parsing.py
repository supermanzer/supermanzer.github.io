"""
 This module contains class definitions for useful data parsing.

"""

import requests
import json
import datetime as dt
import pandas as pd


class NDBCParse:
  """
   This class contains functions used to fetch and parse data from National Data Buoy Center stations.

  Attributes:
    NDBC_DB (str): The numeric identifier of the data buoy whose data is to be gathered for plotting.
    OUTFILE (str): The name of the file to be generated when writing out data.

   Methods/Functions:
    stdmetToJSON: This function gathers (via HTTP GET request) the most recent standard meteorological summary from NDBC data buoy and converts the text file into a python dictionary which is then stringified into a JSON file.
  """

  __BASEURL__ = 'http://www.ndbc.noaa.gov/data/stdmet/{month}/{station}.txt'

  def __init__(self, station_id='46042', file_name='stdmet.json'):
     """
     An initializing function to set our default data.
     """
     self.station_id = station_id
     self.file_name = file_name

  def set_ndbc(self, station_id):
     """
     Allows interactive setting of NDBC station id.

     Args:
         station_id (str): The numeric station id for a specific data
         buoy.
     Returns:
         None
     """
     self.NDBC_DB = station_id

  def set_outfile(self, filename):
     """
     Allows interactive setting of output file name.

     Args:
         filename: The name of the file to be returned by the
         stdmet_to_json function.
     Returns:
         None
     """
     self.OUTFILE = filename


  def stdmet_to_json(self):
     """
     This method uses the current date and the NDBC_DB value to collect
     the most recent standard meteorological summary from the National
     Data Buoy Center (NDBC).  It converts the text returned into a
     Python dictionary which is then saved as a JSON file.  The
     filename is set by the OUTFILE property.

     Returns:
         file_name file is saved to current directory.
     """
     import pdb; pdb.set_trace()
     month_num = dt.datetime.today().month

     url_is_valid = False
     # Looping through potentially available months.
     while month_num >=0 and not url_is_valid:
         month_abbrv = dt.datetime(dt.datetime.today().year, month_num, 1).strftime('%b')
         my_url = self.__BASEURL__.format(month=month_abbrv, station=self.station_id)
         res = requests.head(my_url)
         if res.status_code == 200:
             data_df = pandas.read_csv(my_url, '\s+')
             url_is_valid = True
         month_num -= 1
    # Now we have our data in a pandas dataframe.  However, our first
    # row is actually units and our datetime components are broken out
    # into individual columns.  This is less than desirable as we might
    # like to do some time series operations that expect datetime
    # objects.

    # We check to make sure the first row is the units.
    if data_df.loc[0][0][0] == '#':
      units = data_df.loc[0]
      data_df = data_df.drop([0]) # We need to remove this so our vector operations can proceed.
   dt_index_cols = ['#YY', 'MM', 'DD', 'hh']
   if 'mm' in list(data_df.columns):
       dt_index_cols.append('mm')

   # Setting the datetime component columns as our index
   data_df.set_index(dt_index_cols, inplace=True)
   # Extracting the columns - this won't be very efficient but we are
   # only doing this once a month so I'm not concered...yet.
   dt_vals = data_df.index.values
   
