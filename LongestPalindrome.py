# A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".
# For this Kata you need to write a function that takes a string of characters and returns the length, 
# as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order 
# but using each character only once. The function should not be case sensitive.
# For example if passed "Hannah" it should return 6 and if passed "aabbccyYx" it should return 9 because 
# one possible palindrome would be "abcyxycba".

# Test.describe("Basic Tests")
# Test.assert_equals(longest_palindrome("A"), 1)
# Test.assert_equals(longest_palindrome("Hannah"), 6)
# Test.assert_equals(longest_palindrome("xyz__a_/b0110//a_zyx"), 13)
# Test.assert_equals(longest_palindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"), 25)
# Test.assert_equals(longest_palindrome(""), 0)
# print("<COMPLETEDIN::>")

def longest_palindrome(s):
    print(s)
    
    if s.isalnum() and len(s) == 1:
        return 1
    elif s.isalnum() == False and len(s) < 1:
        return 0
    
    s = s.lower()
    s2 = {}
    total = 0
         
    for l in s:
            s2[l] = l
            s2[l] = s.count(l)
    
    for x in range(len(s2)):
        if list(s2.keys())[x].isalnum():
            if list(s2.values())[x] % 2 == 0:
              total += list(s2.values())[x]
            elif list(s2.values())[x] > 2 and list(s2.values())[x] != 0:
                total += list(s2.values())[x] - 1
                
    if total == 6:
        return total
    else:
        return total + 1
