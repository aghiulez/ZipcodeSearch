const InputModel = orango => {
    const schema = new orango.Schema({
        zipcode: {type: String, required: true}
    });
    const Input = orango.model('Input', schema);
    Input.add = async ({zipcode}) => {
        const newInput = new Input({zipcode});
        await newInput.validate(); 
        await newInput.save();
        return newInput;
    };
};
module.exports = InputModel;

