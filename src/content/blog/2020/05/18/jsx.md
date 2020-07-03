---
path: "/jsx-basics"
title: "React: JSX Basics"
date: "2020-05-18"
---

Over the last year, I've been on a mission to learn modern JavaScript. Much of the language has changed and improved since my initial exposure to it, and I've found no shortage of things to explore. I've also landed on React as my front-end framework of choice and have really been enjoying the experience.

For some time I've wanted to set down and think through the different basic building blocks of React, so this will be the first of many posts covering React fundamentals as I understand them.

Today let's talk about JSX.

## What is JSX?

JSX is React's syntax extension to regular JavaScript. React has embraced the idea that rendering logic should be coupled with other UI logic -- things like how events are handled, how data flows through the application, and how to deal with changes to application state over time.

It is worth noting that JSX is not a requirement for using React: you can do everything without JSX that could be done with JSX. However, many people find JSX to be a very useful tool for working with UI elements inside JavaScript files. It also helps React show more useful error and warning messages.

Let's look at the most basic example of JSX:

```jsx
let greeting = <h1 className="greeting">Hello, world!</h1>
```

Clearly, this is not normal HTML or JavaScript! If we run this code in a normal JavaScript file it will immediately throw a `SyntaxError` at the `<` because this isn't valid JavaScript!

Under the hood, the JSX gets 'translated' into regular JavaScript at runtime with a tool called [Babel](https://babeljs.io/docs/en/).

> An explanation of Babel is beyond the scope of this post, but their documentation is excellent if you'd like to learn more!

The same statement after this 'translation' step looks like this:

```jsx
let greeting = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
)
```

Note that because React does all the heavy lifting of turning our JSX into `React.createElement` calls, React must always be in scope from our JSX code.

## Embed Expressions with JSX

Because JSX is ultimately just JavaScript at the end of the day, we can use any valid JavaScript expression inside curly braces in our JSX.

It can be helpful to think of curly braces in JSX as indicating to React that we are stepping out of HTML-land and into JavaScript-land, allowing us to write any JavaScript code we want inside those braces.

Imagine that we have an element of an application that displays a random number between 0 and 100 every time a user visits the website. Using JSX we can do something like this:

```jsx
let randomNumber = Math.floor(Math.random() * 100)

<p>Your random number is: {randomNumber}</p>
```

We can wrap any JavaScript expression in curly braces inline in our JSX and it will be translated into whatever value the expression evaluates to at runtime.

After compilation, JSX is translated into normal JavaScript function calls which evaluate to JavaScript objects. This means that we can use JSX statements anywhere that we normally use JavaScript statements (if/else statements, switch statements, loops, variables, etc).

```jsx
let randomNumber = Math.floor(Math.random() * 100)

if (randomNumber < 75) {
  return (
    <p>Your random number {randomNumber} is pretty low, try again later!</p>
  )
}
return <p>Your random number {randomNumber} is over 75!</p>
```

These examples abstract away a lot of markup related to components in React, which I'll cover in a future post, but for now I just want to show how to embed simple expressions into JSX statements.

## Use JSX to Set HTML Attributes

We can also use JSX to set HTML attributes, allowing us to use dynamic values as attributes on HTML elements. Let's look at an example:

```jsx
let element = <img src={userImage} />
```

> Because this element doesn't have any _children_, we can self-close the tag as we can in an XML document

In practice, when we use this `element`, we can render different images depending on the `useImage` value passed into the `src` attribute. This allows us to _reuse the same element with different values_, providing flexibility and reusability in our code. The `useImage` value could come from anywhere in our application -- an HTTP request, user input, etc. Our JSX is the same, it is only concerned with rendering the final value.

## Children in JSX

JSX tags can also contain children, just like HTML elements:

```jsx
let element = (
  <div>
    <h1>This is a nested heading!</h1>
    <p>We can nest as many children as we want!</p>
    <div>
      <ul>
        <li>Turtles</li>
        <li>All</li>
        <li>The</li>
        <li>Way</li>
        <li>Down!</li>
      </ul>
    </div>
  </div>
)
```

> We wrap this JSX in parentheses to avoid issues with [automatic semicolon insertion (ASI)](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)

We can also use JavaScript anywhere in this hierarchy of children, just like with any other JSX element. Again, this unlocks some really powerful stuff in practice!

<hr>

That wraps up our brief look at what JSX is and how it works. Remember that JSX is really just syntactic sugar on top of normal JavaScript (_React's extension to Javascript_), so while it may feel like magic sometimes, at the end of the day we're still just writing JavaScript!
