import unittest

class TestTravis(unittest.TestCase):

    def test_print(self):
        print('Hello from Travis')

if __name__ == '__main__':
    unittest.main()
        