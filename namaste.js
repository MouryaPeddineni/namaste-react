//const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");
//const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(heading) // object ( React element or a javascript object )

//root.render(heading); // render method converts heading object into DOM object and put it into DOM tree

/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>
*/

// const div = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         [React.createElement("h1", {}, "I am an h1 tag"), 
//          React.createElement("h2", {}, "I am an h2 tag")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>
*/


const heading = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I am an h1 tag"),
         React.createElement("h2", {}, "I am an h2 tag")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I am an h1 tag"),
         React.createElement("h2", {}, "I am an h2 tag")]
    ),]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method replaces every thing inside the root with heading.
// React takes control over HTML
// React can be used in a specific portion of a website and it can also be used to develop complete large applications

