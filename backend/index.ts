import express from "express";
import cors from "cors";
import { connectToDb } from "./connectToDb";
import cookieParser from "cookie-parser";
import { travelRouter } from "./routes/travelRoute";
import upload from "./mildwares/multer";
import cloudinary from "./utils/cloudinary";
import { ImageModel } from "./models/imageModel";
import touristRouter from "./routes/touristRoute";
import categoryRouter from "./routes/categoryRoute";

const app = express();
const PORT = 8800;
connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
//test pls
app.use("/travel", travelRouter);
app.use("/tourist", touristRouter);
app.use("/category", categoryRouter);

// app.use("/travelcalendar", );
// app.use("/travelroute", );

app.get("", (req, res) => {
  res.send("Hello world");
});

app.use("/upload", upload.single("image"), async (req, res) => {
  const uploadedFile = req.file;
  if (!uploadedFile) {
    return res.status(400).json({ message: "fail to upload image" });
  }

  try {
    const newImage = await cloudinary.uploader.upload(uploadedFile.path);

    const image = new ImageModel({ imageUrl: newImage.secure_url });
    await image.save();
    return res.status(200).json({ message: "successful", image: image });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "fail to upload image" });
  }
});

app.listen(PORT, () => {
  console.log("running at http://localhost:" + PORT);
});
