const {Op} = require('sequelize')
const multer = require( 'multer' )
/*  */
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
}
let storage = multer.diskStorage({
  destination: function( req, file, cb ) {
    const isValid = MIME_TYPE_MAP[ file.mimetype ]
    let error = new Error( "Invalid Mime type" )
    if (isValid) {
      error = null
    }
    cb(error, './public/uploads')
  },
  filename: function (req, file, cb) {
    /* const ext = file.mimetype.split("/")[1]; --- you can the extention of a file this way */
    const newFileName = file.originalname.toLowerCase().split('.')[0]
    const fileExtention = MIME_TYPE_MAP[file.mimetype]
    cb(null, `${newFileName}-${Date.now()}.${fileExtention}`)
  }
} )
let upload = multer( {storage: storage} )
let uploadSingle = upload.single( 'file' )
let uploadMultiple = upload.array('files', 12)
/*  */
let data;
let error;

const list = async ( request, model ) => {
    const {page} = request.params;
    const limit = 12;
    let offset = 0;
    const currentPage = page || 1;
    offset = ( currentPage > 1 ) ? ( currentPage - 1 ) * limit : offset;
    
    try {
        const {count, rows} = await model.findAndCountAll( {
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        } );

        const numOfPage = count / limit;
        // check if number is whole number
        const checkIfWhole = numOfPage % 1;
        const lastPage = (checkIfWhole !== 0) ? Math.floor(numOfPage + 1) : Math.floor(numOfPage);
        data = {
                offset,
                perPage: limit,
                currentPage: Number(currentPage),
                total: count,
                lastPage,
                data: rows,
            }
    } catch ( error ) {
        error = error
    }
    return {
        data,
        error
    }
}
const getOne = async ( req, model ) => {
    const {id} = req.params;
    try {
        const d = await model.findOne( {
            where: {id: id},
        } );
        data = d;
    } catch ( error ) {
        error = error;
    }
    return {
        data,
        error
    }
}
const create = async (model, data) => {
  const createData = await model.create( data );
  return createData;
}

const update = async ( model, request ) => {
  const { body, params } = request;
  const { id } = params;

  if (id === undefined) {
    return {
      errors: ["id is required"],
      message: "",
      data: {},
    };
  }

  let data = await model.update( body, {where: {id}} );
  console.log(data)
  if (data instanceof Array) {
    data = await model.findOne({ where: { id } });
    return { data, message: "update successful", errors: [] };
  }

  return { errors: ["not found"], message: [], data: {} };
};

const deleteModel = async (model, request) => {
  try {
    const { id } = request.params;
    const data = await model.destroy({
        where: {
          id,
        }
    } );
    return { data, message: "update successful", errors: [] }; 

  } catch(error) {
    return { errors: "looks like there is an error while trying to delete ", message: [], data: {} };
  };


}


const postSingleImg = (req, res) => {
  const host = req.host;
  const filePath = req.protocol + "://" + host +  req.file.path.replace(/\\/g, "/").substring('public'.length);
  if (!req.file) {
    return res.send({
      success: false
    });

  } else {
    return res.send({
      success: true,
      filePath,
    })
  }
}
const postMultipleImg =  (req, res, next) => {    
    return res.send( {
      success: true,
      file: req.files // there is an array of files info
    })
}
const getFileWithPath = (requestFile) => {
  return requestFile.path.replace(/\\/g, "/").substring('public'.length);
}

/* const addServerUrlToImgePathOnGetImage = (req) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
} */

module.exports = {upload, list, getOne, create, update, deleteModel, uploadSingle, uploadMultiple, postSingleImg, postMultipleImg, getFileWithPath}