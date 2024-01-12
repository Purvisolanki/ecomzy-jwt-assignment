import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { selectSearchTerm } from "../redux/Slices/searchSlice";
import { selectPriceRange } from "../redux/Slices/priceSlice";
import PriceFilter from "../components/PriceFilter";



const Home = () => {
  
  const API_URL = `https://dummyjson.com/products`;
  const searchTerm = useSelector(selectSearchTerm);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const selectedPriceRange = useSelector(selectPriceRange);



  async function fetchProductData(){
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data.products);
      setPosts(data.products);
    }
    catch(error){
      console.log("error aa gya bhaiya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  useEffect(() => {
    fetchProductData();
  }, [searchTerm, selectedPriceRange]);
  
// // Filter the posts based on the search term
// const filteredPosts = posts.filter((post) =>
// post && post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())
// );

const filterProducts = () => {
  let filteredProducts = posts;

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedPriceRange) {
    const [min, max] = selectedPriceRange.split("-").map(Number);
    filteredProducts = filteredProducts.filter((product) => {
      // Ensure that product.price is a number
      const productPrice = typeof product.price === "number" ? product.price : null;

      // Check if productPrice is not null before comparing
      return productPrice !== null && productPrice >= min && productPrice <= max;
    });
  }

  return filteredProducts;
};

const filteredPosts = filterProducts();



  return (<div className="flex justify-center items-center mb-10 flex-col">
    <PriceFilter/>
    {
      loading ? <Spinner/> : 
      filteredPosts.length > 0 ? 
      (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl min-height-3xl p-2 mx-auto space-y-10 space-x-5 min-height-[80vh]">
        {filteredPosts.map((post) => (
          post && <Product key={post.id} post={post}/>
        ))}
      </div> ) : 
      <div className="flex justify-center items-center">
        <p>No Data Found</p>
      </div>
    }
  </div>);
};

export default Home;
