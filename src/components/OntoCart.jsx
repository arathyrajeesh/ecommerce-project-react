import ProductList from './components/ProductList';

function App() {
    const handleAddToCart = (product) => {
        console.log("Added to cart:", product);
    };

    return (
        <div>
            <h1>Products</h1>
            <ProductList onAddToCart={handleAddToCart} />
        </div>
    );
}

export default App;
