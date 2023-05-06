# script.py

import sys

# Get the arguments passed from Node.js
arg1 = sys.argv[1]
arg2 = sys.argv[2]

# Do some processing with the arguments
result = arg1 + " " + arg2

# Send the result back to Node.js
print(result)
sys.stdout.flush()
