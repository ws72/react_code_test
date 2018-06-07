/**
 * Created by songwang on 7/7/17.
 */
import express from 'express';
import {getRoomInfo} from './controllers/roomsController';
import command from './app/command';
import gameConsole from './app/gameConsole';

const server = express();

// server.set('view engine','ejs');
server.get('/',(req,res)=>{
  res.send('welcome');
});

server.use('/rooms/:x/:y', getRoomInfo);

server.listen(3003,()=>{
  console.log("Please enter east, west, south or north to move:");
});



const stdin = process.openStdin();

const curGameConsole =  new gameConsole();
const commands = ['east', 'west', 'south', 'north'];

stdin.addListener("data", function(d) {
    console.log("you entered: [" + d.toString().trim() + "]");

    let currentCommandString = d.toString().trim();


    if(commands.includes(currentCommandString)){
      let currentCommand = new command(currentCommandString);
      curGameConsole.placeCommand(currentCommand);
    }else{
      console.log("Please enter east, west, south or north to move:");
    }
  });
