import unittest
import Pyv8
from main_app import *

class TestTravis(unittest.TestCase):

# TestCase No 1:
    def test_print(self):
        print('Hello from Travis')

#TestCase No 2:
    def test_createUser(self):
        user=False
        self.assertEqual('user', 0)

if __name__ == '__main__':
    unittest.main()
        