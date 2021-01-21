const NumberRepository = require('../repositories/NumberRepository')

const getNumber = async (req, res) => {
    try {
        const number = await NumberRepository.findByID(1)
    
        if(!number) {
          return res.status(400).json({
            status: 400,
            success: false,
            code: 'NUMBER_NOT_FOUND',
          })
        }
    
        return res.status(200).json({
            status: 200,
            success: true,
            code: 'NUMBER_FOUND',
            number: number.number,
        })
    } catch (err) {
        return res.status(500).json({
            status: 500,
            success: false,
            code: 'INTERNAL_SERVER_ERROR',
        })
    }
}

const incrementNumber = async (req, res) => {
    try {
        const number = await NumberRepository.increment(1, 'number', 1)
    
        if(!number) {
          return res.status(400).json({
            status: 400,
            success: false,
            code: 'NUMBER_NOT_FOUND',
          })
        }

        let io = res.io

        io.emit('message', {
            type: 'NUMBER_UPDATE',
            value: number[1].number,
        })
    
        return res.status(200).json({
            status: 200,
            success: true,
            code: 'NUMBER_UPDATED',
            number: number[1].number,
        })
    } catch (err) {
        return res.status(500).json({
            status: 500,
            success: false,
            code: 'INTERNAL_SERVER_ERROR',
        })
    }
}

module.exports = {
    getNumber,
    incrementNumber
}
