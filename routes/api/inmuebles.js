const router = require("express").Router();
const { check } = require("express-validator");

const Inmueble = require("../../models/inmueble.model");

router.get("/", async (req, res) => {
  try {
    const result = await Inmueble.find();

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.messsage });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await Inmueble.create(req.body);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.messsage });
  }
});

router.put("/:idInmueble", async (req, res) => {
  try {
    let { idInmueble } = req.params;
    const result = await Inmueble.findByIdAndUpdate(idInmueble, req.body, {
      new: true,
    });

    if (!result) {
      return res.json({ Msg: "No existen datos para el ID" });
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.messsage });
  }
});

router.delete("/:idInmueble", async (req, res) => {
  try {
    let { idInmueble } = req.params;
    const result = await Inmueble.findByIdAndDelete(idInmueble);

    if (!result) {
      return res.json({ Msg: "No existen datos para el ID" });
    }

    res.json(result);
  } catch (error) {
    res.json({ Error: error.messsage });
  }
});

module.exports = router;
