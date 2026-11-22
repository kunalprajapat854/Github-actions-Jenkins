
const http = require("http");

function getMessage() {
    return "Hello from Jenkins CI/CD!";
}

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        return res.end(JSON.stringify({
            status: "UP"
        }));
    }

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(getMessage());
});

if (require.main === module) {
    server.listen(3000, "0.0.0.0", () => {
        console.log("Application running on port 3000");
    });
}

module.exports = { getMessage };
