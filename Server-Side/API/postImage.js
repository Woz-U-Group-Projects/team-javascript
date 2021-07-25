const path = require('path');
app.post("/api/image", upload.single('image'), (req, res, err) => {

    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {

        res.send({ msg: 'Only image files (jpg, jpeg, png) are allowed!' })
    }

} else {

    const image = req.file.filename;
    const id = 1;

    const sqlInsert = "UPDATE images SET `image` = ? WHERE id = ?;"


    connection.query(sqlInsert, [image, id], (err, result) => {
        if (err) {
            console.log(err)
            res.send({
                msg: err
            })
        }


        if (result) {

            res.send({
                data: result,
                msg: 'Your image has been uploaded'
            });
        }
});

}
        
});