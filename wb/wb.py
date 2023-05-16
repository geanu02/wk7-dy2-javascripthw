# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# Examples:

# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
# spinWords( "This is a test") => returns "This is a test"
# spinWords( "This is another test" )=> returns "This is rehtona test"

def spinWords(sentence):
    _ls = sentence.split(' ')
    _result = ""
    for _word in _ls:
        if len(_word) >= 5:
            letters = [x for x in _word]
            letters.reverse()
            _word = ''.join(letters)
        _result += _word + ' '
    return _result.rstrip()

print(spinWords( "Hey fellow warriors" ))
#  => returns "Hey wollef sroirraw"
print(spinWords( "This is a test"))
# => returns "This is a test"
print(spinWords( "This is another test" ))
# => returns "This is rehtona test"