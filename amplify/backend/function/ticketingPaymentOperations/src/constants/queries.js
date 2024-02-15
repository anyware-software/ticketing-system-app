const getWavesConsumption = /* GraphQL */ `
  query GetWavesConsumption($id: ID!) {
    getWavesConsumption(id: $id) {
      waveId
      consumedTickets
      totalTickets
      id
      consumed
      createdAt
      updatedAt
      __typename
    }
  }
`;
const listWavesConsumptions = /* GraphQL */ `
  query ListWavesConsumptions(
    $filter: ModelWavesConsumptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWavesConsumptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        waveId
        consumedTickets
        totalTickets
        id
        consumed
      }
      nextToken
      __typename
    }
  }
`;
module.exports = {
  getWavesConsumption,
  listWavesConsumptions,
};
