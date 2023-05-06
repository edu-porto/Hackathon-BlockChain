from getBow import GetBow
from getNews import GetNews
from getGPTSummaries import GetGPTSummaries
from getWordCloud import GetWordCloud
from getBinanceHistData import GetBinanceData
from getExchangesPrices import GetExchangesPrices
from getSentimentAnalysis import GetSentimentAnalysis

import dotenv
import json

dotenv.load('IA/.env')

final_json = {}

api_key_news = dotenv.get('API_KEY_NEWS')
api_key_openai = dotenv.get('API_KEY_OPENAI')
api_key_binance = dotenv.get('API_KEY_BINANCE')
api_secret_binance = dotenv.get('API_SECRET_BINANCE')

# get news
get_news = GetNews(api_key_news)
news_raw = get_news.inputToSearch("bitcoin")
news_array = get_news.getArrayOfNews(news_raw)
news_texts = get_news.getTextOfNews(news_array)


# get bow
get_bow = GetBow()
bows_raw = get_bow.getBowOfNews(news_texts)
bows = [dict(bow) for bow in bows_raw]


# get wordclouds
get_wordcloud = GetWordCloud()
wordclouds = get_wordcloud.wordCloud(news_texts)


# get gpt summaries
get_gpt = GetGPTSummaries(api_key_openai)
summaries = get_gpt.getGPTSummaries(news_texts)


# get binance historical data
get_binance = GetBinanceData(api_key=api_key_binance,
                             api_secret=api_secret_binance)

binance_data = get_binance.getDataFromBinance("bnbb")


# get exchanges prices
get_exchanges = GetExchangesPrices()
exchanges_prices = get_exchanges.getExchangesPrices("ethereum")


# get sentiment analysis
get_sentiment_analysis = GetSentimentAnalysis()
sentiments = get_sentiment_analysis.sentimentalAnalysis(summaries)


# final json
final_json = {
    'news': {
        'geral_news': news_array,
        'text_news': news_texts,
        'summaries': summaries,
        'sentiments': sentiments
    },
    'bow': bows,
    'wordclouds': wordclouds,
    'hist_data': binance_data,
    'exchanges_prices': exchanges_prices
}

json.dumps(final_json)