const supertest = require("supertest");
// our server won't actually start when required in,
// due to the if statement in index.js
const server = require("../index");

test("GET /", async () => {
    // we start by ARRANGing the data we need
    const endpoint = "/";
    const status = 200;

    // then we ACT on whatever we're testing
    const res = await supertest(server).get(endpoint);

    // then we ASSERT the response data
    expect(res.statusCode).toBe(status);

    // expect(res.headers["content-type"]).toBe("application/json");  VVVV same for supertest
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Welcome to our API");
    // ^^ same test, different type vv
    expect(res.body.message).toMatch(/welcome/i);
});
