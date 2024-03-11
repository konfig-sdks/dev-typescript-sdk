import { Dev } from "./index";

describe("dev-typescript-sdk", () => {
    it("initialize client", async () => {
        const dev = new Dev({
            apiKey: "API_KEY",
        });
    });
});
