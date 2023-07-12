import { generateNewTask } from "./taskUtil";

describe("Test util function", () => {
  test("Should be have a title propertie", () => {
    const { title } = generateNewTask("Estudar NodeJS");

    expect(title).toBe("Estudar NodeJS");
  });

  test("Should be have a id with value between 0 and 9999", () => {
    const { id } = generateNewTask("Estudar NodeJS");

    const validId = id > 0 && id < 9999;

    expect(validId).toBe(true);
  });
});
