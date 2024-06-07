const nodemailer = require("nodemailer")
exports.emailSend = async (req, res) => {
    try {
        let {email, phone, fullName, message, address} = req.body
        email = email && email.toString().trim() != "" ? email : ""
        phone = phone && phone.toString().trim() != "" ? phone : ""
        fullName = fullName && fullName.toString().trim() != "" ? fullName : ""
        message = message && message.toString().trim() != "" ? message : ""
        address = address && address.toString().trim() != "" ? address : ""
        if(email == "" || !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            return res.json({ status: false, message: "Enter a valid mail" }); 
        if(phone == "" || !phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
            return res.json({ status: false, message: "Enter a valid contact number" }); 
        if(fullName == "" || fullName.length > 50)
            return res.json({ status: false, message: "Enter a valid name" }); 
        if(message == "" || message.length > 500)
            return res.json({ status: false, message: "Enter a valid message" });
        if(address == "" || address.length > 100)
            return res.json({ status: false, message: "Enter a valid address" });
        const options = {
            from: email,
            to: process.env.SEND_TO,
            subject: 'Message From Portfolio',
            html: `
                <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
                <div style="max-width: 700px; background-color: white; margin: 0 auto">
                  <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
                  <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                      Form Vanitha - Portfolio
                    </p>
                  </div>
                  <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                    <div style="font-size: .8rem; margin: 0 30px">
                      <p>Name: <b>${fullName}</b></p>
                      <p>Email: <b>${email}</b></p>
                      <p>Phone: <b>${phone}</b></p>
                      <p>Address: <b>${address}</b></p>
                      <p>Message: <i>${message}</i></p>
                    </div>
                  </div>
                </div>
              </div>
                `,
          };
          let transpoter = nodemailer.createTransport({
            service: 'gmail', //i use gmail
            auth: {
              user: process.env.SEND_TO, // email
              pass: process.env.PASSWORD, //password
            },
          });
          transpoter.sendMail(options, (err, info) => {
            if (err) {
              console.log(err);
              return;
            }
          });
        return res.json({status:true, message: "Sent Successfully"});
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Something went wrong" });
    }
};
