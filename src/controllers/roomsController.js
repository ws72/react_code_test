import rooms from '../models/roomsModel'

export const getRoomInfo = (req,res)=>{
  
  let posX = req.params.x, posY = req.params.y;

  let roomInfo = new rooms(24);

  res.send(roomInfo.getRoomData(posX,posY));
};

    