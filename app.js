<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="index.js">
      const element = (
        <div>
          <h1 className="greeting">Hello!</h1>
          <p>Good to see you here. </p>
        </div>
      );
      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
