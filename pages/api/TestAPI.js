const data = {
    name: 'Lương Công Dân',
    address: 'Ho Chi Minh city, Vietnam',
    contact: '0901234567',
    bloodgroup: 'B+',
    favorite: 'Dota2, Football',
    vehicle: 'Dream'
}

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}