const success = (res, message, data, status = 200) => {
    return res.status(status).json({
        code: status, 
        message: message, 
        data: data
    })
}

const error = (res, message, status= 400) => {
    return res.status(status).json({
        code: status, 
        message: message,
    })
}

export { success, error }