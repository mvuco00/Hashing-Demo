import crypto from "crypto";
export const sendHash = (req, res) => {
  let data = req.body;
  console.log(data);
  if (data !== "") {
    res.status(200).send({
      hash:
        crypto.createHash("sha256").update(data.text).digest("hex") + "HASH",
    });
  } else {
    res.status(200).send({ message: data + "ENTER SMTH" });
  }
};

export const getData = (req, res, next) => {
  res.send("WELLCOME TO BACKEND SERVER");
};
