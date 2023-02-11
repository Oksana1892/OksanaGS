const tryCatchDecorator = (collback) => (...argv) => {
    try {
        return collback();
    } catch (error) {
        console.log(error.message)
        return {
            message: error.message
        }
    }
}

 module.exports = {
    func: tryCatchDecorator
 };