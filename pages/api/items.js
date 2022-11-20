// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data.json' assert {type: 'json'};

export default function handler(req, res) {

  let items_list = [];
  for (let key in data){
    items_list.push(data[key])
  }
  res.status(200).json({'items': items_list});
}
