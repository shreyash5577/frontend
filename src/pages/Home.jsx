import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/logo.png" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/veg.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">Explore a world of flavors with our vegetarian recipes — where health meets taste in every bite. From colorful salads and hearty soups to innovative plant-based twists on classic dishes, these recipes celebrate the beauty of fresh vegetables, grains, and spices. Whether you're a lifelong vegetarian or just looking to add more greens to your plate, our collection offers something for every palate.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/nonveg.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Non Veg Recipes</h5>
        <p class="card-text">Explore the hearty and savory world of non-vegetarian cuisine — where every bite is a burst of bold flavors. From tender, spice-marinated chicken and juicy grilled meats to succulent seafood and aromatic curries, non-veg dishes offer an irresistible blend of taste and tradition.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/fastfood.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Fast Foods</h5>
        <p class="card-text">quick, delicious, and always satisfying! From crispy fries and juicy burgers to cheesy pizzas and zesty tacos, fast food brings bold flavors and instant gratification. It’s the perfect choice for when you're on the go, craving something indulgent, or looking for a fun treat.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/desserts.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Desserts</h5>
        <p class="card-text">Satisfy your sweet tooth with our collection of decadent desserts — where every bite is a little piece of happiness. From rich, velvety cakes and gooey brownies to creamy puddings and refreshing sorbets, desserts bring joy to every occasion.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home


