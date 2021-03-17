import crypto from "crypto";
export const sendHash = (req, res) => {
  let data = req.body;
  if (data !== "") {
    res.status(200).send({
      hash: crypto.createHash("sha256").update(data.text).digest("hex"),
      hash_sha512: crypto.createHash("sha512").update(data.text).digest("hex"),
      hash_sha384: crypto.createHash("sha384").update(data.text).digest("hex"),
    });
  } else {
    res.status(200).send({ message: data + "ENTER SMTH" });
  }
};

export const getData = (req, res, next) => {
  res.send("WELLCOME TO BACKEND SERVER");
};
