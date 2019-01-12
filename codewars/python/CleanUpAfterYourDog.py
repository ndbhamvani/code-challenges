# You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
# Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
# You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 
# If there are no bags then you can't pick anything up, so you can ignore cap.
# You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

# If you do, return 'Clean', else return 'Cr@p'.
# Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

# For example:

# x=
# [[_,_,_,_,_,_]
# [_,_,_,_,@,_]
# [@,_,_,_,_,_]]

# bags = 2, cap = 2
# return --> 'Clean'

def crap(garden, bags, cap):
    
    covered_by_crap = '@'
    having_angry_dog = 'D'
    crap_count = 0
    dog_count = 0
    
    for area in range(len(garden)):
        for patch in range(len(garden[area])):
            if garden[area][patch] is covered_by_crap:
                crap_count += 1
            elif garden[area][patch] is having_angry_dog:
                dog_count += 1
            
    if dog_count > 0:
        return 'Dog!!'
    elif crap_count > bags * cap:
        return 'Cr@p'
    else:
        return 'Clean'
