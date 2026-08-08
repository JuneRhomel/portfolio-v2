import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CopyEmail } from "./copy-email";

describe("CopyEmail", () => {
  it("copies the address and confirms success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });
    render(<CopyEmail email="hello@example.com" />);
    fireEvent.click(
      screen.getByRole("button", { name: /copy email address/i }),
    );
    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith("hello@example.com"),
    );
    expect(
      screen.getByRole("button", { name: /copied to clipboard/i }),
    ).toBeInTheDocument();
  });
});
