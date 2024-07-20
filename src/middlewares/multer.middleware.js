import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp");
  },
  filename: (req, file, cb) => {
    // we can add some random string to the file name to avoid name conflicts in future
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
