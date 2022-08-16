# Task

You are tasked to implement a function that calculate if a list of sites are live or not.

A site is live if:

- there is at least one live (status=1) campaign linked to that site (the campaign URL points to a site)
- another live site links to it via the links property

Take into consideration the complexity of the algorithm at scale.
Calculate the Big-O factor for the algorithm you implement.

# Run

You can run the node file with:

```javascript
node exercise.js
```
