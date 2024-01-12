// Inside your page component file, e.g., myPage.js

import React from "react";
import { graphql } from "gatsby";

const GraphQL = ({ data }) => {
  // 'data' will be populated with the result of your GraphQL query
  // You can access the data inside the 'data' object

  const {} = data;

  return (
    <div>
      {/* Your component rendering logic using the data */}
    </div>
  );
};

export const query = graphql ("query {} ");
export default GraphQL;

