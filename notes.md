##Conventions
every time you import an external package put it in the `app.tsx` file and no where else

###how the router is fetching products for the prodct etails page based off the id of the product
Using useRouter from next/router the product is set to the value of`react.query` using useState hook and this is what is allowing the component to puaccess the details of the product that has that id being queried at `product/product._id` in the URL.
