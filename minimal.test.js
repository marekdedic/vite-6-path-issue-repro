const { build } = require("vite");

test("Minimal", async () => {
  const output = await build({
    build: {
      rollupOptions: {
        input: {
          app: "dummy.html",
        },
      },
    },
  });
  expect(false).toBeTrue();
});
