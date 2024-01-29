const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

//we will use express router
const router = require("express").Router();
//our endpoints
//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
