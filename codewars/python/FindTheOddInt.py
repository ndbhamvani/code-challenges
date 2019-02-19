# Given an array, find the int that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

def find_it(seq):

    dict = {}
    
    for num in seq:
            dict[num] = num
            dict[num] = seq.count(num)
    
    for i in range(len(dict)):
        if list(dict.values())[i] % 2 > 0:
            return list(dict.keys())[i]
