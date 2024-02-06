#!/usr/bin/python3
is_same_class = __import__('2-is_same_class').is_same_class

b = 1
if is_same_class(b, int):
    print("{} is an instance of the class {}".format(b, int.__name__))
if is_same_class(b, float):
    print("{} is an instance of the class {}".format(b, float.__name__))
if is_same_class(b, object):
    print("{} is an instance of the class {}".format(b, object.__name__))
