# how man mochi we can make 
# 24 pieces of daifuku
# 3 cups of sweet rice FileNotFoundError1.5 cups of sugar
# 2 cups of cornstarch
# 1 cup of red bean paste

# enter certain amount of mochiklo 
# sugar
# constark and anko 

# 1 cup = 220g 

# import math
# mochiko=int(input("Enter an amount (g) of mochiko): "))
# mochiko=mochiko/220
# sugar=int(input("Enter an amount (g) of sugar): "))
# sugar=sugar/220
# constarch=int(input("Enter an amount (g) of constarch): "))
# constarch=constarch/220
# anko=int(input("Enter an amount (g) of anko): "))
# anko=anko/220

# mochi_batch=min(mochiko/3,sugar/1.5,constarch/2,anko)
# mochi_batch=math.floor(mochi_batch)



# print("With this amount of ingredients, you can make", mochi_batch, "batch(es) of 24 mochi")



# player=int(input("How many players this round:"))
# sum=0
# winner=0
# max_price=0
# property=0
# while player<0:
#     player=int(input("Please enter a valid number of players:"))

# for num in range(1,player+1):
#    while property!="DONE":
#         property=float(input("Enter the value of property/lasset, or DONE to finish:"))
#         sum+=property
#     print("Player", num, "has", sum, "dollars")
#     sum=0
   





#ord: Returns the unicode value for a character
#chr: returns the character gibern a unicode
#.find: returns the index of the first occurence of a character
#.replace: replaces a character with another character
#string[start:end]: returns a substring from start to end
#string[start:]: returns a substring from start to the end of the string
#string[:end]: returns a substring from the start to end
#string[:]: returns the whole string
#string[start:end:step]: returns a substring from start to end with a step
#len(string_name): returns the length of the string




# my_string="I LIKE POTATOES AND CABBAGE"
# print(my_string[0:5])
# my_string[1]


# STRING FORMATTING

#FORMAT METHOD 1:
format()
salary=1000
output="{:.4f}".format(salary)
output=f"{salary:.3f}"