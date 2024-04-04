import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_req: Request, res: Response) => {
  return res.send("Travel backend deploy");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("test deploy backend pong🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
