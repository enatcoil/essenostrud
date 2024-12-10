// Example functions
const field = _ => _.data;
const path = fieldData => `Processed: ${fieldData}`;
const processPoint = (point, radius) => `Point with radius ${radius}: ${point.data}`;

// Define pointRadius
const pointRadius = 10; // Can be null or a number

// Define the shape function
const shape = pointRadius == null 
  ? _ => path(field(_)) 
  : _ => {
      // If pointRadius is not null, perform some other action
      return processPoint(_, pointRadius);
    };

// Example usage
const point = { data: "example" };
console.log(shape(point)); // Output will depend on the value of pointRadius
