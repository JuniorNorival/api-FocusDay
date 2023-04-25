const app = require("../app");
const request = require("supertest")(app);

describe("POST /users", () => {
  it("should create a new user", async () => {
    const response = await request.post("/users").send({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "secret",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email", "john.doe@example.com");
  });
});
