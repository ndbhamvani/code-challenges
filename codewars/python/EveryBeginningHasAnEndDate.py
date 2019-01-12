# I was working with some time series data in Python today and came across this problem and thought it would make a nice 
# little kata for beginners.

# ###The problem: You have a time series in Pandas or whatever, indexed by datetime objects. For any date in the time series, 
# you want to find the date of the beginning of the week that it is in (Monday in the case of Python) or the end of the week 
# that it is in (Sunday in the case of python).

# You may use datetime module where necessary.

# Examples (Beginning of week):
# 2016-02-29 00:00:00 ==> 2016-02-29 00:00:00
# 2016-01-28 00:00:00 ==> 2016-01-25 00:00:00

# Examples (End of week):
# 1957-12-25 00:00:00 ==> 1957-12-29 00:00:00
# 1954-05-16 00:00:00 ==> 1954-05-16 00:00:00

from datetime import datetime as dt
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

def week_start_date(given_date):
    
    the_date = dt.date(given_date).toordinal() 
    day_given = given_date.strftime("%A")
    
    for day in week:
       if day == day_given:
            the_date -= week.index(day)
            return dt.fromordinal(the_date)
    

def week_end_date(given_date):  

    the_date = dt.date(given_date).toordinal()   
    day_given = given_date.strftime("%A")
    
    for day in week:
       if day == day_given:
            the_date += 6 - week.index(day)
            return dt.fromordinal(the_date)
