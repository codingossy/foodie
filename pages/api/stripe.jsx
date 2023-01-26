import Stripe from "stripe";

 const stripe = new Stripe('sk_test_51MLcsoKSzsDIjVTbxAv2mKdc1ie9qze0pKeFqyBlyr2ivMWJawoGS7If3NR9Yg79hNS8dyfT6q34A9ns8Ee7aiT800IRDJiBtY')

 export default async function handler(req, res) {
    if (req.method == "POST")
    {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: req.body.map((item) => {
                    const img = item.image.asset._ref

                    const newImage = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/ratq3w3q/production/"
                    )
                    .replace('-jpg', '.jpg')

                    return{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price*100
                        },
                        adjustable_quantity: {
                            enabled: false
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`

            }

            // checkout session

            const session = await stripe.checkout.sessions.create(params)
            console.log(session)
            res.status(200).json(session)
            
        } catch (error) {
            res.status(500).json(error.message)
        }
    }else{
        res.setHeader("Allow", "POST")
        res.status(405).end("not allowed")
    }
 }