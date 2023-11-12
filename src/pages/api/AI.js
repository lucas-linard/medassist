
import axios from "axios";

export default async function handler(req, res) {


  const data = [
    [
      0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1,
      1, 0, 1, 0, 1, 0, 0, 1, 1,
    ],
  ]

  const response = await axios.post(
    "https://2280-34-139-162-118.ngrok-free.app/process_data",{
      headers: {
        'Content-Type': 'text/plain',
      },
       body: JSON.stringify({ data }),
    
    }
  );

  res.status(200).json(response.data);
}
