.body {
  font-family: 'Arial', sans-serif; /*main body*/
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.game-container {  
  background-color: #fff; /*main game conatainer*/
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  max-width: 400px;
  width: 100%;
}

button {
  padding: 10px;  /*main button styling*/
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

/* on success of finding */
p.success {
  color: #008000;
}

@media screen and (max-width: 480px) {
  .game-container {
    margin: 10px;
  }
}

/*button styling*/
.button-style {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button-style:hover {
  transform: scale(1.05);
}

.reset-button {
  background-color: #e74c3c;
  color: #ffffff;
}

/*main container */


.treasure-hunt-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*animation*/

.generate-button,  
.verify-button,
.reset-button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.generate-button:hover,
.verify-button:hover,
.reset-button:hover {
  transform: scale(1.2);
}

.generate-button:active,
.verify-button:active,
.reset-button:active {
  transform: scale(0.8);
}
