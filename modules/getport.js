module.exports = function getPort() {
    return process.argv.length > 1 ? process.argv[2] : process.env.PORT;
}