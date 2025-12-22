const header = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

console.log("heading : ", header);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  ,
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const parentRoot = ReactDOM.createRoot(document.getElementById("root2"));
parentRoot.render(parent);

console.log("parent", parent);

//root.render(parent);
