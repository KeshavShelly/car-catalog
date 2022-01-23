// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// // setup Apollo Client
// const client = new ApolloClient({
//   uri: 'http://localhost:4500/graphql',
//   cache: new InMemoryCache()
// });

// //  make a query
// client
//   .query({
//     query: gql`
//       query{
//         allCars{
//                   id
//                   car
// 		              car_model
//                   car_color
//                   car_model_year
//                   car_vin
//                   price
//                   availability
//                 }
//             }`,

//   variables: {id: 1}
//   })
//   .then(result => console.log(result));

// export default getData;