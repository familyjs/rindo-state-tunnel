[![npm][npm-badge]][npm-badge-url]

# Rindo State Tunnel

This project was built to provide additional functionality to developers working with rindo
components and sharing state across components and through slots. The API was inspired by React's Context.

There are many cases within component based application development where you will want to drill state down through props to children and children's children and so on. This project was created in order to alleviate the need for pass props deep through an application's component structure.

There are 2 primary use cases where this tool makes sense.
1. Building a rindo application and need to store application state in a centralized location.
2. Building a collection of components that need to share state but have no direct 'line of sight' between the component relationships (ie most likely from using `slot`).

[npm-badge]: https://img.shields.io/npm/v/@rindo/state-tunnel.svg
[npm-badge-url]: https://www.npmjs.com/package/@rindo/state-tunnel
