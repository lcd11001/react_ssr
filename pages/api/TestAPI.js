import { graphql, buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
        name: String,
        address: String,
        contact: String,
        bloodgroup: String,
        favorite: String,
        vehicle: String
    }
`)

const data = {
    name: 'Lương Công Dân',
    address: 'Ho Chi Minh city, Vietnam',
    contact: '0901234567',
    bloodgroup: 'B+',
    favorite: 'Dota2, Football',
    vehicle: 'Dream'
}

export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    // res.end(JSON.stringify(data))
    const response = await graphql(schema, req.body.data.query, data)
    res.end(JSON.stringify(response.data))
}