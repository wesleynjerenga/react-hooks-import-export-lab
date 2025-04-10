import { username, city, image } from "../data";

// Example test (adjust based on your test framework)
test("variables are defined and exported", () => {
  expect(username).toBe("Liza");
  expect(city).toBe("New York");
  expect(image).toBe("https://i.imgur.com/mV8PQxj.gif");
});