import Landing from "@/components/landing";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-3/5 gap-1 mb-10 mt-3">
      <h1 className="text-4xl font-semibold">AirBnB Analysis</h1>
      <p>
        by Shaurya Pathak, Kavin Phabiani, Rishika Mundada, Jonathan Trujillo,
        Sean Quiambao
      </p>
      <strong id="about">About</strong>
      <p>
        The goal of this project is to understand the patterns and relationships
        in the Airbnb dataset using predictive and clustering models to gain
        insight into this market. We used both supervised (XGBoost regression)
        and unsupervised models (K-means clustering) to uncover patterns and
        correlations in the Airbnb dataset. Our main goal is to predict listing
        prices based on key features like location, room type, and availability.
        Additionally, we aim to group listings with similar attributes using
        clustering models to identify trends and segmentation in the Airbnb
        market.
      </p>

      <strong id="dataset">Dataset</strong>
      <Link
        href={"https://insideairbnb.com/get-the-data/"}
        target={"_blank"}
        className="text-blue-600 font-semibold"
      >
        {" "}
        Link
      </Link>

      <p>
        The dataset consists of 45,000 Airbnb listings retrieved from the
        insideairbnb website. The dataset provides detailed information about
        each listing, including attributes such as the listing name, host
        details, neighborhood information, geographical coordinates, room type,
        price, availability, minimum stay requirements, the number of reviews,
        review frequency, and license information. For our analysis, we utilized
        key features like room type, price, neighborhood, and reviews to predict
        listing prices and cluster similar listings. Location data, such as
        latitude and longitude, was primarily used for geographical analysis and
        visualizations. Some data cleanup and preprocessing steps were taken to
        address any non-alphanumeric data in the name columns before text
        mining.
      </p>
      <Landing />
      <div id="conclusion" className="flex flex-col gap-2 items-center">
        <strong className="text-2xl">Conclusion</strong>
        <p>
          The objective of this project is to predict Airbnb listing prices in
          Los Angeles, California, using the XGBoost model for supervised
          learning. Additionally, the project aims to identify market trends and
          group listings with similar attributes through clustering models, such
          as the k-means algorithm, to better understand the underlying
          structure of the Airbnb market.
        </p>
        <p>
          For unsupervised learning, the k-means clustering algorithm was
          employed to analyze patterns and relationships among the most common
          terms in Airbnb listing descriptions. Prior to applying the clustering
          algorithm, a bag-of-words model was used to extract the top 100 most
          frequent terms from the dataset. These terms included descriptors like
          “private,” “bedroom,” and “luxury,” which were used as features for
          clustering. The k-means algorithm helped categorize listings into
          distinct groups based on the combinations of these keywords, providing
          insights into how different attributes influence listing
          characteristics and pricing.
        </p>
        <p>
          For supervised learning, the XGBoost model was utilized to predict
          prices and identify attributes with the greatest influence on listing
          prices. The model successfully highlighted key features such as
          property location and size as the most significant determinants of
          price. However, the XGBoost model struggled to accurately capture
          outliers, particularly for extremely high-priced properties, due to
          their rarity and disproportionate impact on predictions. Despite this
          limitation, the model demonstrated strong performance in predicting
          prices for listings in a lower price range, offering some insight into
          the factors driving Airbnb pricing dynamics in Los Angeles.
        </p>
      </div>
    </div>
  );
}
