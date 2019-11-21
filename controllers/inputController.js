const InputController = async (orango, zipcode) => {
    const InputModel = orango.model("Input");
    await InputModel.add({zipcode});
}

module.exports = InputController;