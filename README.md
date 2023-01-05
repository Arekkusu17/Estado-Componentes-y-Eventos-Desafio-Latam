# Desafío Estado de los Componentes y Eventos - Desafío Latam
The meaning of this challenge is to validate our knowledge of React using states in components and events.

Site of deploy: https://tangerine-snickerdoodle-756ba0.netlify.app

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

 ## Work Done
- Create the Input.jsx component, I used bootstrap so i used a simple input of the text type. It receive the props that will be used on the **onChange attribute, placeholder and a title**.
```
const Input=({title, changeEvent,placeholder})=>{
  return(
    <div className="mb-3 col-8">
      <h4>{title}</h4>
      <input
        onChange={changeEvent}
        type="text"
        className="form-control"
        placeholder={placeholder}
        
      />
      </div>      
  );
};
```
- Create a simple Button.jsx to be shown when the requeriments are achieved. It will receive a prop, for the **type** of button in the form 
```
const Button =({type})=>{
  return(<button type={type} className="btn btn-primary col-6">Success</button>)
}
```

- Add the Readme.
