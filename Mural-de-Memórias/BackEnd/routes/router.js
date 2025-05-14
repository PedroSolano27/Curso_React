const express = require("express");
const { createMemory, getMemories, getMemory, deleteMemory, updateMemory, addComment, deleteComment } = require("../controllers/MemoryController");
const upload = require("../config/Uploads.js");

const router = express.Router();

router.post(    // Cria memória
    "/",
    upload.single("image"),
    (req, res, next) =>{
        if(!req.file){
            return res.status(400).json({msg: "Por favor, envie um arquivo."})
        }
        next();
    },
    (req, res) => createMemory(req,res)
);
router.get(     // Busca todas as memórias
    "/",
    (req, res) => getMemories(req, res)
);
router.get(     // Busca memória por Id
    "/:id",
    (req, res) => getMemory(req, res)
);
router.delete(  // Deleta memória por Id
    "/:id",
    (req, res) => deleteMemory(req, res)
);
router.patch(   // Edita memória por Id
    "/:id",
    upload.single("image"),
    (req, res) => updateMemory(req, res)
);
router.patch(   // Adiciona comentário
    "/:id/comment",
    (req, res) => addComment(req, res)
);
router.delete(  // Remove comentário
    "/:id/comment/:commentId",
    (req, res) => deleteComment(req, res)
);
module.exports = router;