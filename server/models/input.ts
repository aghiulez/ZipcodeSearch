const InputModel = (orango) => {
    const schema = new orango.Schema({
        zipcode: {type: String, required: true},
        timestamp: {type: Date, default: Date.now }
    });

    const Input = orango.model('Input', schema);

    Input.add = async (zipcode) => {
        console.log(zipcode);
        const newInput = new Input({zipcode});
        await newInput.validate(); 
        await newInput.save();
        return newInput;
    };

};

module.exports = {InputModel};


