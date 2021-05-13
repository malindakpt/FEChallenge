# Facets Treeview

Facets are subset of filtering and help users to quickly refine their options without losing their way or ending up scrolling on irrelevant products. This project is built to display a checkbox tree facet component using react.\
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![image](https://user-images.githubusercontent.com/1351502/118091595-a1025000-b3e8-11eb-8259-5f73eaff86ac.png)


## Additional Features
- Preserve the expand/collapse state of children nodes when root nodes are expanded/collapsed.
- Show arrow indicators to indicate the expand/collapse state of nodes.
- Hide arrow indicators when children are not exists for the node.
- Parent nodes are automatically selected when all the children are selected.
- Parent node selection is automatically cleared when a selection of any child is cleared.
- Minimal number of nodes are re-rendered when a node status is changed.

## Notes
- `NodeFactory.generateNodeTree` method can intelligently identify the rootNode and no need to explicitly mention it. 
- There are two root nodes available with the provided data set. Both are displayed at the UI along with the ids of the nodes.
- Data file is included at the `src/data` folder of the projects as a `.ts` file.
- Custom hook, `useForcedRender` is used for forced render the components.
- Code formatting is enhanced with `Eslint` and `Prettier` plugins.
- `Unit tests` with `snapshot testing` are added only for `Select` component with `Jest` and `Enzyme`.
- Any state management frameworks are not used for this, since state can be handle by the component state itself.

## Future Optimizations
Optimize the re-render cycles by using memoized components

## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn lint`

Run Eslint code validation process and automatically fix the possible issues .\
This project uses `Prettier` for identifing style issues and `Eslint` for identifing linting issues.\
`yarn lint` checks for both types of issues in a single run.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
