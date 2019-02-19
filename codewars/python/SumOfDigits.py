# A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
# If that value has two digits, continue reducing in this way until a single-digit number is produced. 
# This is only applicable to the natural numbers.

# Here's how it works:

# digital_root(16)
# => 1 + 6
# => 7

# digital_root(942)
# => 9 + 4 + 2
# => 15 ...
# => 1 + 5
# => 6

# digital_root(132189)
# => 1 + 3 + 2 + 1 + 8 + 9
# => 24 ...
# => 2 + 4
# => 6

def digital_root(n):
    
    n = str(n)
    arr = [int(i) for i in n]    
    sum = 0;
    
    for x in arr:
        sum += x
    
    if sum < 10:
        return sum
    else:
        n = sum
        return digital_root(n)
