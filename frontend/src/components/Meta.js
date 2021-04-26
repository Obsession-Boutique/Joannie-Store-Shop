import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta
        name="icon"
        href="https://i.ibb.co/6vFPjbw/153298016-2081847825287011-1614926409567183933-n-2.png"
      />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Obsession Boutique",
  keywords: "Accessories",
  description: "Shoes, Shirts, Blouses, and more! By Sacoleira and More!",
};

export default Meta;
