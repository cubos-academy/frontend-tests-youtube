import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./index";

describe("TodoList component", () => {
  test("Should be have a button in initial screen", () => {
    const { getByRole } = render(<TodoList />);

    expect(getByRole("button").textContent).toBe("Add");
  });

  test("Should be have a empty list", () => {
    const { getByRole } = render(<TodoList />);

    expect(getByRole("list")).toBeInTheDocument();
  });

  test("Should be have a input", () => {
    const { getByRole } = render(<TodoList />);

    expect(getByRole("textbox")).toBeInTheDocument();
  });

  test("Should be fill a input after put a new value", () => {
    const { getByRole } = render(<TodoList />);

    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "Nova tarefa",
      },
    });

    expect(input.value).toBe("Nova tarefa");
  });

  test("Should be fill a input after put a new value", async () => {
    const { getByRole, findAllByRole } = render(<TodoList />);

    const input = getByRole("textbox") as HTMLInputElement;
    const button = getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Nova tarefa",
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Nova tarefa 2",
      },
    });

    fireEvent.click(button);

    const tasksInScreen = await findAllByRole("listitem");

    expect(tasksInScreen).toHaveLength(2);
  });
});
