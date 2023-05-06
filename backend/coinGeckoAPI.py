import requests
import json
import sys

coin = sys.argv[1]

def func1(coin: str):
    # Define the endpoint URL and required parameters
    url = f"https://api.coingecko.com/api/v3/coins/{coin}"
    params = {
        "localization": "false",
        "tickers": "true",
        "market_data": "false",
        "community_data": "false",
        "developer_data": "false",
        "sparkline": "false"
    }

    # Debug statement: print the URL and params
    print(f"Making request to URL: {url}")
    print(f"Request parameters: {params}")

    # Make a GET request to the API endpoint
    response = requests.get(url, params=params)

    # Debug statement: print the status code
    print(f"Response status code: {response.status_code}")

    # Check if the request was successful
    if response.status_code == 200:
        # Extract the JSON response from the API
        json_response = response.json()

        # Debug statement: print the JSON response
        print("JSON response:")
        print(json_response)

        # Do something with the JSON response
        return(json_response)
    else:
        # Handle the error condition
        print("API request failed with status code:", response.status_code)

# Debug statement: print the coin value being passed to the function
print(f"Fetching market data for coin: {coin}")
# Get the coin argument passed from Node.js
func1(coin)