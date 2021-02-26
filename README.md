# Web Component Template

This is a lean template to get started with creating your own web component.

1. Select the name of your web component tag. We will use `awesome-wc` as an example.

2. Rename the following:

- The `src/WebComponent.ts` file to `src/AwesomeWc.ts` and in the file:
- `web-component` → `awesome-wc`
- `webComponent` → `awesomeWc`
- `WebComponent` → `AwesomeWc`

3. Update the following in the `package.json` file:

- name
- description
- main
- keywords
- author
- respository

4. Update the `dist/index.html` file to include your web component tag and use the `README_TEMPLATE.md` to create a `README.md` file.

5. Run the following:

```sh
npm install
npm run start
```

6. Make changes to the `src/style.scss` and `src/AwesomeWc.ts` file.

7. And you're off making your web component 🚀
