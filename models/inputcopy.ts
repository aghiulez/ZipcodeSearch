const InputModel = (orango:any) => {
    const schema: any = new orango.Schema({
        zipcode: {type: String, required: true},
        timestamp: {type: Date, default: Date.now }
    });
    const Input:any = orango.model('Input', schema);
    Input.add = async ({zipcode}) => {
        const newInput = new Input({zipcode});
        await newInput.validate(); 
        await newInput.save();
        return newInput;
    };
};

export{InputModel};
//module.exports = InputModel;

