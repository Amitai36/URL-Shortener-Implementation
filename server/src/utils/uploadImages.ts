import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'

import { mongoDBConnection } from "../config/index"

const storage = new GridFsStorage({
    url: mongoDBConnection, file: (req, file) => {
        console.log(req, "req")
        console.log(file, "file")
        if (file.mimetype === 'image/jpeg') {
            return {
                bucketName: 'photos'
            };
        } else {
            return null;
        }
    }
});
export const upload = multer({ storage });

