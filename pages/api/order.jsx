import { client } from "../../linklib/client"

export default async function handler (req, res){
    switch(req.method)

    {
        case "POST":
            const newOrder = await JSON.parse(req.body)
        try {
            await client.create({
                _type: 'orderpayment',
                name: newOrder.name,
                address: newOrder.address,
                city: newOrder.city,
                number: newOrder.number,
                total: newOrder.total,
                status: 1,
                method: newOrder.method,


            }).then((data) => {
                res.status(200).json(data._id)
            })
        } catch (error) {
            res.status(500).json({
                msg: 'error, check console' 
            })
        }
        break;
    }
}