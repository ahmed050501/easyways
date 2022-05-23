{/* <>
        // <
        // StripeCheckout stripeKey = "pk_test_51KwfbeSGwXFGrDg9PySzdMkzmNqiGCPklM2vVqcFrkcwCAMZIGNn1XWL3zqirSHDo0FrWhsDnHB6XPLwX73DbpxV00thG8jUPM"
        // token = { makepayment }
        // name = ""
        // amount = { product.price * 100 }
        // shippingAddress billingAddress >
        // <
        // button className = " btn bg-white text-lg text-black rounded-lg " > Pay < /button> < /
        // StripeCheckout > */}

        const [product, setproduct] = useState({
            //         name: "truck from easyway",
            //         price: 10,
            //         productby: "easyway"
            //     });
            
            //     const makepayment = token => {
            //         const body = {
            //             token,
            //             product
            //         };
            //         const headers = {
            //             "Content-type": "application/json"
            //         };
            //         return fetch("http://localhost:8080/payment", {
            //             method: "POST",
            //             headers,
            //             body: JSON.stringify(body)
            //         }).then(response => {
            //             console.log("response", response);
            //             const { status } = response;
            //             console.log("Status", status);
            //         }).catch(e => console.log("Error", e));
            //     };