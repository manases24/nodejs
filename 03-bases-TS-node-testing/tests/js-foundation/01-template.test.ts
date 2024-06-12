import { emailTemplate } from "../../src/js-foundation/01-template";

describe("Test in the 'js-foundation/01-template' file", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    // toMatch usa expresion regular
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
