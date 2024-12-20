export const DATA = [
  {
    id: 2,
    title: "EDA 1 & EDA 2",
    description: "",
  },
  {
    id: 3,
    title: "",
    link:"eda",
    description:
      "This box plot visualizes the distribution of Airbnb listing prices. Most prices are concentrated at the lower end of the scale, as evidenced by the cluster on the left. The presence of multiple outliers, extending far beyond the upper whisker, indicates a small number of extremely high-priced listings. These outliers skew the data significantly, with some listings priced at over $20,000. The plot suggests that while most listings are moderately priced, the dataset includes extreme price variations that need careful consideration during analysis, especially when predicting prices or understanding market trends.",
  },
  {
    id: 4,
    title: "EDA 3",
    link:"eda2",
    description:
      "This graph visualizes the distribution of Airbnb listing prices, highlighting that the majority of listings are concentrated at lower price points. The Kernel Density estimation line provides additional insight to the shape of the pricing data. It shows that most listings fall below $500 per night, with a sharp drop in frequency as prices increase. The data also shows a long tail, which is indicative of the small number of high-priced listings. This distribution emphasizes the dominance of affordable options in the market.",
  },
  {
    id: 5,
    title: "EDA 3",
    link:"eda3",
    description:
      "This scatter plot visualizes the relationship between availability in days and the price for Airbnb listings. The majority of listings are clustered at lower price ranges, suggesting that most properties are affordable and available throughout the year. There is one high-priced listing, with a price exceeding $50,000, at a lower level of availability. The plot does not show a strong correlation between availability and price, suggesting that other factors might play a larger role in determining pricing.",
  },
  {
    id: 6,
    title: "EDA 4",
    link:"eda4",
    description: `The bar graph shown above visualizes the average prices of all the commonly used terms the Airbnb postings. Luxury keyword items such as hill, pool, and modern tend to have higher average prices. This may suggest a correlation between homes and listings with luxury items determining Airbnb’s price listings. Location-specific keywords like "hollywood" and "beach" also indicate higher pricing, emphasizing the impact of desirability and demand.`,
  },
  {
    id: 7,
    title: "EDA 5",
    link:"ed5",
    description:
      "The pie chart above shows the percentages of room types for all Airbnb listings. The majority of the listings tend to be houses or apartments (about ¾). Roughly a quarter of the Airbnb listings have a private room type. Most of the Airbnb hosts in Los Angeles tend to list their own homes or rooms while they are unavailable.",
  },
  {
    id: 8,
    title: "Correlations",
    link:"correlations",
    description:
      "The following heatmap visualizes the correlations between different features of Airbnb listings and the price of those listings. The highest feature correlated to the pricing is availability_365, however the correlation coefficient for all features is extremely low. There may be other factors contributing to the prices of the Airbnb listings.",
  },
  {
    id: 9,
    title: "distributions by ",
    link: "",
    description: "ndndn",
  },
  {
    id: 10,
    title: "Airbnb by location",
     link:"distributions",
    description:
      "The above scatter plot graphs all Airbnb listings by their longitude and latitude color coding listings by price. From the plot, we can see that most of the listings are priced relatively the same as the majority of the graph is purple except for a strip of listings at around 34.0 latitude that have a higher price distribution. Looking further into the neighborhoods around the latitude and longitude of the outliers in the charts we can see that these are all neighborhoods in relatively affluent areas explaining their higher prices. This shows that there is a strong correlation between location and pricing that can be further explored.",
  },
  {
    id: 14,
    title: "K-means",
     link:"k",
    description: [
      "K-means clustering is an unsupervised learning technique used to classify features based on their similarities. We are trying to find commonalities between combinations of words.",
      "The bag-of-words model vectorizes the 'name' column in the Airbnb dataset based on term frequency, excluding all stop words. The top 100 words in the list are selected as the terms to be clustered.",
      'This visualization represents the result of K-means clustering performed on the top 100 words vectorized using the Bag-of-Words model. The algorithm sets the k-value to be 4. The data is projected into a 2D space using PCA for dimensionality reduction. By analyzing frequently used words in Airbnb listings, we can observe relationships between terms such as "private," "room," and "bath," which significantly influence how the clusters are formed, particularly with listings mentioning "2-bedroom" or "1-bedroom." This shows the separation breaks down the Airbnb',
    ],
  },
  {
    id: 17,
    title: "Suprervised Learning using XG Boost",
    link: "",
    description: "",
  },
  {
    id: 19,
    title: "",
    link: "xg",
    description:
      "This visualization represents the result of the XG Boost model on determining the price using information like location as well as neighborhood information. The XGBoost model provides further insight into what features were used to inform the optimal model. By using a greedy forward stepwise approach it uses a single decision tree to split features by how much they improve the accuracy. This confirms our hypothesis that location (latitude and longitude) are indeed the most important predictors to an AirBnb's price. The model can predict the majority of data samples, especially ones in lower price bins, but struggles to capture more expensive Airbnb properties. This is likely due to the lack of data related to the number of bedrooms and square footage. As properties go higher in price the size of the property is likely to be a greater influence than the location of the property. Despite this limitation, the results clearly highlight location as the most predictive feature for Airbnb pricing.",
  },
];
